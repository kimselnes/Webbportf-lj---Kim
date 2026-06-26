Detta är min webbportfolio som jag arbetat med som examinerande-inlämnsuppgift under min utbildning som Systemutvecklare.
Tanken var att den skulle vara enkel att förstå och lätt att läsa.

HTML
Strukturen i HTML-filen gick ut på att jag hade en header och main inom min body. Min nav ingick i header och för varje sektion i min main hade jag en section-tag + min footer.
Anledningen till denna struktur handlar om att lättare förstå hur webbsidan är uppbyggd, med hjälp av section-taggar blir det lite färre div-taggar och därför lättare att förstå. Sedan, om jag förstår rätt, så bör även de som använder screenreaders få det lättare med navigeringen.
Jag använde mig av aria-live="polite"  vid mina error meddelande för att screenreaders inte ska reagera lika starkt vid dem tillfällena.
Jag försökte med all min might att benämna mina klasser så bra som möjligt, men jag har nog blandat ihop lite ord lite här och där. Te.x. använt både wrapper och container för samma betydelse.

CSS
Jag gav mig ”fanken” på att jag skulle använda mig av grönt och orange som primary och secondary färger. Färger som jag gillar men kan vara lite svårt att passa ihop. Förhoppningsvis kommer användare av denna sida att tolerera mina färgval. Tillsammans med dem färgerna använde jag en mörkblå färgsom bakrund. Blått känns reltivt neutralt och enkelt att använda.
Något som jag ständigt tänkte på var att kontrasten skulle vara bra så att man lätt kan läsa texten på skärmen. Jag hoppas att en lite nertonade vita färgen jag använde till viss text inte blir oläsbar, men den såg bra ut för mig.
Jag ville också att det skulle vara lätt att förstå vad man kan trycka på och vad man inte kan trycka på. Min orangea färg blev lite av en ”call-to-action” färg och jag använde mig av cursor-ändringar  och animationer för att betona de element man kan klicka på.
Jag använde mig av både flex och grid. Men hjälp av dessa tekniker blir det lättare att placera sina element där man vill ha dem och de fungerar bra med responivitet, även fast jag inte gick för VG med mediaqueries  är det trevligt att layouten ser bra ut för olika skärmstorlekar. 

ÖVRIGT
Organiseringen för mitt projekt var väldigt basic. En html-fil, en css-fil och en js-fil. Css- och js-filerna ligger i varsin folder. Sedan utöver dem har jag en assets-folder som innehåller alla mina bilder som jag använder mig av. Anledningen till den simpla organisationen var storleken på projektet, som är ganska litet, och att portfolion är en Single Page Application. Hade det inte varit SPA hade man haft en html-fil för varje enskild sida.
Mitt kontakt formulär har endast basic validation. Den känner endast igen ifall det finns något innehåll i mina input-fält. Om en fält inte är ifyllt så kan man inte skicka sitt meddelande till mitt mail. Om man lämnar en fält tomt, efter att man klickat på det en gång, så kommer felmeddelandet fram på en gång för att göra user-experience  bättre. Enda fältet med lite annan validation är e-mail fältet som endast får korrekt validering ifall man har ett snabel-a med någon text på vardera sida. Dock ingen regex. Det jag gör med valideringen i js-filen har mest med att kolla efter ifall ett fält är ifyllt elelr inte.
Jag har använt mig av både addEventListener och onlick som jag satt i direkt i HTML-filen. Jag har använt mig av just onlick när jag känt att det är lättare att specifikt välja just det elementet. Kan dock vara sämre när om man vill ääbygga ut portfolion.
