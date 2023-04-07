---
sidebar_position: 15
id: clipboardsync
title: Clipboard Sync
---
### Beschreibung
* Für dieses Feature wird ein **Redis benötigt**, siehe Konfiguration.
* Um ohne eine Schematic kopierte Bauten von einem Server zum anderen Server einzufügen, wird das Clipboard Sync gebraucht. Dabei werden keine .schematic Dateien erstellt, sondern deine Zwischenablage in die Redis Datenbank geladen.
* Wie lange deine Zwischenablage in dem Redis (ohne dass du diese überschreibst) verweilen darf, bis sie wieder gelöscht wird, kannst du in der Config einstellen, wobei du den default Wert ändern kannst.
### Konfiguration
Trage in die Liste `features` in der Sektion `volans` den String `"ClipboardSync"` ein.
### Permissions
Siehe [hier](/docs/Permissions/#clipboard-sync)
### Benutzung
1. Markiere dein Gebautes mit `//pos1` und `//pos2` oder mit der Worldedit Axt.
2. Kopiere dein Gebautes mit `//copy` (und optionalen Parametern -e oder -b).
3. Lade mit `/gcopy` deine Zwischenablage hoch auf den Redis Server, wichtig dabei ist, dass dein Zielserver zum Einfügen auch Volans mit dem Feature aktiviert ist und alles richtig konfiguriert wurde.
4. Wenn du eine Feedback-Nachricht im Chat erhalten hast, kannst du den Server wechseln.
5. Stelle sicher, dass du auf dem Zielserver, auf dem du gewechselt bist, dein Clipboard mit /clearclipboard geleert hast, da dies Probleme machen kann.
6. Lade nun mit `/gpaste` deine Zwischenablage aus dem Redis.
7. Du kannst nun wie gewohnt dein Gebautes mit `//paste` (und optionalen Parametern wie -e, -a oder -b) einfügen.
### Bilder
- Aktuell keine
### Videos
- Aktuell keine