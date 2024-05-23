# Mar Menor

En este repositorio encontramos un conjunto de componentes para consultar los datos de distintos sensores que encontramos en el Mar Menor y en su entorno.

## Explicación del contenido del repositorio

### marMenorDockerCompose

En esta carpeta encontramos todo lo necesario para arrancar los distintos servicios en Docker.

Simplemente tendremos que ejecutar dentro de esta carpeta *./services orion* y se desplegaran en Docker todos los servicios:

- **Mongo-DB** para el almacenamiento de los datos del Orion Context Broker.
- **Timescale-DB** para almacenar los datos históricos de nuestro Orion Context Broker.
- **Mintaka**, componente de FIWARE que se encarga de almacenar los datos históricos en la base de datos Timescale-DB.
- **Orion** Context Broker para el almacenamiento de la información del contexto actual en formato NGSI-LD.
- **Grafana** para poder ver los datos de nuestro Orion Context Broker y los datos históricos.
- **Fuseki** para almacenar los datos de nuestro Orion Context Broker en formato RDF, creando un gráfico de conocimiento.
- **Node-App** para actualizar los datos de Fuseki en caso de producirse cambios en las entidades de Orion Context Broker.


### Orion

En esta carpeta encontramos el modelado en NGSI-LD de los datos sobre Boyas(Buoy), Ramblas(Ravine) y Puntos de sondeo piezométrico(SoundingPlace), Red piezométrica(PiezometricNet), luego se han empleado otros modelos ya existentes como Device, Device Measurement y WaterNetwork sacados de la iniciativa Smart Data Models. Luego, la definición general del entorno la encontramos en el fichero *marMenor.yaml*. 

Luego, encontramos los ficheros que referenciaremos a la hora de trabajar con nuestro Orion Context Broker, que lo encontramos en la carpeta interna *data_models_description*, generados a partir de nuestro fichero *marMenor.yaml*.

Finalmente, dentro de esta carpeta encontramos los scripts para la subida de la información de las Boyas, Ramblas y Puntos de sondeo piezométrico en la carpeta *scripts_orion*. Dentro de este econtramos los siguientes ficheros:

- **script_start_up**: Fichero en el que encontramos el código necesario para subir los datos actuales a nuestro Context Broker y al mismo tiempo almacenar los datos históricos en nuestra base de datos TimeScaleDB para posteriormente poder hacer consultas. Para emplearlo deberemos de cambiar las rutas de lectura de los ficheros a la de los archivos locales de su ordenador.
- **script_datos_semanales**: Fichero que hace lo mismo que **script_start_up**, sin embargo, esta diseñado para subir los datos semanales nuevos que se han registrado, supone la existencia de las distintas entidades en nuestro Orion COntext Broker, por lo que la idea es que la primera vez se ejecutará el fichero **script_start_up** y luego, a partir de ahí las proximas modificaciones se realizarán con este fichero.
-**tutorial_entorno_orion**: Fichero en el que encontramos una breve descripción del entorno, NGSI-LD, el modelado planteado. Luego, muestra diferentes ejemplos de distintos tipos de consultas que podemos realizar sobre nuestro Orion Context Broker y sobre Mintaka.

### GRAFANA 

En esta carpeta encontramos la información de Grafana, una plataforma para la monitorización y realización de analíticas Open Source, la cual se ha empleado para realizar consultas sobre nuestros datos del Orion Context Broker y Mintaka.

Se ha empleado un Plugin para poder beber de una fuente NGSI-LD en esta plataforma, **[ngsild-grafana-datasource](https://github.com/bfi-de/ngsild-grafana-datasource)**. Sin embargo, este plugin estaba desactualizado y se ha tenido que realizar varias modificaciones para poder emplearlo.

El código del plugin con las modificaciones lo encontramos con la carpeta **ngsild**, en el Docker creado con Grafana ya esta incluido.

Luego, encontramos dos archivos *.json* en los que se definen dos Dashboards realizados, para poder emplearlos se ha creado en esta carpeta un README que explica como hacerlo.

### Fuseki

En esta carpeta solo encontramos un archivo, **fuseki_final**, en este archivo se encuentra el código para obtener las entidades de nuestro Orion, subirlas a Fuseki, asi como varias consultas una vez subidos los datos en esta base de datos usando SparQL.

Entre las consultas encontramos la recuperación de datos, busqueda por coincidencia de parametros, consulta de las propiedades de una entidad etcétera.

Luego, se ha empleado este Knowledge Graph para enriquecer los datos de nuestro Context Broker para unir las entidades como Boya, Piezometro o Punto piezométrico con sus Mediciones de forma directa, sin tener que realizar una consulta extra para ver las Mediciones asociadas a los dispositivos. Este ejemplo esta explicado en el archivo.

Además dentro de este archivo es donde se crean las subscripciones en el Orion Context Broker para que se actualicen los valores de Fuseki.





