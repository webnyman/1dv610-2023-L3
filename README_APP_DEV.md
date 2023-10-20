# Utökad README för apputvecklare
1dv610 Laboration 3 - App av modulen Cypher and deCypher text

Är du apputvecklare? [Läs utökad info här](./README_APP_DEV.md)

## Beskrivning
Detta är en webbapp som med hjälp av modulen "Cypher and deCypher text" låter användaren, via ett webbgränsnitt, chiffrera och dechiffrera en text på tio olika sätt.

## Tekniska krav
- Webbläsare som klarar av HTML och Javascript med ES6-moduler

## Design
Webbappen är strukturerad med mönstret Model - View - Controller (MVC)

- App.js är main-applikation
- index.html är uppbyggd med Bootstrap 4.0

## Filer/klasser som används (kort beskrivning)
|Fil/Klass|Beskrivning|
|---------|-----------|
|app.js|Startpunkt för applikationen. Hämtar View och Model och Dependency-Injectar i Controller.|
|controller/Controller.js|Hanterar all logik i applikationen, registrerar nödvändiga eventlyssnare från index.html, manipulerart modellerna och renderar till vyn.|
|model/cypher/|Här ligger de nödvändiga klasserna som modulen "Cypher" använder.|
|model/cipher_module.js|Här ligger Facade-klassen för modulen. Samtliga chiffrering/dechiffrerings-metoder finns här.|
|model/CipherHistory.js|Modell för användarhistoriken.|
|model/UserCipher.js|Modell för en chiffrering/dechiffrering som används i användarhistoriken.|
|view/View.js|Vyklassen som hanterar all rendering av information och manipulering av DOM:en.|