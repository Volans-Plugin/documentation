---
sidebar_position: 1
id: requirements
title: Requirements
---


## Minecraft Server

### Minimal requirements
- 2 GB RAM
- 4 (virtual-) CPU cores
- 1.18.2 [Paper Server](https://papermc.io/)
- Java 17

### Recommended
- 4-8 GB RAM
- 8 (virtual-) CPU cores
- 1.19.4 [Paper Server](https://papermc.io/)
- **FastAsyncWorldEdit**
- **ProtocolLib**

:::caution
Volans does work without FAWE (FastAsyncWorldEdit) and ProtocolLib. Without the plugins, the following features are deactivated:
- PaintIt
- BrushIt
- Brush History
- Schematic Upload
- Clipboard Sync
- Toggle Sign Editor
:::


### Temporary files
To administrate and to use the Clipboard Sync, following database is needed:
- Redis/KeyDB

## Storage
### Persistent data
To save schematic files in the "cloud", following technology is needed:
- S3
