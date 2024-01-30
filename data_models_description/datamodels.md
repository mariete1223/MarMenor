# TemperatureSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing temperature, it returns one or multiple value.

-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# ConductivitySensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing conductivity, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# ChlorophyllSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing chlorophyll, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# HumiditySensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing humidity, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# OrganicMatterSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing organicMatter, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# OxygenSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing oxygen, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# PhSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing pH, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# PiezometricLevelSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing piezometricLevel, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# PolyethyleneSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing polyethylene, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# PrecipitationSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing precipitation, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# PressureSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing pressure, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# SalinitySensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing salinity, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# AtmosphericPressureSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing atmospheric pressure, it returns one or multiple value.
-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# WindDirectionSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing wind direction, it returns one or multiple value.

-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# WindSpeedSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing wind speed, it returns one or multiple value.

-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# TdsSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing tds, it returns one or multiple value.

-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# TransparencySensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing transparency, it returns one or multiple value.

-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# TurbiditySensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing turbidity, it returns one or multiple value.

-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# VolumeSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing volume, it returns one or multiple value.

-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# WaterFlowSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing waterFlow, it returns one or multiple value.

-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



# WaterLevelSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing waterLevel, it returns one or multiple value.

-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `alternateName`: An alternative name for this item
   -  Attribute type: **Property**. 
   -  Optional
-  `areaServed`: The geographic area where a service or offered item is provided
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `category`: Sensor: A device that detects and responds to events or changes in the physical environment such as light, motion, or temperature changes. https://w3id.org/saref#Sensor. actuator : A device responsible for moving or controlling a mechanism or system. https://w3id.org/saref#Actuator. Meter : A device built to accurately detect and display a quantity in a form readable by a human being. Partially defined by SAREF. HVAC : Heating, Ventilation and Air Conditioning (HVAC) device that provides indoor environmental comfort. https://w3id.org/saref#HVAC. Network : A device used to connect other devices in a network, such as hub, switch or router in a LAN or Sensor network. (https://w3id.org/saref#Network. Multimedia : A device designed to display, store, record or play multimedia content such as audio, images, animation, video. Enum:'actuator, beacon, endgun, HVAC, implement, irrSection, irrSystem, meter, multimedia, network, sensor'. Raw category will be deprecated use deviceCategory instead to avoid conflict with other aqttributes named category
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Optional
-  `measureType`: SingleValue: The sensor provides a single output. MultiplValue: The sensor provides multiple outputs. Enum:''singleValue, multipleValue''
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledProperty`: Anything that can be sensed, measured or controlled by. Enum:'conductivity, chlorophyll, humidity, organicMatter, oxygen, pH, piezometricLevel, polyethylene, precipitation, pressure, salinity, tds, temperature, transparency, turbidity, volume, waterFlow, waterLevel'
   -  Attribute type: **Property**. [Text](https://schema.org/Text)
   -  Required
-  `controlledAsset`: The asset(s) (building, object, etc.) controlled by the device.
   -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
   -  Optional
-  `dataProvider`: A sequence of characters identifying the provider of the harmonised data entity
   -  Attribute type: **Property**. 
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
-  `type`: NGSI Entity type. It has to be Device. One of : `Device`.
   -  Attribute type: **Property**. 
   -  Required



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
-  `temperatureValues`: A list of the temperature values measured by this Buoy
   -  Attribute type: **Property**. 
   -  Optional
-  `chlorophyllValues`: A list of the chlorophyll values measured by this Buoy
   -  Attribute type: **Property**. 
   -  Optional
-  `conductivityValues`: A list of the conductivity values measured by this Buoy
   -  Attribute type: **Property**. 
   -  Optional
-  `organicMatterValues`: A list of the organic matter values measured by this Buoy
   -  Attribute type: **Property**. 
   -  Optional
-  `oxygenValues`: A list of the oxygen values measured by this Buoy
   -  Attribute type: **Property**. 
   -  Optional
-  `pHValues`: A list of the pH values measured by this Buoy
   -  Attribute type: **Property**. 
   -  Optional
-  `polyethyleneValues`: A list of the polyethylene values measured by this Buoy
   -  Attribute type: **Property**. 
   -  Optional
-  `salinityValues`: A list of the salinity values measured by this Buoy
   -  Attribute type: **Property**. 
   -  Optional
-  `transparencyValues`: A list of the transparency values measured by this Buoy
   -  Attribute type: **Property**. 
   -  Optional
-  `turbidityValues`: A list of the turbidity values measured by this Buoy
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
-  `temperature`: Property related to some measurements that are characterized by a certain value that is measured in a temperature unit (degree_Celsius, degree_Fahrenheit, or degree_kelvin)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `pressure`: Property related to some measurements that are characterized by a certain value that is measured in a pressure unit (bar or pascal)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `volume`: Property related to some measurements that are characterized by a certain value that is measured in a volume unit (liter or cubic_meter)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `precipitation`: The amount of water falling in the soil by natural process (e.g. rain).
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `windDirection`: It defines the direction of the weather vane
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `atmosphericPressure`: It defines the observed air (atmospheric or barometric) pressure
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `conductivity`: An individual representing the property conductitivity
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `windSpeed`: It defines the intensity of the wind
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `waterFlowValues`: A list of the water flow values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `waterLevelValues`: A list of the water level values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `humidity`: An individual representing the relative humidity in a given location
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



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
-  `temperature`: Property related to some measurements that are characterized by a certain value that is measured in a temperature unit (degree_Celsius, degree_Fahrenheit, or degree_kelvin)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `conductivity`: An individual representing the property conductitivity
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `piezometricLevel`: It defines the level to which water would rise if it were allowed to flow freely, measured in meters above the sea level (msnm)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `salinity`: An individual representing the property salinity
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `tds`: An individual representing the property total disolved solids
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
       -  `measurementPlace`: A string representing the specific location where the measurement was taken
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



## Examples

### OK


