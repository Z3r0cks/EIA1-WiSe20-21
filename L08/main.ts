namespace L07 {

   // Erzeugen der Variablen mit der Verbindung zu den entsprechenden Buttons
   const playBtn: HTMLElement = document.getElementById("playBtn");
   const stopBtn: HTMLElement = document.getElementById("stopBtn");
   const recordBtn: HTMLElement = document.getElementById("recordBtn");
   const trashBtn: HTMLElement = document.getElementById("trashBtn");

   // mein Index, mit dem ich durch den Array gehe, in dem meine Beats drin sind
   let index: number;

   // Kontrollvariable, ob ich gerade am aufnehmen bin oder nicht
   let recording: boolean = false;

   // mein Intervall, mit dem ich den Sound abspiele. Benötige ich für clearInterval 
   let interval: number;

   // mein Array welches mit den entsprechenden HTML-Elementen, der dazugehörigen Audiofile und den Farben (linear-Gradient).
   // ich benötige das, da ich meine Buttons direkt in TS erzeuge, wer das im HTML macht, hat einen anderen Array.
   // Als Type gebe ich an, dass es HTMLButtonElement | HTMLAudioElement | string Elemente sind (also mehrere)...
   // die doppelten [][] sagen an, dass es ein Array ist, in dem weitere Arrays drin sind (verschachtelt).

   const drumPadArray: (HTMLButtonElement | HTMLAudioElement | string)[][] = [                                    // Äußerer ArrayIndex (nach unten)

      //                        HTML-ELEMENTE      ,     AudioFlile mit Pfad    ,  Farben für mein Style         
      // innerer Arrayindex ->       0                               1                 2          3
                  [document.createElement("button"), new Audio("./assets/A.mp3"), "#3D93F6", "#1F63D1"],          //           0
                  [document.createElement("button"), new Audio("./assets/C.mp3"), "#3D93F6", "#1F63D1"],          //           1
                  [document.createElement("button"), new Audio("./assets/F.mp3"), "#3D93F6", "#1F63D1"],          //           2
                  [document.createElement("button"), new Audio("./assets/G.mp3"), "#FF5BB0", "#F0037E"],          //           3
                  [document.createElement("button"), new Audio("./assets/hihat.mp3"), "#FF5BB0", "#F0037E"],      //           4
                  [document.createElement("button"), new Audio("./assets/kick.mp3"), "#FF5BB0", "#F0037E"],       //           5
                  [document.createElement("button"), new Audio("./assets/snare.mp3"), "#FF5BB0", "#F0037E"],      //           6
                  [document.createElement("button"), new Audio("./assets/laugh-1.mp3"), "#F6A23D", "#C66601"],    //           7
                  [document.createElement("button"), new Audio("./assets/laugh-2.mp3"), "#F6A23D", "#C66601"]     //           8
   ];


   // hier gehe ich durch meinen ganzen Array den ich oben angelegt habe (Äußerer Arrayindex) um im inneren Arrayindex entsprechend was zu machen... 
   // wenn hier steht (as HTMLButtonElement), nennt man das casten. Da ich meinem Array mehrere Typen gegeben habe, muss ich hier immer angeben ...
   // welchen Typ ich hier genau benutze. Ich sage also z.B. (Element als HTMLButtonElemnt), oder (Element als HTMLAudioElemt).
   // Außerdem benötige ich zwei eckige Klammern [][], in der ersten kommt der äußere Arrayindex, in der zweitem der innere Arrayindex.
   // Der Äußere ist immer "i", da ich durch den For-Loop durch alle äußeren gehe und "i" sich immer um 1 erhöhrt.

   for (let i: number = 0; i < drumPadArray.length; i++) {

      // ich geben jedem ersten Element (Also dem einzelnen Pad) im inneren Arrayindext die Klasse "singlePad" für mein Style
      (drumPadArray[i][0] as HTMLButtonElement).className = "singlePad";

      // dem selben Element gebe ich hier meine Farbe, ich benutze hier linear-Gradient, deshalb benötige ich zwei Farben ...
      // Das mache ich, indem ich dem eben genannten Element die Farben gebe, welche im selben inneren Arrayindex an stelle 2 und 3 steht
      (drumPadArray[i][0] as HTMLButtonElement).setAttribute("style", "background-image: linear-gradient(" + drumPadArray[i][2] + "," + drumPadArray[i][3] + ")");

      // Hier erzeuge ich auf jedes Pad einen Eventlistener in dem ich dann die normale PlaySample Funktion übergebe ...
      // dann setzte ich eine Bedingunge mit if(recording), sobald ich also am recorden bin, soll auch die zweite Funktion ausgeführt werden.
      (drumPadArray[i][0] as HTMLButtonElement).addEventListener("click", function (): void {
         (playSample((drumPadArray[i][1]) as HTMLAudioElement));
         if (recording) {
            recordSound(((drumPadArray[i][1]) as HTMLAudioElement));
         }
      });
      // Dann füge ich das entsprechnde Element noch meinem Wrapper im HTML hinzu, weches ich dort schon erstellt habe und eine ID vergeben habe.
      document.getElementById("padWrapper").appendChild((drumPadArray[i][0] as HTMLButtonElement));
   }

   // Das ist mein Array in dem die Beats definiert sind, welche ich bei Play abspielen soll.
   let beatArray: HTMLAudioElement[] = [(drumPadArray[4][1] as HTMLAudioElement), (drumPadArray[5][1] as HTMLAudioElement), (drumPadArray[6][1] as HTMLAudioElement)];

   // mein Play-Button, der ein Eventlistener bekommt, mit dem ich dann die entsprechende Töne innerhalb meines beatArray abspiele.
   // Hier setzte ich meinen Index direkt auf 0, damit der Beat immer von vorne abgespielt wird ...
   // und bentuzte meine setActiveBtn-Funktion, welche mir mein Icon von Play auf Pause wechselt.
   // mit dem interval erzeuge ich dann das Abspielen des Beats.
   playBtn.addEventListener("click", function (): void {
      index = 0;
      setActiveBtn(playBtn, stopBtn);
      interval = setInterval(() => {
         playBeats(beatArray);
      }, 600);
   });

   // mein Stop-Button, welche ein Eventlistener bekommt, mit dem ich das abspielen des Beats stoppe.
   // ich greife einfach auf meine Variable "interval" zu, schreibe sie in "clearInterval", dadurch wird der Interval gestoppt.
   // Außerdem setzte ich wie oben die Funktion "setActiveBtn" ein, damit mein Pausebutton wieder zu einem Playbutton wird.
   stopBtn.addEventListener("click", () => {
      setActiveBtn(stopBtn, playBtn);
      clearInterval(interval);
   });

   // mein "Lösch"-Button, mit dem ich den Beat leere. Auch hier setzte ich den Knopf anfangs wieder auf Play.
   // ich stoppe den Interval falls dieser noch läuft,
   // und lösche den Inhalt des beatArray mit: = []
   trashBtn.addEventListener("click", () => {
      setActiveBtn(stopBtn, playBtn);
      clearInterval(interval);
      beatArray = [];
   });

   // sobald ich den Record-Button drücke, wird meine Kontrollvariable auf "True" gesetzt ...
   // was bedeutet, dass in dem Eventlistener ganz oben, bei dem ich if(recording) als Bedingungen gesetzt habe ...
   // jetzt auch die zweite Funktion abgespielt wird, und ich das nächste Pad welches ich drücke, direkt in mein beatArray hinzufüge
   recordBtn.addEventListener("click", () => {
      recording = true;
   });

   // Dies ist die Funktion die ausgeführt wird, sobald recording auf True steht, und ich eines der Pads klicke.
   // Mit .push() füge ich einfach das gedrückte Element zu meinem bestehenden beatArray em Ende meines Arrays hinzu.
   // anschließend setzte ich recordung auf false, damit ich beim nächsten Klicken auf ein Pad nicht wieder diese Funktion auslöse.
   function recordSound(sound: HTMLAudioElement): void {
      beatArray.push(sound);
      recording = false;
   }

   // Alle weiteren Funktionen sollten euch bekannt sein, oder durch mein Video erklärt werden.
   function playSample(audio: HTMLAudioElement): void {
      audio.play();
   }

   function playBeats(array: HTMLAudioElement[]): void {
      if (index < array.length) {
         playSample(array[index]);
         index++;
      } else
         index = 0;
   }

   function setActiveBtn(firstElement: HTMLElement, secondElement: HTMLElement): void {
      firstElement.classList.add("is-not-active");
      secondElement.classList.remove("is-not-active");
   }
}