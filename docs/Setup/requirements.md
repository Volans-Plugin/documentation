---
id: requirements
title: Anforderungen
---


## Minecraft Server

### Minimal Anfodrderungen
- 2GB Arbeitspeicher
- 4 (Virtuelle-)Kerne
- 1.19 Server
- Java 17

### Empfohlen
- 4-8GB Arbeitspeicher
- 8 (Virtuelle-)Kerne
- 1.19.3 Server
- **FastAsyncWorldEdit**
- **ProtocolLib**

:::caution
Volans kann auch ohne FAWE und ProtocolLib arbeiten. Dadurch werden folgende Funktionen deaktiviert:
- PaintIt
- BrushIt
- Brush History
- Schematic Upload
- Clipboard Sync
- Toggle Sign Editor
:::

## Datenbanken

### Persistenten Daten
Volans unterstützt folgende Datenbank typen
- MySQL
- MariaDB
- SQLite
- H2
- OracleDB
- PostgreSQL
- MSSQL
- OracleDB

### Temoräre Daten
Zum Syncornsieren vom Clipboard wird folgende Datenbank benötigt
- Redis/KeyDB

## Speicher
### Persistenten Daten
Zum Speichern von Schematic datein in der "Cloud" wird folgende Technologie benötigt
- S3
