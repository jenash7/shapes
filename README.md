# 🚀 Schnellstart-Anleitung: Website & Git

## 📁 Projektstruktur

```
shapes/
├── index.html              # Startseite
├── drachen.html            # Drachen-Animation
├── parallelogramm.html     # Parallelogramm-Animation
├── rhombus.html            # Rhombus-Animation
├── shared.css              # Alle Styles
├── common-utils.js         # Globale JavaScript-Funktionen
└── quiz-data.js            # Quiz-Aufgaben
```

## 🌐 Website lokal starten

### Option 1: Python Webserver (empfohlen)
```bash
cd /pfad/zum/projekt/shapes
python3 -m http.server 8000
```
Dann im Browser öffnen: `http://localhost:8000`

### Option 2: Direkt im Browser
Einfach `index.html` im Browser öffnen (Doppelklick)

## 📝 Änderungen machen

### HTML bearbeiten
- Texte ändern: Einfach in den `.html` Dateien suchen und ersetzen
- Navigation: Im `<nav>` Bereich oben in jeder Datei

### Styles ändern
- **Alle** Styles sind in `shared.css`
- Farben, Abstände, Schriftgrößen hier anpassen

### JavaScript-Funktionen
- Quiz-Logik: `common-utils.js`
- Animation-Code: In jeweiliger `.html` Datei im `<script>` Tag

## 🎨 Farben ändern

In `common-utils.js` (Zeile 2-3):
```javascript
const lightBlue = "#ADD8FF";  // Helle Farbe für Formen
const darkBlue = "#0050FF";   // Dunkle Farbe für Dreiecke
```

## 🔧 Git-Grundlagen

### Status prüfen
```bash
git status                    # Was wurde geändert?
```

### Änderungen speichern
```bash
git add .                     # Alle Änderungen vormerken
git commit -m "Beschreibung"  # Änderungen mit Nachricht speichern
```

### Beispiel-Commit-Nachrichten
```bash
git commit -m "Farben angepasst"
git commit -m "Neue Quiz-Aufgaben hinzugefügt"
git commit -m "Fehler in Rhombus-Animation behoben"
```

### Änderungen hochladen (zu GitHub)
```bash
git push origin main          # Änderungen hochladen
```

### Änderungen herunterladen
```bash
git pull origin main          # Neueste Version holen
```

### Neuen Branch erstellen
```bash
git checkout -b mein-feature  # Neuer Branch für Experimente
git checkout main             # Zurück zum Haupt-Branch
```

## 🐛 Häufige Probleme

### Website zeigt alte Version
1. Browser-Cache leeren: `Strg + F5` (Windows) oder `Cmd + Shift + R` (Mac)
2. Browser komplett schließen und neu starten

### Änderungen werden nicht angezeigt
- Datei gespeichert? (`Strg + S`)
- Richtigen Ordner geöffnet?
- Browser neu laden (`F5`)

### Git-Konflikt beim Push
```bash
git pull origin main          # Erst aktuelle Version holen
# Konflikte manuell lösen
git add .
git commit -m "Konflikt gelöst"
git push origin main
```

## 📚 Nützliche Befehle

```bash
# Git-Historie ansehen
git log --oneline

# Letzte Änderung rückgängig (VORSICHT!)
git reset --hard HEAD~1

# Datei-Änderungen ansehen
git diff dateiname.html

# Alle Branches anzeigen
git branch -a

# Branch löschen
git branch -d branch-name
```

## 💡 Best Practices

1. **Oft committen**: Kleine, logische Änderungen einzeln speichern
2. **Klare Commit-Nachrichten**: Was wurde geändert und warum?
3. **Testen vor Commit**: Website im Browser prüfen
4. **Backup machen**: Vor großen Änderungen Branch erstellen
5. **README pflegen**: Dokumentation aktuell halten

## 🎯 Typischer Workflow

1. **Änderungen machen**
   ```bash
   # Dateien bearbeiten in VS Code
   ```

2. **Testen**
   ```bash
   python3 -m http.server 8000
   # Im Browser testen
   ```

3. **Speichern**
   ```bash
   git status                    # Was wurde geändert?
   git add .                     # Alles vormerken
   git commit -m "Quiz erweitert"
   ```

4. **Hochladen**
   ```bash
   git push origin main
   ```

## 📞 Hilfe

- Git-Dokumentation: https://git-scm.com/doc
- HTML/CSS/JS Referenz: https://developer.mozilla.org/de/
- Bei Problemen: `git status` zeigt immer den aktuellen Zustand

---

**Tipp**: Diese Datei kannst du jederzeit mit `cat ANLEITUNG.md` im Terminal lesen! 📖
