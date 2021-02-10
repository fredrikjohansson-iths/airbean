# AirBean

## Projektbeskrivning
```
I detta projekt ska vi öva på dels agil utveckling och dels vue. Nedan beskrivs tre olika typerav krav, tekniska, funktionella samt krav på projektstruktur. 

Som komplement till framföralltden tekniska specifikationen finns en figma att tillgå.

Alla i gruppen ska arbeta mot samma repository. Se till att synka er kod ofta. Steg 1 blirsåledes, skapa ett repository som alla i gruppen har till och access att skriva till. Ni ska över er i agil utveckling, använd er av roller som från scrum. 

Steg 2, utse enscrum-master. Personen som är scrum-master kan bytas av.Upprätta en scrum/kanban - board. Detta gör förslagsvis i Github-projects alternativtalternativt trello.Börja med att bryta ner kraven nedan till user stories, välj ut de ni vill börja med och skrivupp de på boarden. 

Se till att tilldela user-stories till alla i gruppen, genomför detta även iverktygen ni valt.Funktionella kravApplikationen ska vara en vue applikation. 

En användare ska kunna registrera sig iapplikationen. Detta sker via “profile” sidan i applikationen. 

Om en användare är registreradkan denne se sina tidigare beställningar, också det under “profile” sidan.Syftet med applikationen är att sälja kaffe åt dess användare. En användare kan såledesvälja vilka kaffedrycker denne är intresserad av att köpa, detta görs under “menu” sidan. 

När användaren känner sig redo att beställa kan denne checka ut sina varor, detta görs under“cart” sidan. Genom att klicka på “Take my money!” knappen skickas beställningen iväg och“status” sidan visas. Om ingen användare har registrerats ska användaren istället för attskickas till “status” sidan först skickas till “profile” sidan för registrering.

Övriga sidor ska skapas i enlighet med figman. 

Applikationen ska använda sig av router samt vuex för att lagar state och användaren ochdennes beställningar. Inga krav på att state finns krav när sidan ladda om eller närapplikationen startas om.
```
## Figma 

[AirBean1.1](https://www.figma.com/file/5M2u8args4PbsgQbe0tIcE/AirBean-v.1.1?node-id=0%3A1)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
