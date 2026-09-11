# Försäkringsöversikt

Frontend-lösning för Gjensidiges rekryteringscase.

Applikationen visar en kunds försäkringar och gör det möjligt att filtrera dem utifrån försäkringstyp och status. Lösningen är byggd med React och TypeScript och utgår från den bifogade designen.

## Funktionalitet

- Hämtar försäkringar från API
- Hanterar loading-, error- och empty state
- Visar försäkringar som återanvändbara kort
- Filtrering på försäkringstyp
- Filtrering på status
- Filtren appliceras först när användaren klickar på "Visa försäkringar"
- Inaktiva försäkringar markeras med en statusindikator
- Paginering med 5 försäkringar per sida
- Resultattext som visar aktuellt intervall, exempelvis "Visar 1–5 av 15 försäkringar"
- Responsiv layout för desktop, surfplatta och mobil
- På mindre skärmar scrollas användaren till filterpanelen när den öppnas

## Teknik

Projektet är byggt med:

- React
- TypeScript
- Vite
- CSS
- Fetch API

Jag har valt att använda Reacts inbyggda funktionalitet och vanlig CSS utan ytterligare komponent- eller stylingbibliotek eftersom applikationen är relativt liten och inte kräver extra beroenden.

## Struktur

Applikationen är uppdelad i mindre komponenter med tydliga ansvarsområden:

- `App` – datahämtning, state, filtrering och övergripande logik
- `PolicyCard` – presentation av en försäkring
- `FilterPanel` – val av produkt- och statusfilter
- `Pagination` – sidnavigering och information om aktuellt resultatintervall
- `Policy` – TypeScript-typ för API-datan

## Filtrering

Applikationen skiljer på valda och applicerade filter.

Checkboxarna uppdaterar användarens val, men själva försäkringslistan filtreras först när användaren klickar på **"Visa försäkringar"**.

Det gör det möjligt att göra flera val innan filtreringen appliceras och följer beteendet i uppgiften.

När nya filter appliceras återställs pagineringen till första sidan.

## Responsivitet

Layouten anpassas för mindre skärmar.

På desktop visas filterpanelen bredvid försäkringslistan. På mindre skärmar anpassas layouten och `scrollIntoView` används när filterpanelen öppnas för att göra filtret lättare att nå.

## API

Försäkringarna hämtas från:

```text
GET {VITE_API_BASE_URL}/policies/List
```

API-adressen konfigureras via miljövariabeln:

```text
VITE_API_BASE_URL
```

## Kom igång

Projektet har utvecklats och testats med npm.

Installera dependencies:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Bygg projektet:

```bash
npm run build
```

Kör lint:

```bash
npm run lint
```

## Design

Implementationen utgår från designreferensen:

```text
src/assets/overview.png
```

Fokus har varit att efterlikna designen samtidigt som gränssnittet fungerar responsivt på olika skärmstorlekar.