# Content Expansion Roadmap - Phase 2+

## 📊 Current Status: 13 Codes + Ethical Guidelines

### ✅ What We Have
- **3 Zahlencodes**: 88, 14, 18
- **4 Emoji-Codes**: 🥷, ⚡⚡, 🥛, 🤡
- **2 Symbole**: ☀️ (Schwarze Sonne), ☨ (Keltenkreuz)
- **1 Kleidung**: Thor Steinar
- **1 Musik**: NSBM
- **2 Narrative**: Great Replacement + Factcheck

**Total: 13 Scientific, Sourced Codes**

---

## 🔍 Content Addition Strategy (Ethical & Responsible)

### Phase 2.1: Zahlencodes Expansion (Target: +15 codes)

**Approach**: Document publicly available codes from:
- ADL Hate Symbols Database
- SPLC Intelligence Reports
- Bundesamt für Verfassungsschutz Reports
- Correctiv Investigations

**Recommended New Codes to Add:**

1. **444** - 4/4/4 = DDD (Deutschland Den Deutschen - Germany for Germans)
   - Risk: HIGH | Platforms: Gab, 4chan, Reddit | Source: ADL
   
2. **23** - WEIB (White European Indigenous Brotherhood)
   - Risk: HIGH | Platforms: White Power Forums | Source: SPLC
   
3. **1488** - Combined 14 Words + 88
   - Risk: CRITICAL | Platforms: Tattoo Culture, Forums | Source: ADL
   
4. **4/20** - Hitler's Birthday (April 20)
   - Risk: HIGH | Platforms: Online, Real-world Events | Source: BfV
   
5. **9/11** - Various extremist interpretations
   - Risk: MEDIUM | Platforms: 4chan, conspiracy forums | Source: SPLC

### Phase 2.2: Emoji-Codes Expansion (Target: +12 codes)

**Codes to Research & Add:**

1. **🌱☘️🌾** - Aryan/Viking symbolism  
   - Source: Correctiv
   
2. **🤍** - White heart (white supremacy)
   - Source: ADL
   
3. **👌** - OK symbol (context-dependent controversy)
   - Source: ADL, Stanford IO
   
4. **🦷** - Teeth emoji (Aryan superiority)
   - Source: ADL
   
5. **🔗** - Chain link (white power)
   - Source: Social Media Analysis

### Phase 2.3: Symbole Expansion (Target: +10 codes)

**High-Priority Symbols:**

1. **Wolfsangel** (Wovl Symbol)
   - Historical: Nazi SS symbol
   - Modern: Neonazi tattoo culture
   - Source: BfV, SPLC
   
2. **Tiwaz-Rune** (ᛏ)
   - Historical: Norse rune (warrior)
   - Misuse: Nazi/Neonazi appropriation
   - Source: ADL
   
3. **Thor-Hammer** (Mjolnir ☩)
   - Historical: Norse mythology
   - Misuse: Aryan Brotherhood symbol
   - Source: SPLC
   
4. **Odal-Rune** (ᚩ)
   - Historical: Germanic rune
   - Misuse: Nazi heritage symbol
   - Source: BfV

### Phase 2.4: Kleidung & Brands (Target: +8 codes)

**Brands to Document:**

1. **Lonsdale** - British boxing brand co-opted
   - History: Real boxing brand, misappropriated
   - Context: Skinhead culture adopted
   - Source: Amadeu Antonio Stiftung
   
2. **Fred Perry** - Clothing controversy
   - Context: Accidentally adopted by extremists
   - Action: Company actively combats misuse
   - Source: Correctiv

### Phase 2.5: Musik Genre Codes (Target: +6 codes)

**Genres & Artists to Add:**

1. **RAC** (Rock Against Communism)
   - Origin: 1970s British white power music
   - Current: International network
   - Source: ADL, SPLC
   
2. **Phonk** - Subgenre with extremist elements
   - Context: Some producers have extremist ties
   - Note: Many artists are NOT extremist
   - Source: Social Media Analysis

### Phase 2.6: Narrative & Misinformation (Target: +15 codes)

**High-Priority Narratives:**

1. **"Volkstod"** (Extinction of the Volk)
   - German variant of Great Replacement
   - Common in: German-language forums, AfD
   - Source: BfV, Bundeszentrale für politische Bildung
   
2. **"Umvolkung"** (Population replacement)
   - Context: Specifically about Germany
   - Combines: Migration + Demographic anxiety
   - Source: Bundeszentrale für politische Bildung
   
3. **"White Genocide"** (Conspiracy)
   - Context: Debunked but widely spread
   - Factcheck: Misinterpretation of UN demographic projections
   - Source: SPLC, Snopes

---

## ⚠️ Ethical Guidelines for Content Addition

### What We Include:
- ✅ **Documented codes** from 3+ academic/journalistic sources
- ✅ **Risk classification** based on actual usage in extremist communities
- ✅ **Platform information** for awareness/moderation purposes
- ✅ **Factchecks** with scientific sources

### What We DON'T Include:
- ❌ Speculative or unverified codes
- ❌ Fringe theories without journalistic coverage
- ❌ Instructions on how to use codes
- ❌ Glorification or endorsement of extremism
- ❌ Recruitment material or propaganda

### Quality Standards:
1. **Every code must have 2+ sources** (at least one institutional)
2. **Risk levels must be evidence-based**, not subjective
3. **Platform info should be current** (within 6 months)
4. **Context matters**: Include nuance (e.g., 👌 has many meanings)

---

## 📅 Implementation Timeline

### Week 1-2: Zahlencodes (Target: 3→15)
- Research ADL/SPLC databases
- Cross-reference with BfV reports
- Create JSON entries with sources
- Test UI rendering

### Week 3-4: Emoji-Codes (Target: 4→12)
- Document current emoji usage in extremist spaces
- Include platform-specific context
- Add warnings about "plausible deniability"

### Week 5-6: Symbole & Runen (Target: 2→15)
- Detailed historical context
- Modern usage documentation
- Legal status in different countries (DE/AT/CH)

### Week 7-8: Kleidung, Musik, Narrative
- Complete remaining categories
- Add quiz module for engagement
- FAQ section

---

## 🛠️ Technical Implementation

### JSON Schema Addition:
```json
{
  "id": "code-id",
  "code": "Code/Symbol",
  "category": "zahlen|digital|symbole|kleidung|musik|narrative",
  "subtitle": "Short description",
  "meaning": "Full meaning",
  "context": "Historical/cultural context",
  "risk": "high|medium|low",
  "platforms": ["Platform1", "Platform2"],
  "sources": [
    {
      "title": "Source Name",
      "url": "https://...",
      "date": "2026-06-18"
    }
  ],
  "notes": "Additional context or warnings",
  "historicalContext": "If applicable"
}
```

### UI Enhancements:
- [ ] Filtering by risk level
- [ ] Platform-based view
- [ ] Timeline of evolution
- [ ] Related codes linking
- [ ] Export to PDF
- [ ] Print-friendly view

---

## 📚 Recommended Source Institutions

### Primary Sources:
1. **ADL (Anti-Defamation League)** - International coverage
2. **SPLC (Southern Poverty Law Center)** - US/International
3. **Amadeu Antonio Stiftung** - German-language focus
4. **Bundesamt für Verfassungsschutz** - German intelligence reports
5. **Correctiv** - German investigative journalism
6. **Bundeszentrale für politische Bildung** - German education ministry

### Secondary Sources:
- Stanford Internet Observatory (research)
- ISD (Institute for Strategic Dialogue)
- Hope not Hate (UK-based)
- Magazine Recherche (France)
- CTC Sentinel (academic)

---

## 🎯 Success Metrics

### Content Goals:
- [ ] 50+ Total codes by end of Phase 2
- [ ] 3+ sources per code (average)
- [ ] 100% JSON validation
- [ ] Zero speculative entries

### Quality Goals:
- [ ] Lighthouse Accessibility: 90+
- [ ] WCAG AAA Compliance: 95%+
- [ ] Mobile usability: 98%+
- [ ] Load time: <2 seconds

### Engagement Goals:
- [ ] Quiz completion rate: >30%
- [ ] Search usage: >40% of sessions
- [ ] Average session duration: >3 minutes
- [ ] Return visitor rate: >20%

---

**Status**: In Planning  
**Last Updated**: 2026-06-18  
**Next Review**: 2026-07-02
