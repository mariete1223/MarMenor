const SensorHistoric = require("../models/sensorHistoric");
const QueryUtils = require("../database/queryUtils");
const axios = require('axios');
const parse = require('csv-parser');
const fs = require('fs');
const path = require('path');
const $rdf = require('rdflib');
const mongoose = require("mongoose");

const batchSize = 10000;
isUpdateEnabled = false;
const collections = {};


const endpointURL = 'http://fuseki:3030/prueba';

lecturas = []

function generateCloseMeasurement(closeMe, prefix) {
    let closeMeasurements = ""

    if (closeMe.length > 0) {
        closeMeasurements = prefix + `:closeMeasurements [ a ngsi-ld:Property ; ngsi-ld:hasValue [  a ngsi-ld:Relationship ; ngsi-ld:hasObject <${closeMe[0]}> ]`;
        for (let i = 1; i < closeMe.length; i++) {
            closeMeasurements += `, [ a ngsi-ld:Relationship ; ngsi-ld:hasObject <${closeMe[i]}> ]`;
        }
        closeMeasurements += " ] ;";
    }
    return closeMeasurements;
}

function getControlledProperties(data) {
    let controlledString = "";
    data.value.forEach(controlled => {
        controlledString += `"${controlled}",`;
    });
    controlledString = controlledString.slice(0, -1);
    return controlledString;
}

module.exports.uploadFile = async (req, res, next) => {
        
    try{
        const payload = req?.body;
        const controlledId = req?.params?.idEntity;
        const sensorId = payload?.sensorId;
        const measuredProperty = payload?.controlledProperty;
        const measureType = payload?.measureType;
        const controlledCsvHeader = payload?.controlledCsvHeader;
        const unitCode = payload?.unitCode;
        const file = payload?.file;
        const filePath = __dirname+"/../historicData/SAIHdatasActualizados/"+file;
        var resultsStream = {};

        let collectionName = controlledId+"_"+sensorId;
        const Colecction = obtainCollection(collectionName);

        fs.createReadStream(filePath)
        .pipe(parse({delimiter: ','}))
        .on('data', async (row) => {
            const streamId = sensorId;

            if (!resultsStream[streamId]) {
                resultsStream[streamId] = [];
            }

            if (measureType == 'singleValue') {

                resultsStream[streamId].push(
                    {
                        "value": row[controlledCsvHeader],
                        "observedAt": row["Date"],
                        "metadata": {
                            "sensorId": sensorId,
                            "controlledId": controlledId,
                            "type": measuredProperty,
                            "unitCode": unitCode
                        }
                    }
                );
            } else {
                let multipleValues = [];
                for (header of controlledCsvHeader){
                    //añadir location en caso de ser una rambla
                    // quitar que sea un array el value en caso de ser una rambla
                    const regex = /_(-?\d+(\.\d+)?)$/;

                    const match = header.match(regex);
                    let value = {"value": row[header]}

                    if (match) {
                        value["depth"] = match[1]; 
                    }

                    multipleValues.push(value);
                }

                resultsStream[streamId].push(
                    {
                        "value": multipleValues,
                        "observedAt": row["Date"],
                        "metadata": {
                            "sensorId": sensorId,
                            "controlledId": controlledId,
                            "type": measuredProperty,
                            "unitCode": unitCode
                        }
                    }
                );
            }

            if ( resultsStream[streamId].length == batchSize) {
                let dataToInsert = [...resultsStream[streamId]];
                resultsStream[streamId] = [];
                await Colecction.insertMany( dataToInsert);
                dataToInsert= null;
                
            }
        }).on('end', async () => {
            const streamId = sensorId;
            if ( resultsStream[streamId].length > 0) {
                await Colecction.insertMany( resultsStream[streamId]);
                delete resultsStream[streamId];
            }
        });
        res.status(204).send();
    }
    catch(err){
        res.status(500).send(err);
    }

    
}

module.exports.debug = async (req, res, next) => {
    res.json(lecturas);
}



module.exports.updateBuoy = async (req, res, next) => {

    data = req?.body["data"][0];

    console.log("CloseM")
    let objects = [];
    if (data.closeMeasurements) {
        console.log(data.closeMeasurements)
        objects = data.closeMeasurements.value.map(measurement => measurement.object);
    }
    console.log(objects)
    const sparqlUpdate = `
        PREFIX : <https://uri.etsi.org/ngsi-ld/default-context/>
        PREFIX ngsi-ld: <https://uri.etsi.org/ngsi-ld/>
        PREFIX ns1: <https://smartdatamodels.org/>
        PREFIX ns2: <https://raw.githubusercontent.com/mariete1223/MarMenor/main/SoundingPlace/soundingPlace.yaml#/>
        PREFIX ns3: <https://raw.githubusercontent.com/mariete1223/MarMenor/main/SoundingPlace/soundingPlace.yaml#/>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

        DELETE {
            ?entity ngsi-ld:name ?name ;
                ns1:address ?address ;
                ns1:source ?source ;
                ngsi-ld:description ?description ;
                ns3:closeMeasurements ?closeMeasurements ;
                ngsi-ld:location ?location .
        }
        INSERT {
            ?entity a <https://raw.githubusercontent.com/mariete1223/MarMenor/main/Buoy/buoy.yaml#/Buoy> ;
                ngsi-ld:name [ a ngsi-ld:Property ; ngsi-ld:hasValue "${data["name"]["value"]}" ] ;
                ns1:address [ a ngsi-ld:Property ;
                    ngsi-ld:hasValue [ ns1:addressCountry "${data["address"]["value"]["addressCountry"]}" ;
                            ns1:addressLocality "${data["address"]["value"]["addressLocality"]}" ;
                            ns1:addressRegion "${data["address"]["value"]["addressRegion"]}" ;
                            ns1:postalCode "${data["address"]["value"]["postalCode"]}" ] ] ;
                ns1:source [ a ngsi-ld:Property ; ngsi-ld:hasValue "${data["source"]["value"]}" ] ;
                ngsi-ld:description [ a ngsi-ld:Property ; ngsi-ld:hasValue "${data["description"]["value"]}" ] ;
                ${generateCloseMeasurement(objects, "ns3")}
                ngsi-ld:location [ a ngsi-ld:GeoProperty ;
                ngsi-ld:hasValue [ a :Point ;
                        ngsi-ld:coordinates "${data["location"]["value"]["coordinates"][0]}"^^xsd:double,
                            "${data["location"]["value"]["coordinates"][1]}"^^xsd:double ] ] .
        }
        WHERE {
            ?entity a <https://raw.githubusercontent.com/mariete1223/MarMenor/main/Buoy/buoy.yaml#/Buoy> ;
                    ns1:identifier [ ngsi-ld:hasValue "${data["id"]}" ] .
            OPTIONAL {
                ?entity ngsi-ld:name ?name ;
                            ns1:address ?address ;
                            ns1:source ?source ;
                            ngsi-ld:description ?description ;
                            ns3:closeMeasurements ?closeMeasurements ;
                            ngsi-ld:location ?location .
            }
        }
    `;

    console.log(sparqlUpdate)
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/sparql-update',
    },
    body: sparqlUpdate,
    };

    fetch(endpointURL, requestOptions)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
    
    res.status(204).send();
    return;
}

module.exports.updateRavine = async (req, res, next) => {

    data = req?.body["data"][0];
    console.log("CloseM")
    let objects = [];
    if (data.closeMeasurements) {
        console.log(data.closeMeasurements)
        objects = data.closeMeasurements.value.map(measurement => measurement.object);
    }
    console.log(objects)
    const sparqlUpdate = `
        PREFIX : <https://uri.etsi.org/ngsi-ld/default-context/>
        PREFIX ngsi-ld: <https://uri.etsi.org/ngsi-ld/>
        PREFIX ns1: <https://smartdatamodels.org/>
        PREFIX ns2: <https://raw.githubusercontent.com/mariete1223/MarMenor/main/Ravine/ravine.yaml#/>
        PREFIX ns3: <https://raw.githubusercontent.com/mariete1223/MarMenor/main/SoundingPlace/soundingPlace.yaml#/>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        PREFIX schema: <https://schema.org/>

        DELETE {
        ?entity ngsi-ld:name ?name ;
            ns1:address ?address ;
            ns1:source ?source ;
            ngsi-ld:description ?description ;
            ngsi-ld:location ?location ;
            ns2:nextSection ?nextSection ;
            ns2:previousSection ?previousSection ;
            ns2:section ?section ;
            ns3:closeMeasurements ?closeMeasurements ;
            schema:isPartOf ?isPartOf .
        }
        INSERT {
        ?entity a ns2:Ravine ;
            ngsi-ld:name [ a ngsi-ld:Property ;
                ngsi-ld:hasValue "${data.name.value}" ] ; 
            ns1:address [ a ngsi-ld:Property ;
                ngsi-ld:hasValue [ ns1:addressCountry "${data.address.value.addressCountry}" ;
                        ns1:addressLocality "${data.address.value.addressLocality}" ;
                        ns1:addressRegion "${data.address.value.addressRegion}" ;
                        ns1:postalCode "${data.address.value.postalCode}" ] ] ;
            ns1:source [ a ngsi-ld:Property ;
                            ngsi-ld:hasValue "${data.source.value}" ] ;
            ngsi-ld:description [ a ngsi-ld:Property ;
                            ngsi-ld:hasValue "${data.description.value}" ] ;
            ngsi-ld:location [ a ngsi-ld:GeoProperty ;
                ngsi-ld:hasValue [ a :Point ;
                        ngsi-ld:coordinates "${data.location.value.coordinates[0]}"^^xsd:double,
                            "${data.location.value.coordinates[1]}"^^xsd:double ] ] ;
            ns2:nextSection [ a ngsi-ld:Property ;
                ngsi-ld:hasValue "${data.nextSection.value}" ] ; 
            ns2:previousSection [ a ngsi-ld:Property ;
                ngsi-ld:hasValue "${data.previousSection.value}" ] ;
            ns2:section [ a ngsi-ld:Property ;
                ngsi-ld:hasValue "${data.section.value}" ] ;
            ${generateCloseMeasurement(objects, "ns3")}
            schema:isPartOf [ a ngsi-ld:Relationship ;
                ngsi-ld:hasObject <${data.isPartOf.object}> ] .
        }
        WHERE {
        ?entity a ns2:Ravine ;
                ns1:identifier [ ngsi-ld:hasValue "${data.id}" ] .
        OPTIONAL {
            ?entity ngsi-ld:name ?name ;
                        ns1:address ?address ;
                        ns1:source ?source ;
                        ngsi-ld:description ?description ;
                        ngsi-ld:location ?location ;
                        ns2:nextSection ?nextSection ; 
                        ns2:previousSection ?previousSection ;
                        ns2:section ?section ;
                        schema:isPartOf ?isPartOf ;
                        ns3:closeMeasurements ?closeMeasurements ;
        }
        }`;

    console.log(sparqlUpdate)
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/sparql-update',
    },
    body: sparqlUpdate,
    };

    fetch(endpointURL, requestOptions)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
    
    res.status(204).send();
    return;
}

module.exports.updateSoundingPlace = async (req, res, next) => {

    data = req?.body["data"][0];
    console.log("CloseM")
    let objects = [];
    if (data.closeMeasurements) {
        console.log(data.closeMeasurements)
        objects = data.closeMeasurements.value.map(measurement => measurement.object);
    }
    console.log(objects)
    const sparqlUpdate = `
        PREFIX : <https://uri.etsi.org/ngsi-ld/default-context/>
        PREFIX ngsi-ld: <https://uri.etsi.org/ngsi-ld/>
        PREFIX ns1: <https://smartdatamodels.org/>
        PREFIX ns2: <https://raw.githubusercontent.com/mariete1223/MarMenor/main/Ravine/ravine.yaml#/>
        PREFIX ns3: <https://raw.githubusercontent.com/mariete1223/MarMenor/main/SoundingPlace/soundingPlace.yaml#/>
        PREFIX ns4: <https://smartdatamodels.org/dataModel.Device/>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        PREFIX schema: <https://schema.org/> 
    
        DELETE {
            ?entity ngsi-ld:name ?name ;
                ns1:address ?address ;
                ns1:source ?source ;
                ngsi-ld:description ?description ;
                ngsi-ld:location ?location ;
                ns4:category ?category ;
                ns3:numberInNetwork ?numberInNetwork ;
                schema:isPartOf ?isPartOf ;
                ns3:closeMeasurements ?closeMeasurements .
        }
        INSERT {
            ?entity a <https://raw.githubusercontent.com/mariete1223/MarMenor/main/SoundingPlace/soundingPlace.yaml#/SoundingPlace> ;
                ngsi-ld:name [ a ngsi-ld:Property ; ngsi-ld:hasValue "${data.name.value}" ] ;
                ns1:address [ a ngsi-ld:Property ;
                    ngsi-ld:hasValue [ ns1:addressCountry "${data.address.value.addressCountry}" ;
                            ns1:addressLocality "${data.address.value.addressLocality}" ;
                            ns1:addressRegion "${data.address.value.addressRegion}" ;
                            ns1:postalCode "${data.address.value.postalCode}" ] ] ;
                ns1:source [ a ngsi-ld:Property ; ngsi-ld:hasValue "${data.source.value}" ] ;
                ngsi-ld:description [ a ngsi-ld:Property ; ngsi-ld:hasValue "${data.description.value}" ] ;
                ngsi-ld:location [ a ngsi-ld:GeoProperty ;
                ngsi-ld:hasValue [ a :Point ;
                        ngsi-ld:coordinates "${data.location.value.coordinates[0]}"^^xsd:double,
                            "${data.location.value.coordinates[1]}"^^xsd:double ] ] ;
                ns3:numberInNetwork [ a ngsi-ld:Property ; ngsi-ld:hasValue "${data.numberInNetwork.value}" ] ; 
                ns4:category [ a ngsi-ld:Property ; ngsi-ld:hasValue "${data.category.value}" ] ;
                ${generateCloseMeasurement(objects, "ns3")}
                schema:isPartOf [ a ngsi-ld:Relationship ; ngsi-ld:hasObject "${data.isPartOf.object}" ] .
        }
        WHERE {
            ?entity a <https://raw.githubusercontent.com/mariete1223/MarMenor/main/SoundingPlace/soundingPlace.yaml#/SoundingPlace> ;
                    ns1:identifier [ ngsi-ld:hasValue "${data.id}" ] .
            OPTIONAL {
                ?entity ngsi-ld:name ?name ;
                            ns1:address ?address ;
                            ns1:source ?source ;
                            ngsi-ld:description ?description ;
                            ngsi-ld:location ?location ;
                            ns4:category ?category ;
                            ns3:numberInNetwork ?numberInNetwork ;
                            schema:isPartOf ?isPartOf ;
                            ns3:closeMeasurements ?closeMeasurements ;
            }
        }
    `;
    
    console.log(sparqlUpdate)
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/sparql-update',
    },
    body: sparqlUpdate,
    };

    fetch(endpointURL, requestOptions)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
    
    res.status(204).send();
    return;
}


module.exports.updateDevice = async (req, res, next) => {

    data = req?.body["data"][0];
 
    const sparqlUpdate = `
            PREFIX : <https://uri.etsi.org/ngsi-ld/default-context/> 
            PREFIX ngsi-ld: <https://uri.etsi.org/ngsi-ld/> 
            PREFIX ns1: <https://smartdatamodels.org/dataModel.Device/> 
            PREFIX ns2: <https://smartdatamodels.org/>
            PREFIX ns3: <https://smartdatamodels.org/dataModel.WaterDistributionManagementEPANET/>
            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 

            DELETE {
                ?entity ns2:address ?address ;
                    ns2:controlledProperty ?controlledProperty ;
                    ns1:controlledAsset ?controlledAsset ;
                    ns1:deviceCategory ?deviceCategory ;
                    ns3:alternateName ?alternateName ;
                    ns3:areaServed ?areaServed ;
                    ns2:dateLastValueReported ?dateLastValueReported ;
                    ns2:source ?source ;
                    ngsi-ld:description ?description ;
                    ngsi-ld:location ?location ;
                    ngsi-ld:name ?name .
            }
            INSERT {
                ?entity a ns1:Device ;
                    ns2:address [ a ngsi-ld:Property ;
                        ngsi-ld:hasValue [ ns2:addressCountry "${data.address.value.addressCountry}" ;
                                ns2:addressLocality "${data.address.value.addressLocality}" ;
                                ns2:addressRegion "${data.address.value.addressRegion}" ;
                                ns2:postalCode "${data.address.value.postalCode}" ] ] ;
                    ns2:controlledProperty [ a ngsi-ld:Property ;
                        ngsi-ld:hasValue ${getControlledProperties(data.controlledProperty)} ] ;
                    ns1:controlledAsset [ a ngsi-ld:Relationship ;
                        ngsi-ld:hasObject <${data.controlledAsset.object[0]}> ] ;
                    ns1:deviceCategory [ a ngsi-ld:Property ;
                        ngsi-ld:hasValue "${data.deviceCategory.value}" ] ;
                    ns3:alternateName [ a ngsi-ld:Property ;
                        ngsi-ld:hasValue "${data.alternateName.value}" ] ;
                    ns3:areaServed [ a ngsi-ld:Property ;
                        ngsi-ld:hasValue "${data.areaServed.value}" ] ;
                    ns2:dateLastValueReported [ a ngsi-ld:Property ;
                        ngsi-ld:hasValue "${data.dateLastValueReported.value}" ] ;
                    ns2:source [ a ngsi-ld:Property ;
                        ngsi-ld:hasValue "${data.source.value}" ] ;
                    ngsi-ld:description [ a ngsi-ld:Property ;
                        ngsi-ld:hasValue "${data.description.value}" ] ;
                    ngsi-ld:location [ a ngsi-ld:GeoProperty ;
                        ngsi-ld:hasValue [ a :Point ;
                            ngsi-ld:coordinates "${data.location.value.coordinates[0]}"^^xsd:double,
                            "${data.location.value.coordinates[1]}"^^xsd:double ] ] ;
                    ngsi-ld:name [ a ngsi-ld:Property ;
                        ngsi-ld:hasValue "${data.name.value}" ] .
            }
            WHERE {
                ?entity a ns1:Device ;
                    ns2:identifier [ ngsi-ld:hasValue "${data.id}" ] .
                OPTIONAL {
                    ?entity ns2:address ?address ;
                        ns2:controlledProperty ?controlledProperty ;
                        ns1:controlledAsset ?controlledAsset ;
                        ns1:deviceCategory ?deviceCategory ;
                        ns3:alternateName ?alternateName ;
                        ns3:areaServed ?areaServed ;
                        ns2:dateLastValueReported ?dateLastValueReported ;
                        ns2:source ?source ;
                        ngsi-ld:description ?description ;
                        ngsi-ld:location ?location ;
                        ngsi-ld:name ?name ;
                }
            }
        `;
    
    console.log(sparqlUpdate)
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/sparql-update',
    },
    body: sparqlUpdate,
    };

    fetch(endpointURL, requestOptions)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
    
    res.status(204).send();
    return;
}

module.exports.updateDeviceMeasurement = async (req, res, next) => {

    data = req?.body["data"][0];
 
    const sparqlUpdate = `
        PREFIX : <https://uri.etsi.org/ngsi-ld/default-context/>
        PREFIX ngsi-ld: <https://uri.etsi.org/ngsi-ld/>
        PREFIX ns1: <https://smartdatamodels.org/>
        PREFIX ns2: <https://smartdatamodels.org/dataModel.DeviceMeasurement/>
        PREFIX ns4: <https://smartdatamodels.org/dataModel.Device/>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        PREFIX schema: <https://schema.org/> 

        DELETE {
            ?entity ns1:controlledProperty ?controlledProperty ;
                    ns2:deviceType ?deviceType ;
                    ns2:refDevice ?refDevice ;
                    ns1:depth ?depth ;
                    ns1:source ?source ;
                    ngsi-ld:name ?name .
        }
        INSERT {
            ?entity a <https://smartdatamodels.org/dataModel.DeviceMeasurement/DeviceMeasurement> ;
                ns1:controlledProperty [ a ngsi-ld:Property ;
                    ngsi-ld:hasValue "${data.controlledProperty.value}" ] ;
                ns2:deviceType [ a ngsi-ld:Property ;
                    ngsi-ld:hasValue "${data.deviceType.value}" ] ;
                ns2:refDevice [ a ngsi-ld:Relationship ;
                    ngsi-ld:hasObject <${data.refDevice.object}> ] ;
                ns1:depth [ a ngsi-ld:Property ;
                    ngsi-ld:hasValue "${data.depth.value}"^^xsd:double ] ;
                ns1:source [ a ngsi-ld:Property ;
                    ngsi-ld:hasValue "${data.source.value}" ] ;
                ngsi-ld:name [ a ngsi-ld:Property ;
                    ngsi-ld:hasValue "${data.name.value}" ] .
        }
        WHERE {
            ?entity a <https://smartdatamodels.org/dataModel.DeviceMeasurement/DeviceMeasurement> ;
                    ns1:identifier [ ngsi-ld:hasValue "${data.id}" ] ;
                    ns1:controlledProperty ?controlledProperty ;
                    ns2:deviceType ?deviceType ;
                    ns2:refDevice ?refDevice ;
                    ns1:depth ?depth ;
                    ns1:source ?source ;
                    ngsi-ld:name ?name .
        }
    `;
    
    console.log(sparqlUpdate)
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/sparql-update',
    },
    body: sparqlUpdate,
    };

    fetch(endpointURL, requestOptions)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
    
    res.status(204).send();
    return;
}

module.exports.updateDeviceMeasurementFiltered = async (req, res, next) => {

    data = req?.body["data"][0];
 
    const sparqlUpdate = `
        PREFIX : <https://uri.etsi.org/ngsi-ld/default-context/>
        PREFIX ngsi-ld: <https://uri.etsi.org/ngsi-ld/>
        PREFIX ns1: <https://smartdatamodels.org/>
        PREFIX ns2: <https://smartdatamodels.org/dataModel.DeviceMeasurement/>
        PREFIX ns4: <https://smartdatamodels.org/dataModel.Device/>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        PREFIX schema: <https://schema.org/> 

        DELETE {
            ?entity ns2:numValue ?numValue ;
                    ns1:dateLastValueReported ?dateLastValueReported .
        }
        INSERT {
            ?entity a <https://smartdatamodels.org/dataModel.DeviceMeasurement/DeviceMeasurement> ;
                ns2:numValue [ a ngsi-ld:Property ;
                    ngsi-ld:hasValue "${data.numValue.value}"^^xsd:double ;
                    ngsi-ld:observedAt "${data.numValue.observedAt}"^^ngsi-ld:DateTime ] ;
                ns1:dateLastValueReported [ a ngsi-ld:Property ;
                    ngsi-ld:hasValue "${data.dateLastValueReported.value}" ] .
        }
        WHERE {
            ?entity a <https://smartdatamodels.org/dataModel.DeviceMeasurement/DeviceMeasurement> ;
                    ns1:identifier [ ngsi-ld:hasValue "${data.id}" ] ;
            OPTIONAL {
                ?entity ns2:numValue ?numValue ;
                        ns1:dateLastValueReported ?dateLastValueReported ;
            }
        }
    `;
    
    console.log(sparqlUpdate)
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/sparql-update',
    },
    body: sparqlUpdate,
    };

    fetch(endpointURL, requestOptions)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
    
    res.status(204).send();
    return;
}

