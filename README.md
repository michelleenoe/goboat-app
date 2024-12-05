Mangler: 

- Links i footer 
- færdiggøre onboarding ift. navigation frem og tilbage --> kun indlæses én gang 
- (LocalStorage + copy er ikke i brug endnu på main)

Hvis du vil tilgå onboarding så er det localhost:3000/onboarding (man kan ikke gå frem eller tilbage på main)




src: 
- app 
- - fonts (fonte)
- - styles 
- - - global.css (global styles)
- - api
- - - api.js (API kald)
- - components 
- - - basics (header, footer, etc)
- - - Cards (bare for at oprette en mappe i begyndelsen og så kan man lave en card i denne mappe)
- - - - Onboarding (pop-up skærm 1, 2 & 3)
- - error + page.jsx (tiller / fejlkode-side)
- - map + page.jsx (navigation / kort side)
- - settings + page.jsx (settings side)
- - onboarding + page.jsx (onboarding) / popup startskærme 
- page.jsx (dashboard / home)
- layout.jsx (MainLayout)
- content
- - copy.js (tekst til siderne)

- lib 
- - storage (local storage)
