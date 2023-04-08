---
sidebar_position: 3
id: configuration
title: Konfiguration
---
:::info

Der Server muss nach jeder Änderung der Konfiguration komplett neu gestartet werden. Der Reload wird nicht unterstützt
und kann Fehler verursachen!

:::

## Konfiguration

Sobald du deinen Server zum ersten Mal gestartet hast, sollte in dem Pfad `<DEIN_SERVER>/plugins/Volans`
eine `config.conf` erscheinen.
In dieser Datei gibt es viele Einstellungsmöglichkeiten für Volans.

Details stehen auch in `config.conf`

### Volans Sektion

In der Volans Sektion, kannst du bestimmen, welche Funktionen von Volans aktiv sind und welche Sprache Volans verwenden
soll.

| Feld   | Mögliche werte          | Beschreibung                                                      |
|--------|-------------------------|-------------------------------------------------------------------|
| locale | en_US,en-US,de-DE,de_DE | Erlaubt es dir die Sprache für Commands und Inventare umzustellen |

#### Features Liste

Standardmäßig sind alle Funktionen aktiv bis außer `ClipboardSync` und `SchemaUpload`.  
Features können mit einem `#` deaktiviert werden wie in einer YML Datei. Zum Reaktivieren einfach das `#`
wieder entfernen.

### S3 Sektion

Getestet wurde die Funktion mit einem [Minio Server](https://min.io/)
`AccessKey`,`Secretkey`,`Region`,`EndPoint` bekommt ihr von eurem jeweiligen Provider.
Der `pathStyleAccess` wird nur benötigt wenn man ein Minio Server verwendet.

* [S3 Minio Konfiguration](s3-minio)

### Schema Upload Sektion

In dieser Sektion ist es dir möglich einzustellen, in welchem Ordner/Bucket die Schematic Dateien von FAWE abgelegt
werden.
Dazu kann auch die zeitliche Gültigkeit des Links eingestellt werden.

Das Feld `expirationTime` hat als Standardwert `P6D` und kann nach
folgender [Dokumentation](https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html#parse-java.lang.CharSequence-)
verändert werden.

Beispiel:

| Ausdruck | Wert nach Dokumentation |
|----------|-------------------------|
| P7D      | 7 Tage Gültigkeit       |
| PT24H    | 24 Stunden Gültigkeit   |

### Redis Sektion

In dieser Sektion gibt es nur ein Feld, welches eingestellt werden kann.
Dieses Feld nimmt nur Sekunden als Wert an.

Der Wert für das SyncTimeout bestimmt, wie lange das Clipboard auch **nach dem Offline** gehen im Redis bleibt.

### BrushIt Sektion

Diese Standardwerte werden nur gesetzt, wenn man BrushIt zum ersten Mal (Serverneustarts und Server wiederbetreten
eingenommen) verwendet.

| Feld         | Beschreibung                                                                                          |
|--------------|-------------------------------------------------------------------------------------------------------|
| brushItem    | Standard Item, um die Brush zu bedienen                                                               | 
| size         | Beeinflusst die Standard Größe der Brush                                                              |
| intensity    | Beeinflusst die Standard Stärke der Brush                                                             | 
| additionMode | Sagt aus, ob Blöcke mit der Brush standardmäßig hinzugefügt werden oder Blöcke entfernt werden sollen | 
| 3dMode       | Sagt aus, ob die Brush als 3D Modus bei der ersten Verwendung aktiviert/deaktiviert wird              | 
| flatMode     | Sagt aus, ob die Brush standardmäßig für den Flächenmodus (2D) gesetzt werden soll                    |
| autorotation | Sagt aus, ob die Brush sich immer norden soll oder nicht                                              |
| brushenabled | Sagt aus ob die Brush direkt aktiviert/deaktiviert ist, sobald ein Spieler das Item in der Hand hat   |
| brushname    | Sagt aus, was die Standard Brush ist                                                                  | 
| maxSize      | Definiert die maximale Größe, kann aber mit einer Permission überschritten werden                     |
| maxIntensity | Definiert die maximal Stärke, kann aber mit einer Permission überschritten werden                     |

### PaintIt Sektion

Diese Standardwerte werden wie bei BrushIt verwendet

| Feld        | Beschreibung                                                                      |
|-------------|-----------------------------------------------------------------------------------|
| brushItem   | Standard Item, um die Brush zu bedienen                                           |
| maxSize     | Definiert die maximale Größe, kann aber mit einer Permission überschritten werden | 
| defaultSize | Beeinflusst die Standard Größe der Brush                                          | 
| maxHistory  | Nicht in gebrauch                                                                 | 

