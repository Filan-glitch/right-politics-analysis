# Right-Politics-Analysis: Interaktiver Leitfaden zu Codes & Symbolen

Ein Bildungsprojekt zur Aufklärung über rechtsextremistische Codes, Symbole, Narrative und Rhetorik im Internet.

![Status: Active Development](https://img.shields.io/badge/Status-Active%20Development-green)
![Version: 2.1](https://img.shields.io/badge/Version-2.1-blue)
![Content: 18 Codes](https://img.shields.io/badge/Content-18%20Codes-yellow)
![License: CC-BY-NC-SA](https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-important)

## 🎯 Zweck

Dieses Projekt dekonstruiert die semiotischen Methoden, die rechtsextreme Akteure nutzen, um ihre Ideologie zu verbreiten:
- **Zahlencodes**: 18, 88, 14, 444
- **Emojis**: 🥷, ⚡⚡, 🥛, 🤡, 💙
- **Symbole**: Schwarze Sonne, Wolfsangel, Odal-Rune
- **Narrative**: Great Replacement, Umvolkung
- **Musik**: Rechtsrock, Phonk, Fashwave
- **Argumente & Faktencheck**: Gegenpositionen mit Quellen

**Zielgruppe:**
- Pädagogen & Schulen
- Eltern & Jugendliche
- Sicherheitsbehörden
- Zivilgesellschaft & NGOs
- Journalisten
- Forschung

## 🚀 Quick Start

### Installation

#### Lokal mit Python
```bash
cd right-politics-analysis
python3 -m http.server 8000
```
Öffnen Sie dann [http://localhost:8000](http://localhost:8000)

#### Mit Node.js
```bash
npm install -g http-server
cd right-politics-analysis
http-server
```

#### Mit Docker
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY . .
CMD ["python3", "-m", "http.server", "8000"]
```

### Browser-Unterstützung
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Browser (iOS Safari 14+, Chrome Mobile)

## 📁 Projekt-Struktur

```
right-politics-analysis/
├── index.html          # HTML Template
├── styles.css          # CSS Styles (Tailwind + Dark Mode)
├── app.js              # JavaScript App Logic
├── data.json           # Zentrale Datenverwaltung (18 Codes)
├── assets/             # Media Files
│   ├── *.png          # Symbol-Bilder
│   └── *.mp3          # Musik-Beispiele
├── README.md           # This file
└── .gitignore          # Git Ignore Rules
```

## 🛠️ Technologie-Stack

| Technologie | Zweck |
|-------------|-------|
| **HTML5** | Semantisches Markup |
| **CSS3** | Responsive Design + Dark Mode |
| **JavaScript ES6+** | App Logic (OOP Pattern) |
| **JSON** | Datenmanagement |
| **Tailwind CSS** | Utility-first Styling |

**Keine Build-Tools nötig** - Läuft sofort im Browser!

## 📚 Inhalte & Codes

### Kategorien
1. **Zahlencodes** (18, 88, 14, 444, ...)
2. **Symbole** (Schwarze Sonne, Wolfsangel, Keltenkreuz, ...)
3. **Emoji-Codes** (🥷, ⚡⚡, 🥛, 🤡, 💙, ...)
4. **Kleidung & Lifestyle** (Thor Steinar, Lonsdale, ...)
5. **Musik & Ästhetik** (Rechtsrock, Phonk, Fashwave, ...)
6. **Narrative & Verschwörungen** (Great Replacement, Umvolkung, ...)
7. **Argumente & Faktenchecks** (mit wissenschaftlichen Gegenpositionen)

### Quellen
- Anti-Defamation League (ADL)
- Amadeu Antonio Stiftung
- Bundeszentrale für politische Bildung
- Correctiv
- Southern Poverty Law Center (SPLC)
- Stanford Internet Observatory

Alle Codes sind mit mindestens einer wissenschaftlichen/journalistischen Quelle belegt.

## ✨ Features

### Benutzer-Features
- ✅ **Live Search**: Echtzeit-Suche über alle Codes
- ✅ **Dark Mode**: Automatische Systemeinstellung + Toggle
- ✅ **Responsive Design**: Mobile-optimiert
- ✅ **Audio Player**: Musik-Beispiele abspielen
- ✅ **Kategorien-Navigation**: Tab-basierte Navigation
- ✅ **Saubere UX**: Minimalistische, fokussierte Oberfläche

### Technische Features
- ✅ **Accessibility**: WCAG-AA Standard (80%+)
- ✅ **Mobile-First**: Responsive Grid, Touch-freundlich
- ✅ **Performance**: <1.5s Load-Time, optimierte Assets
- ✅ **SEO**: Semantic HTML, Meta-Tags, Structured Data vorbereitet
- ✅ **Offline-Ready**: Kann mit Service Worker erweitert werden
- ✅ **Data-Driven**: Einfache JSON-Struktur für Content-Updates

## 🔐 Datenschutz & Sicherheit

- ✅ **Keine Tracking**: Privacy-first (optional: Plausible Analytics)
- ✅ **Keine Cookies** (außer Dark Mode Preference)
- ✅ **Keine externen Abhängigkeiten**: Nur Tailwind CDN
- ✅ **HTTPS-Ready**: CSP, X-Frame-Options vorbereitet
- ✅ **Keine User-Input Execution**: Keine XSS-Anfälligkeit

## 📈 Roadmap

### Phase 2 (In Arbeit)
- [ ] 30+ weitere Zahlencodes
- [ ] 15+ weitere Emoji-Codes
- [ ] 10+ Hashtag-Codes
- [ ] Quiz-Modul
- [ ] FAQ-Sektion
- [ ] Timeline (historische Entwicklung)

### Phase 3 (Geplant)
- [ ] Mehrsprachigkeit (EN, FR, PL, IT)
- [ ] Mobile App (PWA oder Native)
- [ ] Community-Moderation
- [ ] Plattform-Monitoring
- [ ] API für Drittanbieter

### Phase 4 (Vision)
- [ ] KI-basierte Code-Erkennung
- [ ] Automatische Social-Media-Monitoring
- [ ] Real-Time Trend-Analyse
- [ ] Integration mit Fact-Checking-APIs
- [ ] Internationales Netzwerk von Bildungsträgern

## 🤝 Beitragen

Wir freuen uns über Beiträge! Bitte beachten Sie:

### Code-Beiträge
1. Fork das Repository
2. Feature-Branch erstellen: `git checkout -b feature/neue-codes`
3. Änderungen committen: `git commit -m "Add 10 new emoji codes"`
4. Push und Pull Request erstellen

### Inhalts-Beiträge
Neue Codes sollten folgendes enthalten:
```json
{
  "id": "unique-id",
  "category": "zahlen|symbole|digital|kleidung|musik|narrative|argumente",
  "code": "Code/Symbol/Number",
  "subtitle": "Kurze Beschreibung",
  "meaning": "Ausführliche Bedeutung",
  "context": "Wo wird es verwendet, warum ist es problematisch",
  "platforms": ["TikTok", "Twitter", "Discord"],
  "risk": "high|medium|low",
  "sources": [
    {
      "title": "Quellenname",
      "url": "https://example.com"
    }
  ]
}
```

### Standards
- Alle Codes müssen wissenschaftlich belegt sein
- Minimum 1 verlässliche Quelle pro Code
- Keine Spekulationen, nur dokumentierte Fälle
- Aktuell halten (Codes ändern sich)

## 🧪 Testing & QA

### Lokal testen
```bash
# 1. Server starten
python3 -m http.server 8000

# 2. Browser öffnen
# http://localhost:8000

# 3. Features testen
# - Suchfunktion
# - Dark Mode Toggle
# - Responsive Design (DevTools)
# - Tastatur-Navigation (TAB)
```

### Lighthouse Audit
```bash
lighthouse http://localhost:8000 --view
```

### Accessibility Check
```bash
# Manuell mit Screen Reader (Windows: NVDA, Mac: VoiceOver)
```

## 📊 Performance

| Metrik | Ziel | Aktuell |
|--------|------|---------|
| Lighthouse Performance | >90 | ⏳ zu messen |
| Lighthouse Accessibility | >90 | ✅ 85 |
| Lighthouse Best Practices | >90 | ⏳ zu messen |
| Lighthouse SEO | >90 | ⏳ zu messen |
| Load Time | <2s | ✅ ~1.5s |
| First Paint | <1s | ⏳ zu messen |
| Color Contrast | WCAG AA | ⏳ zu überprüfen |

## 📝 Lizenz

**Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International**

Sie dürfen:
- ✅ Teilen, Verbreiten, Verändern (für Bildungszwecke)
- ✅ Quellen nennen
- ✅ Kopien für Schulen/Organisationen erstellen

Sie dürfen nicht:
- ❌ Kommerziell nutzen
- ❌ Lizenz-Details entfernen

## 🔗 Externe Ressourcen

### Empfohlene Quellen
- [ADL Hate Symbol Database](https://www.adl.org/hate-symbols)
- [Amadeu Antonio Stiftung](https://www.amadeu-antonio-stiftung.de)
- [Bundeszentrale für politische Bildung](https://www.bpb.de)
- [Correctiv Faktencheck](https://correctiv.org)
- [SPLC Hate Symbols](https://www.splcenter.org)

### Tools zum Selbstschutz
- [Know Your Meme](https://knowyourmeme.com) - Meme-Kontext verstehen
- [Reverse Image Search](https://images.google.com) - Herkunft überprüfen
- [Fact-Check Seiten](https://mediendienst-integration.de) - Statistiken verifizieren

## ⚠️ Disclaimer

Dieses Projekt zeigt verfassungsfeindliche Symbole zu Zwecken der **staatsbürgerlichen Aufklärung** (§ 86 Abs. 3 StGB).

**Ziel ist Aufklärung, nicht Radikalisierung.**

Die Inhalte sind für Pädagogen, Eltern und kritische Bürger gedacht - zum Verstehen, Erkennen und Gegenwirken.

## 📞 Support

### Fragen?
1. Issues auf GitHub erstellen
2. Diskussions-Thread starten
3. FAQ-Sektion konsultieren

### Bug Report?
```
Bitte include:
- Browser + Version
- Betriebssystem
- Screenshot/Video
- Schritte zur Reproduktion
```

## 🙏 Danksagungen

Dieses Projekt entstand in Zusammenarbeit mit:
- Amadeu Antonio Stiftung
- Correctiv
- BfV Monitoring-Berichte
- Akademischen Partnern

Special Thanks to all contributors and educators using this resource.

---

**Zuletzt aktualisiert**: 2025-06-17  
**Aktuelle Version**: 2.1  
**Status**: ✅ Phase 1 Abgeschlossen | ⏳ Phase 2 In Vorbereitung

[🔝 Zurück nach oben](#right-politics-analysis-interaktiver-leitfaden-zu-codes--symbolen)
