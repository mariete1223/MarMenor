Para poder visualizar los dashboard de Grafana simplemente debemos de meternos a la URL localhost:4000

Acceder a "Connections" -> "Data sources"

Creamos dos fuentes de datos:

1. Una fuente de datos NGSI-LD con los siguientes parametros:

Context broker URL: http://orion:1026
Temporaal broker URL: http://orion:8080
Context URL: https://raw.githubusercontent.com/mariete1223/MarMenor/main/data_models_description/datamodels.context-ngsi.jsonld

2. Una fuente de datos Postgresql

Host URL: timescale-db:5432
Database name: orion
Username: orion
TLS/SSL Mode: disable

Una vez creadas estas fuentes de datos ya podemos importar los dashboards.

Para importarlos accedemos a "Dashboards" -> "New" -> "import" e introducimos los json