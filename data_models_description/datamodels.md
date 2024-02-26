# Device


-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `batteryLevel`: Device battery level. It must be equal to 1.0 when battery is full. 0.0 when battery is empty. -1 when transiently cannot be determined
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `configuration`: Device's technical configuration. This attribute is intended to be a array properties and their values which capture parameters which have to do with the configuration of a device (timeouts, reporting periods, etc.) and which are not currently covered by the standard attributes defined by this model
   -  Attribute type: **Property**. [StructuredValue](https://schema.org/StructuredValue)
   -  Optional
-  `controlledAsset`: List of the asset(s) (building, object, etc.) controlled by the device
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'airPollution, atmosphericPressure, averageVelocity, batteryLife, batterySupply, cdom, conductance, conductivity, depth, eatingActivity, electricityConsumption, energy, fillingLevel, freeChlorine, gasConsumption, gateOpening, heading, humidity, light, location, milking, motion, movementActivity, noiseLevel, occupancy, orp, pH, power, precipitation, pressure, refractiveIndex, salinity, smoke, soilMoisture, solarRadiation, speed, tds, temperature, trafficFlow, tss, turbidity, waterConsumption, waterFlow, waterLevel, waterPollution, weatherConditions, weight, windDirection, windSpeed'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
   -  Optional
-  `dateCreated`: Entity creation timestamp. This will usually be allocated by the storage platform
   -  Attribute type: **Property**. 
   -  Optional
-  `dateFirstUsed`: A timestamp which denotes when the device was first used
   -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
   -  Optional
-  `dateInstalled`: A timestamp which denotes when the device was installed (if it requires installation)
   -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
   -  Optional
-  `dateLastCalibration`: A timestamp which denotes when the last calibration of the device happened
   -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
   -  Optional
-  `dateLastValueReported`: A timestamp which denotes the last time when the device successfully reported data to the cloud
   -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
   -  Optional
-  `dateManufactured`: A timestamp which denotes when the device was manufactured
   -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
   -  Optional
-  `dateModified`: Timestamp of the last modification of the entity. This will usually be allocated by the storage platform
   -  Attribute type: **Property**. 
   -  Optional
-  `dateObserved`: Date of the observed entity defined by the user
   -  Attribute type: **Property**. 
   -  Optional
-  `depth`: Location of this device represented by a depth from a starting point. All units are accepted in [CEFACT](https://www.unece.org/cefact.html) code
   -  Attribute type: **Property**. [depth](https://schema.org/depth)
   -  Optional
-  `description`: A description of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `deviceCategory`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `deviceState`: State of this device from an operational point of view. Its value can be vendor dependent
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `direction`: Enum:'Inlet, Outlet, Entry, Exit'. A timestamp which denotes when the device was installed (if it requires installation). One of : `Inlet`, `Outlet`, `Entry`, `Exit`.
   -  Attribute type: **Property**. [DateTime]( https://schema.org/DateTime)
   -  Optional
-  `distance`: Location of this device represented by a distance from a starting point. All units are accepted in [CEFACT](https://www.unece.org/cefact.html) code
   -  Attribute type: **Property**. [Distance](https://schema.org/Distance)
   -  Optional
-  `dstAware`: Indicates a device which is Daylight Savings Time Aware (True). In case it is then the Timestamp is automatically adjusted by the device to reflect DST changes. If not (False) the time adjustments must be taken care of by the user
   -  Attribute type: **Property**. 
   -  Optional
-  `firmwareVersion`: The firmware version of this device
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `hardwareVersion`: The hardware version of this device
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `id`: Unique identifier of the entity
   -  Attribute type: **Property**. 
   -  Required
-  `ipAddress`: List of IP address of the device. It can be a comma separated list of values if the device has more than one IP address
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `location`: Geojson reference to the item. It can be Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon
   -  Attribute type: **GeoProperty**. 
   -  Optional
-  `macAddress`: The MAC address of the device
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `mcc`: This property identifies the Mobile Country Code
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `mnc`: This property identifies the Mobile Network Code (MNC) of the network the device is attached to. The MNC is used in combination with a Mobile Country Code (MCC) (also known as a 'MCC / MNC tuple') to uniquely identify a mobile phone operator/carrier using the GSM, CDMA, iDEN, TETRA and 3G / 4G public land mobile networks and some satellite mobile networks
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `name`: The name of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `osVersion`: The version of the host operating system device
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `owner`: A List containing a JSON encoded sequence of characters referencing the unique Ids of the owner(s)
   -  Attribute type: **Property**. 
   -  Optional
-  `provider`: The provider of the device
   -  Attribute type: **Property**. [provider](https://schema.org/provider)
   -  Optional
-  `refDeviceModel`: Model of the device
   -  Attribute type: **Relationship**. 
   -  Optional
-  `relativePosition`: Location of this device in a coordinate system according to its local emplacement
   -  Attribute type: **Property**. 
   -  Optional
-  `rssi`: Received signal strength indicator for a wireless enabled device. It must be expressed in dBm or mW, use unitcode to set it out.
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
-  `seeAlso`: list of uri pointing to additional resources about the item
   -  Attribute type: **Property**. 
   -  Optional
-  `serialNumber`: The serial number assigned by the manufacturer
   -  Attribute type: **Property**. [serialNumber](https://schema.org/serialNumber)
   -  Optional
-  `softwareVersion`: The software version of this device
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `source`: A sequence of characters giving the original source of the entity data as a URL. Recommended to be the fully qualified domain name of the source provider, or the URL to the source object
   -  Attribute type: **Property**. 
   -  Optional
-  `supportedProtocol`: Supported protocol(s) or networks
   -  Attribute type: **Property**. [3g, bluetooth, bluetooth LE, cat-m, coap, ec-gsm-iot, gprs, http, lwm2m, lora, lte-m, mqtt, nb-iot, onem2m, sigfox, ul20, websocket](3g, bluetooth, bluetooth LE, cat-m, coap, ec-gsm-iot, gprs, http, lwm2m, lora, lte-m, mqtt, nb-iot, onem2m, sigfox, ul20, websocket)
   -  Optional
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required
-  `value`: A observed or reported value. For actuator devices, it is an attribute that allows a controlling application to change the actuation setting. For instance, a switch device which is currently _on_ can report a value 'on' of type 'Text'. Obviously, in order to toggle the referred switch, this attribute value will have to be changed to 'off'
   -  Attribute type: **Property**. [QuantitativeValue](https://schema.org/QuantitativeValue)
   -  Optional
-  `controlledProperty`: Anything that can be sensed, measured or controlled by.
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional



# DeviceMeasurement


-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `controlledProperty`: Property being measured by the device
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
   -  Optional
-  `dateCreated`: Entity creation timestamp. This will usually be allocated by the storage platform
   -  Attribute type: **Property**. 
   -  Optional
-  `dateModified`: Timestamp of the last modification of the entity. This will usually be allocated by the storage platform
   -  Attribute type: **Property**. 
   -  Optional
-  `dateObserved`: The date and time of this observation in ISO8601 UTC format
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `description`: A description of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `deviceType`: Type of device taking the measurement
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `id`: Unique identifier of the entity
   -  Attribute type: **Property**. 
   -  Required
-  `location`: Geojson reference to the item. It can be Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon
   -  Attribute type: **GeoProperty**. 
   -  Optional
-  `measurementType`: The type of measurement to be taken
   -  Attribute type: **Property**. 
   -  Optional
-  `name`: The name of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `numValue`: Numerical value of the measurement
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
-  `outlier`: Value for marking the measurement to be specially processed
   -  Attribute type: **Property**. [Boolean](https://schema.org/Boolean)
   -  Optional
-  `owner`: A List containing a JSON encoded sequence of characters referencing the unique Ids of the owner(s)
   -  Attribute type: **Property**. 
   -  Optional
-  `refDevice`: Device taking the measurement
   -  Attribute type: **Relationship**. 
   -  Optional
-  `seeAlso`: list of uri pointing to additional resources about the item
   -  Attribute type: **Property**. 
   -  Optional
-  `source`: A sequence of characters giving the original source of the entity data as a URL. Recommended to be the fully qualified domain name of the source provider, or the URL to the source object
   -  Attribute type: **Property**. 
   -  Optional
-  `textValue`: Textual value of the measurement
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `type`: NGSI Entity type. It has to be Measurement. One of : `DeviceMeasurement`.
   -  Attribute type: **Property**. 
   -  Required
-  `unit`: Units of the measurement. In case of use of an acronym use units accepted in [CEFACT](https://www.unece.org/cefact.html) code
   -  Attribute type: **Property**. 
   -  Optional



# WaterNetwork


-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
   -  Optional
-  `dateCreated`: Entity creation timestamp. This will usually be allocated by the storage platform
   -  Attribute type: **Property**. 
   -  Optional
-  `dateModified`: Timestamp of the last modification of the entity. This will usually be allocated by the storage platform
   -  Attribute type: **Property**. 
   -  Optional
-  `description`: A description of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `hasSubNetwork`: Reference to an entity of type `Network`
   -  Attribute type: **Relationship**. [Text](https://schema.org/Text)
   -  Optional
-  `id`: Unique identifier of the entity
   -  Attribute type: **Property**. 
   -  Required
-  `isComposedOf`: Reference to the water component entities of the network, of type `Node (Reservoir, Junction, Tank)` or `Link (Pipe, Valve, Pump)`
   -  Attribute type: **Relationship**. 
   -  Optional
-  `location`: Geojson reference to the item. It can be Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon
   -  Attribute type: **GeoProperty**. 
   -  Optional
-  `name`: The name of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `owner`: A List containing a JSON encoded sequence of characters referencing the unique Ids of the owner(s)
   -  Attribute type: **Property**. 
   -  Optional
-  `seeAlso`: list of uri pointing to additional resources about the item
   -  Attribute type: **Property**. 
   -  Optional
-  `source`: A sequence of characters giving the original source of the entity data as a URL. Recommended to be the fully qualified domain name of the source provider, or the URL to the source object
   -  Attribute type: **Property**. 
   -  Optional
-  `type`: NGSI-LD Entity Type. It has to be WaterNetwork. Enum:'WaterNetwork'. One of : `WaterNetwork`.
   -  Attribute type: **Property**. 
   -  Required



# PiezometricNet


-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `description`: A description of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `identifier`: Unique identifier of the entity
   -  Attribute type: **Property**. 
   -  Required
-  `location`: Geojson reference to the item. It can be Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon
   -  Attribute type: **GeoProperty**. 
   -  Optional
-  `name`: The name of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `source`: A sequence of characters giving the original source of the entity data as a URL. Recommended to be the fully qualified domain name of the source provider, or the URL to the source object
   -  Attribute type: **Property**. 
   -  Optional
-  `type`: NGSI Entity type. It has to be PiezometricNet. One of : `PiezometricNet`.
   -  Attribute type: **Property**. 
   -  Required
-  `controlledProperty`: The controlled property of the piezometric net
   -  Attribute type: **Property**. 
   -  Optional



# Buoy


-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `dateLastValueReported`: A timestamp which denotes the last time when the device successfully reported data to the cloud
   -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
   -  Optional
-  `description`: A description of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `identifier`: Unique identifier of the entity
   -  Attribute type: **Property**. 
   -  Required
-  `location`: Geojson reference to the item. It can be Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon
   -  Attribute type: **GeoProperty**. 
   -  Optional
-  `name`: The name of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `source`: A sequence of characters giving the original source of the entity data as a URL. Recommended to be the fully qualified domain name of the source provider, or the URL to the source object
   -  Attribute type: **Property**. 
   -  Optional
-  `type`: NGSI Entity type. It has to be Buoy. One of : `Buoy`.
   -  Attribute type: **Property**. 
   -  Required
-  `closeMeasurements`: A list of the devices that take measures close to this Buoy
   -  Attribute type: **Property**. 
   -  Optional



# Ravine


-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `dateLastValueReported`: A timestamp which denotes the last time when the device successfully reported data to the cloud
   -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
   -  Optional
-  `description`: A description of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `identifier`: Unique identifier of the entity
   -  Attribute type: **Property**. 
   -  Required
-  `location`: Geojson reference to the item. It can be Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon
   -  Attribute type: **GeoProperty**. 
   -  Optional
-  `name`: The name of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `source`: A sequence of characters giving the original source of the entity data as a URL. Recommended to be the fully qualified domain name of the source provider, or the URL to the source object
   -  Attribute type: **Property**. 
   -  Optional
-  `section`: Number indicating the order of the rambla in case it is part of a set of ramblas, if not it will be 0
   -  Attribute type: **Property**. 
   -  Optional
-  `nextSection`: Entity ID of the next section of the rambla, if it does not exist it will be empty
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `previousSection`: Entity ID of the previous section of the rambla, if it does not exist it will be empty
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `type`: NGSI Entity type. It has to be Ravine. One of : `Ravine`.
   -  Attribute type: **Property**. 
   -  Required
-  `closeMeasurements`: A list of the devices that take measures close to this Rambla
   -  Attribute type: **Property**. 
   -  Optional



# PiezometricPoint


-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `dateLastValueReported`: A timestamp which denotes the last time when the device successfully reported data to the cloud
   -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
   -  Optional
-  `description`: A description of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `identifier`: Unique identifier of the entity
   -  Attribute type: **Property**. 
   -  Required
-  `location`: Geojson reference to the item. It can be Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon
   -  Attribute type: **GeoProperty**. 
   -  Optional
-  `name`: The name of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `source`: A sequence of characters giving the original source of the entity data as a URL. Recommended to be the fully qualified domain name of the source provider, or the URL to the source object
   -  Attribute type: **Property**. 
   -  Optional
-  `numberInNetwork`: Number indicating the order of the piezometric point in case it is part of a set of piezometric points, if not it will be 0
   -  Attribute type: **Property**. 
   -  Optional
-  `type`: NGSI Entity type. It has to be Rambla. One of : `PiezometricPoint`.
   -  Attribute type: **Property**. 
   -  Required
-  `closeMeasurements`: A list of the devices that take measures close to this PiezometricPoint
   -  Attribute type: **Property**. 
   -  Optional



## Examples

### OK


