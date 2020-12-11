var L07;
(function (L07) {
    // hier würde ich gerne eklären, wie ich die Aufgabe 8 gelöst habe.
    // Wichtiger Hinweis: Ich erzeuge meine einzelnen Pads direkt in TypeScript und benutze dafür ein verschachtelten Array.
    // Für das verstehen oder bestehen dieser Aufgabe ist dies aber nicht notwendig. Ich versuche es trotzdem zu erklären, für alle die es verstehen wollen.
    // Erzeugen der Variablen mit der Verbindung zu den entsprechenden Buttons
    var playBtn = document.getElementById("playBtn");
    var stopBtn = document.getElementById("stopBtn");
    var recordBtn = document.getElementById("recordBtn");
    var trashBtn = document.getElementById("trashBtn");
    // mein Index, mit dem ich durch den Array gehe, in dem meine Beats drin sind
    var index;
    // Kontrollvariable, ob ich gerade am aufnehmen bin oder nicht
    var recording = false;
    // mein Intervall, mit dem ich den Sound abspiele. Benötige ich für clearInterval 
    var interval;
    // mein Array welches mit den entsprechenden HTML-Elementen, der dazugehörigen Audiofile und den Farben (linear-Gradient).
    // ich benötige das, da ich meine Buttons direkt in TS erzeuge, wer das im HTML macht, hat einen anderen Array.
    // Als Type gebe ich an, dass es HTMLButtonElement | HTMLAudioElement | string Elemente sind (also mehrere)...
    // die doppelten [][] sagen an, dass es ein Array ist, in dem weitere Arrays drin sind (verschachtelt).
    var drumPadArray = [
        //                        HTML-ELEMENTE      ,     AudioFlile mit Pfad    ,  Farben für mein Style         
        // innerer Arrayindex ->       0                               1                 2          3
        [document.createElement("button"), new Audio("./assets/A.mp3"), "#3D93F6", "#1F63D1"],
        [document.createElement("button"), new Audio("./assets/C.mp3"), "#3D93F6", "#1F63D1"],
        [document.createElement("button"), new Audio("./assets/F.mp3"), "#3D93F6", "#1F63D1"],
        [document.createElement("button"), new Audio("./assets/G.mp3"), "#FF5BB0", "#F0037E"],
        [document.createElement("button"), new Audio("./assets/hihat.mp3"), "#FF5BB0", "#F0037E"],
        [document.createElement("button"), new Audio("./assets/kick.mp3"), "#FF5BB0", "#F0037E"],
        [document.createElement("button"), new Audio("./assets/snare.mp3"), "#FF5BB0", "#F0037E"],
        [document.createElement("button"), new Audio("./assets/laugh-1.mp3"), "#F6A23D", "#C66601"],
        [document.createElement("button"), new Audio("./assets/laugh-2.mp3"), "#F6A23D", "#C66601"] //           8
    ];
    var _loop_1 = function (i) {
        // ich geben jedem ersten Element (Also dem einzelnen Pad) im inneren Arrayindext die Klasse "singlePad" für mein Style
        drumPadArray[i][0].className = "singlePad";
        // dem selben Element gebe ich hier meine Farbe, ich benutze hier linear-Gradient, deshalb benötige ich zwei Farben ...
        // Das mache ich, indem ich dem eben genannten Element die Farben gebe, welche im selben inneren Arrayindex an stelle 2 und 3 steht
        drumPadArray[i][0].setAttribute("style", "background-image: linear-gradient(" + drumPadArray[i][2] + "," + drumPadArray[i][3] + ")");
        // ##WICHTIG##
        // Hier erzeuge ich auf jedes Pad einen Eventlistener in dem ich dann die normale PlaySample Funktion übergebe ...
        // dann setzte ich eine Bedingunge mit if(recording), sobald ich also am recorden bin, soll auch die zweite Funktion ausgeführt werden.
        // Falls ihr für jedes Pad einen eigenen Eventister benutzt, greift ihr nicht auf drumPadArray[i][0] zu, sondern auf das entsprechende Element.
        drumPadArray[i][0].addEventListener("click", function () {
            (playSample((drumPadArray[i][1])));
            if (recording) {
                recordSound((drumPadArray[i][1]));
            }
        });
        // Dann füge ich das entsprechnde Element noch meinem Wrapper im HTML hinzu, weches ich dort schon erstellt habe und eine ID vergeben habe.
        document.getElementById("padWrapper").appendChild(drumPadArray[i][0]);
    };
    // hier gehe ich durch meinen ganzen Array den ich oben angelegt habe (Äußerer Arrayindex) um im inneren Arrayindex entsprechend was zu machen... 
    // wenn hier steht (as HTMLButtonElement), nennt man das casten. Da ich meinem Array mehrere Typen gegeben habe, muss ich hier immer angeben ...
    // welchen Typ ich hier genau benutze. Ich sage also z.B. (Element als HTMLButtonElemnt), oder (Element als HTMLAudioElemt).
    // Außerdem benötige ich zwei eckige Klammern [][], in der ersten kommt der äußere Arrayindex, in der zweitem der innere Arrayindex.
    // Der Äußere ist immer "i", da ich durch den For-Loop durch alle äußeren gehe und "i" sich immer um 1 erhöhrt.
    // Wichtiger Hinweis: Die meisten von euch werden für jedes Pad einen eigenen Eventlistnerer haben, entsprechend ist die For-Schleife nicht notwendig.
    // wichtig ist hier vor allem der Teil den ich mit ##WICHTIG## gekennzeichnet habe
    for (var i = 0; i < drumPadArray.length; i++) {
        _loop_1(i);
    }
    // Das ist mein Array in dem die Beats definiert sind, welche ich bei Play abspielen soll.
    var beatArray = [drumPadArray[4][1], drumPadArray[5][1], drumPadArray[6][1]];
    // mein Play-Button, der ein Eventlistener bekommt, mit dem ich dann die entsprechende Töne innerhalb meines beatArray abspiele.
    // Hier setzte ich meinen Index direkt auf 0, damit der Beat immer von vorne abgespielt wird ...
    // und bentuzte meine setActiveBtn-Funktion, welche mir mein Icon von Play auf Pause wechselt.
    // mit dem interval erzeuge ich dann das Abspielen des Beats.
    playBtn.addEventListener("click", function () {
        index = 0;
        setActiveBtn(playBtn, stopBtn);
        interval = setInterval(function () {
            playBeats(beatArray);
        }, 600);
    });
    // mein Stop-Button, welche ein Eventlistener bekommt, mit dem ich das abspielen des Beats stoppe.
    // ich greife einfach auf meine Variable "interval" zu, schreibe sie in "clearInterval", dadurch wird der Interval gestoppt.
    // Außerdem setzte ich wie oben die Funktion "setActiveBtn" ein, damit mein Pausebutton wieder zu einem Playbutton wird.
    stopBtn.addEventListener("click", function () {
        setActiveBtn(stopBtn, playBtn);
        clearInterval(interval);
    });
    // mein "Lösch"-Button, mit dem ich den Beat leere. Auch hier setzte ich den Knopf anfangs wieder auf Play.
    // ich stoppe den Interval falls dieser noch läuft,
    // und lösche den Inhalt des beatArray mit: = []
    trashBtn.addEventListener("click", function () {
        setActiveBtn(stopBtn, playBtn);
        clearInterval(interval);
        beatArray = [];
    });
    // sobald ich den Record-Button drücke, wird meine Kontrollvariable auf "True" gesetzt ...
    // was bedeutet, dass in dem Eventlistener ganz oben, bei dem ich if(recording) als Bedingungen gesetzt habe ...
    // jetzt auch die zweite Funktion abgespielt wird, und ich das nächste Pad welches ich drücke, direkt in mein beatArray hinzufüge
    recordBtn.addEventListener("click", function () {
        recording = true;
    });
    // Dies ist die Funktion die ausgeführt wird, sobald recording auf True steht, und ich eines der Pads klicke.
    // Mit .push() füge ich einfach das gedrückte Element zu meinem bestehenden beatArray em Ende meines Arrays hinzu.
    // anschließend setzte ich recordung auf false, damit ich beim nächsten Klicken auf ein Pad nicht wieder diese Funktion auslöse.
    function recordSound(sound) {
        beatArray.push(sound);
        recording = false;
    }
    // Alle weiteren Funktionen sollten euch bekannt sein, oder durch mein Video erklärt werden.
    function playSample(audio) {
        audio.play();
    }
    function playBeats(array) {
        if (index < array.length) {
            playSample(array[index]);
            index++;
        }
        else
            index = 0;
    }
    function setActiveBtn(firstElement, secondElement) {
        firstElement.classList.add("is-not-active");
        secondElement.classList.remove("is-not-active");
    }
})(L07 || (L07 = {}));
//# sourceMappingURL=main.js.map