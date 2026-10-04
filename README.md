# Kvadratkoll: förslag till ny webbplats

Ett designförslag för **Kvadratkoll i Stockholm AB**. Förslaget bygger på innehållet, priserna, logotypen och bilderna från nuvarande kvadratkoll.se, men med en ny struktur och ett nytt formspråk.

**Demo:** [lägg till länk efter publicering] · svenska på `/sv`, engelska på `/en`

> Detta är ett förslag och inte den publicerade webbplatsen. Sidan är dold för sökmotorer (`noindex`) tills förslaget är godkänt.

---

## Utgångspunkt

Kvadratkoll har det som en kund letar efter: över 7 000 utförda mätningar, diplomerade areamätare från SIS, mätning enligt SS 21054:2020 och mätbevis ofta samma dag. På nuvarande webbplats är den informationen fördelad på nio separata sidor, och de starkaste förtroendesignalerna står i löptext. Bokning sker via mejl eller telefon.

Förslaget samlar allt på en sida, i den ordning en kund behöver det, och lyfter fram det som skiljer Kvadratkoll från andra.

## Vad förslaget innehåller

Startsidan följer kundens väg från första intryck till bokning:

| Del | Innehåll |
| --- | --- |
| **Start** | Budskap, bokningsknapp och SIS-diplomet direkt synligt |
| **I korthet** | 7 000+ mätningar · SIS-diplomerade · SS 21054 · mätbevis samma dag |
| **01 Tjänster** | Bostäder, lokaler och planritningar, med egna bilder |
| **02 Så går det till** | Fyra steg från bokning till mätbevis |
| **03 Varför Kvadratkoll** | Diplomering, laser och CAD, juridiskt mätbevis, flexibla tider |
| **04 Mätbevis** | Vad mätbeviset visar, med en ritning som exempel och länk till en riktig exempelritning |
| **05 Priser** | Hela prislistan som tydliga tabeller med tillägg |
| **06 Vanliga frågor** | Svar hämtade från sidorna om mätning, regelverk och mätbevis |
| **07 Boka** | Telefon och mejl i fokus, vad ni behöver från kunden och ett bokningsformulär |

**Övrigt**
- **Två språk:** svenska och engelska, med språkval i menyn.
- **Mobilanpassat:** varje del är utformad för mobilen, inte bara staplad.
- **Bokningsknapp alltid nära:** den finns i menyn och vid de viktigaste avsnitten.

## Designidé: arkitektritningen

Formspråket hämtar inspiration från det Kvadratkoll faktiskt levererar, nämligen mätningar och ritningar.

- **Färger:** ljust stenpapper, grafit och en djupblå accent, som anteckningar på en ritning.
- **Typografi:** stora, stramma rubriker och ett tekniskt typsnitt för mått, numrering och etiketter.
- **Detaljer:** måttlinjer över bilden i toppen, rutpapper bakom ritningen, en linjal som linje och små fyrkanter som knyter an till logotypen.
- **Återhållsamt:** inga skuggor, gradienter eller rundade "appkort". Bilder har raka hörn.

## Kvalitet

Mätt i testmiljö:

- **Tillgänglighet:** 0 fel enligt WCAG 2.1 AA (axe-core) på svenska och engelska, mobil och dator.
- **Lighthouse dator:** Performance 100 · Accessibility 100 · Best Practices 100.
- **Ingen layoutförskjutning** när sidan laddas (CLS 0).
- **Snabb:** sidorna är statiskt genererade, och bilderna optimeras och anpassas automatiskt efter skärmstorlek.

## Innehåll och bilder

- **Fakta och priser:** hämtade från kvadratkoll.se (oktober 2026). Inga uppgifter är påhittade.
- **Material:** logotyp, SIS-diplom, foton och exempelritning är Kvadratkolls eget material.
- **Illustration:** ritningen i avsnittet Mätbevis är en illustration med påhittade mått och är tydligt märkt som exempel.

## Förslag på nästa steg

1. **Bokningsformuläret:** koppla det till e-post så att förfrågningar kommer direkt till info@kvadratkoll.se. I förslaget skickar formuläret ännu inga uppgifter.
2. **Bilder i högre upplösning:** dagens bilder är cirka 800 pixlar breda. Originalbilder ger skarpare resultat på moderna skärmar.
3. **Granskning av texter:** särskilt den engelska översättningen.
4. **Publicering:** på kvadratkoll.se, med indexering för sökmotorer påslagen.

---

## För utvecklare

Next.js (App Router), TypeScript, Tailwind CSS v4 och lucide-react. Arkitektur, designsystem och konventioner beskrivs i [`CLAUDE.md`](CLAUDE.md).

```bash
npm install
npm run dev        # http://localhost:3000 (redirects to /sv, English at /en)
```

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the dev server               |
| `npm run build`     | Production build                   |
| `npm run start`     | Serve the production build         |
| `npm run lint`      | ESLint                             |
| `npm run typecheck` | Generate route types and run `tsc` |

Deploy: import the repository on Vercel. No environment variables are needed.
