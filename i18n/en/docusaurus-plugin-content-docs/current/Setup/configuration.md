---
sidebar_position: 3
id: configuration
title: Configuration
---
:::info

The server needs to be restarted completely after each configuration change. Reloading is not supported and can create issues!

:::

## Configuration

If you have started the server for the first time with Volans, there should be a `config.conf` in the path `<DEIN_SERVER>/plugins/Volans`
In this file you have several configuration options for Volans.

Details are found in `config.conf` as well.

### Volans Section

In the Volans section you can set which features should be active (available on your server) and which language Volans should use as default.

| Field  | Possible values         | Description                                                 |
|--------|-------------------------|-------------------------------------------------------------|
| locale | en_US,en-US,de-DE,de_DE | Allows you to set the language for commands and inventories |

#### Features List

On default all features are available excluding `ClipboardSync` and `SchemaUpload`.  
Features can be deactivated with a `#` like in a YML file. For reactivation, delete the `#` on front of the feature.

### S3 Section

This feature was tested with a [Minio Server](https://min.io/)
`AccessKey`,`Secretkey`,`Region`,`EndPoint` are available from your provider/hoster.
The `pathStyleAccess` is only needed when using a Minio Server.

* [S3 Minio Configuration](s3-minio)

### Schema Upload Section

In this section it is possible to set the path in which directory/bucket the schematic files from FAWE are saved.
In addition, the time validity og the link can be configured.

The field `expirationTime` has the default value `P6D` and can be changed with the help of following [documentation](https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html#parse-java.lang.CharSequence-)

Example:

| Expression | Value from documentation |
|------------|--------------------------|
| P7D        | 7 days valid             |
| PT24H      | 24 hours valid           |

### Redis Section

In this section you only have one field which can be configured.
This field only accepts seconds as value.

The value for the SyncTimeout determines, how long the clipboard stays in Redis even after **going offline in game**.

### BrushIt Section

These values are only used, when you use BrushIt for the first time (after a server restart or first join).

| Field        | Description                                                                                                            |
|--------------|------------------------------------------------------------------------------------------------------------------------|
| brushItem    | Default item to use BrushIt                                                                                            | 
| size         | Influences default size of brushes                                                                                     |
| intensity    | Influences the default strength of brushes                                                                             | 
| additionMode | States whether blocks with the brush should be added or removed on default.                                            | 
| 3dMode       | States whether the brush should be enabled as 3D mode or disabled on default.                                          | 
| flatMode     | States whether the brush should be enabled as flat mode or disabled on default.                                        |
| autorotation | States whether the brush should rotate (northing) or not on default.                                                   |
| brushenabled | States whether the brush should be enabled or disabled on default when a player holds and wants to use the brush item. |
| brushname    | Says which is the default brush.                                                                                       | 
| maxSize      | Defines the maximal size, but can be overridden with the matching permission.                                          |
| maxIntensity | defines the maximal strength of the brush, but can be overridden the matching permission.                              |

### PaintIt Section

These default values are used like on BrushIt:

| Field       | Description                                                             |
|-------------|-------------------------------------------------------------------------|
| brushItem   | Default item to use on PaintIt                                          |
| maxSize     | Influences default size of brushes, can be overridden with permission   | 
| defaultSize | Influences the default size of the brushes                              | 
| maxHistory  | Not in use - for maxHistory FAWE settings need to be configured instead | 

