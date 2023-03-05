---
sidebar_position: 1
id: requirements
title: Anforderungen
---


## Minecraft Server

### Minimale Anforderungen
- 2 GB Arbeitsspeicher
- 4 (Virtuelle-)Kerne
- 1.19 [Paper Server](https://papermc.io/)
- Java 17

### Empfohlen
- 4-8 GB Arbeitsspeicher
- 8 (Virtuelle-)Kerne
- 1.19.3 [Paper Server](https://papermc.io/)
- **FastAsyncWorldEdit**
- **ProtocolLib**

:::caution
Volans kann auch ohne FAWE (FastAsyncWorldEdit) und ProtocolLib arbeiten. Dadurch werden folgende Funktionen deaktiviert:
- PaintIt
- BrushIt
- Brush History
- Schematic Upload
- Clipboard Sync
- Toggle Sign Editor
:::


### Temporäre Daten
Zum Verwalten des Clipboard Sync wird folgende Datenbank benötigt
- Redis/KeyDB

## Speicher
### Persistente Daten
Zum Speichern von Schematic Dateien in der "Cloud" wird folgende Technologie benötigt
- S3
