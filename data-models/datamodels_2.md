# TemperatureSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing temperature`.

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
-  `id`: Unique identifier of the entity
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
-  `temperature`: Property related to some measurements that are characterized by a certain value that is measured in a temperature unit (degree_Celsius, degree_Fahrenheit, or degree_kelvin)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# ConductivitySensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing conductivity`.

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
-  `id`: Unique identifier of the entity
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
-  `conductivity`: An individual representing the property conductitivity
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# ChlorophyllSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing chlorophyll`.

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
-  `id`: Unique identifier of the entity
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
-  `chlorophyll`: An individual representing the property conductitivity
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# HumiditySensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing humidity`.

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
-  `id`: Unique identifier of the entity
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
-  `humidity`: An individual representing the relative humidity in a given location
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# OrganicMatterSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing organicMatter`.

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
-  `id`: Unique identifier of the entity
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
-  `organicMatter`: Property related to some measurements that are characterized by a certain value that is measured in a humidity unit
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# OxygenSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing oxygen`.

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
-  `id`: Unique identifier of the entity
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
-  `oxygen`: An individual representing the property oxygen in given location
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# PhSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing pH`.

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
-  `id`: Unique identifier of the entity
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
-  `pH`: An individual representing the property pH
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# PiezometricLevelSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing piezometricLevel`.

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
-  `id`: Unique identifier of the entity
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
-  `piezometricLevel`: It defines the level to which water would rise if it were allowed to flow freely, measured in meters above the sea level (msnm)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# PolyethyleneSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing polyethylene`.

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
-  `id`: Unique identifier of the entity
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
-  `polyethylene`: The amount of polyethylene present in the water
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# PrecipitationSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing precipitation`.

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
-  `id`: Unique identifier of the entity
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
-  `precipitation`: The amount of water falling in the soil by natural process (e.g. rain).
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# PressureSensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of sensing pressure`.

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
-  `id`: Unique identifier of the entity
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
-  `pressure`: Property related to some measurements that are characterized by a certain value that is measured in a pressure unit (bar or pascal)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# SalinitySensor

A device that consists of a sensor, has category `Sensor` and is used for the purpose of salinity`.

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
-  `id`: Unique identifier of the entity
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
-  `salinity`: An individual representing the property salinity
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# TdsSensor

A device that consists of a sensor, has category `Sensor` and is used to measure the total amount of mobile charged ions, including minerals, salts or metals dissolved in a given volume of water, expressed in units of mg per unit volume of water (mg/L), also referred to as parts per million (ppm).

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
-  `id`: Unique identifier of the entity
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
-  `tds`: An individual representing the property total disolved solids
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# TransparencySensor

A device that consists of a sensor, has category `Sensor` and is used to measure the transparency of the water.

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
-  `id`: Unique identifier of the entity
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
-  `transparency`: Property related to some measurements that are characterized by a certain value that is measured in a transparency unit (Revisar)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# TurbiditySensor

A device that consists of a sensor, has category `Sensor` and is used to measure the turbidity of the water.

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
-  `id`: Unique identifier of the entity
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
-  `turbidity`: An individual representing the property turbidity
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# VolumeSensor

A device that consists of a sensor, has category `Sensor` and is used to measure the volume of the water.

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
-  `id`: Unique identifier of the entity
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
-  `volume`: Property related to some measurements that are characterized by a certain value that is measured in a volume unit (liter or cubic_meter)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# WaterFlowSensor

A device that consists of a sensor, has category `Sensor` and measures the flow of water.

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
-  `id`: Unique identifier of the entity
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
-  `waterFlow`: Property related to some measurements that are characterized by a certain value that is measured in a waterFlow unit (liter_per_second, liter_per_minute, or liter_per_hour)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# WaterLevelSensor

A device that consists of a sensor, has category Sensor and is used to measure the level of the water.

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
-  `id`: Unique identifier of the entity
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
-  `waterLevel`: It defines the level in meters of the measured property
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Required
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)



# Boya


-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `dateLastValueReported`: A timestamp which denotes the last time when the device successfully reported data to the cloud
   -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
   -  Optional
-  `description`: A description of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `id`: Unique identifier of the entity
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
-  `closeMeasurements`: A list of the devices that take measures close to this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `temperatureValues`: A list of the temperature values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `chlorophyllValues`: A list of the chlorophyll values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `conductivityValues`: A list of the conductivity values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `organicMatterValues`: A list of the organic matter values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `oxygenValues`: A list of the oxygen values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `pHValues`: A list of the pH values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `polyethyleneValues`: A list of the polyethylene values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `salinityValues`: A list of the salinity values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `transparencyValues`: A list of the transparency values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional
-  `turbidityValues`: A list of the turbidity values measured by this Boya
   -  Attribute type: **Property**. 
   -  Optional



# Rambla


-  `address`: The mailing address
   -  Attribute type: **Property**. [address](https://schema.org/address)
   -  Optional
-  `dateLastValueReported`: A timestamp which denotes the last time when the device successfully reported data to the cloud
   -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
   -  Optional
-  `description`: A description of this item
   -  Attribute type: **Property**. 
   -  Optional
-  `id`: Unique identifier of the entity
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
-  `type`: NGSI Entity type. It has to be Rambla. One of : `Rambla`.
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
-  `waterFlow`: Property related to some measurements that are characterized by a certain value that is measured in a waterFlow unit (liter_per_second, liter_per_minute, or liter_per_hour)
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
-  `waterLevel`: It defines the level in meters of the measured property
   -  Attribute type: **Property**. [Number](https://schema.org/Number)
   -  Optional
   -  Meta Data: 
       -  `providedBy`: The device that sent this reading
           -  Attribute type: **Relationship**. [URL](https://schema.org/URL)
       -  `observedAt`: A timestamp which denotes when the reading was taken
           -  Attribute type: **Property**. [DateTime](https://schema.org/DateTime)
       -  `unitCode`: A string representing the measurement unit corresponding to the Property value. It shall be encoded using the UN/CEFACT Common Codes for Units of Measurement
           -  Attribute type: **Property**. [Text](https://schema.org/Text)
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
-  `id`: Unique identifier of the entity
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



## Examples

### OK


