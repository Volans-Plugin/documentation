---
sidebar_position: 1
id: clipboardsync
title: Clipboard Sync
---
### Description
* For this feature a **Redis is necessary**, see configuration.
* The Clipboard Sync is needed to copy and paste builds from one server to a different server (on same network) without saving them as a schematic file.
* You can set the duration the clipboard is stored on Redis (without overriding data) until it will be deleted. To do that, you can edit the default value on the config.
### Configuration
Add in the list `features` in the section `volans` the string `"ClipboardSync"`.
### Permissions
See [here](/docs/Permissions/#clipboard-sync)
### Utilisation
1. Select your build with `//pos1` and `//pos2` or with the worldedit axe.
2. Copy your build with `//copy` (and optional parameters -e or -b).
3. Upload your clipboard with `/gcopy` to Redis, it is important that your destination server for pasting has Volans and this feature enabled and also make sure everything is operational/configured.
4. You can change server after receiving a feedback message on your chat.
5. Take sure that the destination server you are at, has a clear clipboard (`/clearclipboard`) because without a clean clipboard, it is possible to have issues.
6. Load with `/gpaste` your clipboard from Redis.
7. You now can paste your build as usual with `//paste` (and optional parameter like -e, -a or -b).
### Pictures
- None at the moment
### Videos
- None at the moment