# mi-el.cz – Vercel nasazení
1) Vytvořte účet na Vercel.com a novou statickou aplikaci.
2) Nahrajte obsah tohoto ZIPu. Nebo repo → `vercel`.
3) V Nastavení projektu:
   - **Environment Variable**: `GA_ID` není třeba – vložte přímo do `index.html` (nahraďte `G-XXXXXXX`).
   - Nastavte vlastní doménu `mi-el.cz` (Vercel → Domains) a delegujte DNS.
4) Google recenze: v `index.html` a `reference.html` nahraďte `PLACE_ID` vlastním Place ID (najdete v Places API nebo v Google Place ID Finder).
5) Reálné kontakty doplňte v `kontakt.html` (tel., email, adresa) a do patičky.
6) Nahrajte reálné fotky do `assets/` (nahradí placeholders).

## GA4 s consentem
- Nahraďte `window.GA_ID='G-XXXXXXX'` svým GA4 Measurement ID. GA se načte až po souhlasu.

## „Před a po“ galerie
- Vložte reálné fotky jako `assets/before_after_*.jpg/png` a upravte alt popisky.

## Google recenze
- Úprava `assets/reviews.json` pro zobrazení citací.
- Odkaz pro psaní recenze: https://search.google.com/local/writereview?placeid=PLACE_ID
