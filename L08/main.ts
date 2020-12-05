namespace L07 {
   const playBtn: HTMLElement = document.getElementById("playBtn");
   const stopBtn: HTMLElement = document.getElementById("stopBtn");
   const recordBtn: HTMLElement = document.getElementById("recordBtn");
   const trashBtn: HTMLElement = document.getElementById("trashBtn");
   let index: number = 0;
   let ifRecording: boolean = false;

   let interval: number;
   const drumPadArray: (HTMLButtonElement | HTMLAudioElement | string)[][] = [
      [document.createElement("button"), new Audio("./assets/A.mp3"), "#3D93F6", "#1F63D1"],
      [document.createElement("button"), new Audio("./assets/C.mp3"), "#3D93F6", "#1F63D1"],
      [document.createElement("button"), new Audio("./assets/F.mp3"), "#3D93F6", "#1F63D1"],
      [document.createElement("button"), new Audio("./assets/G.mp3"), "#FF5BB0", "#F0037E"],
      [document.createElement("button"), new Audio("./assets/hihat.mp3"), "#FF5BB0", "#F0037E"],
      [document.createElement("button"), new Audio("./assets/kick.mp3"), "#FF5BB0", "#F0037E"],
      [document.createElement("button"), new Audio("./assets/snare.mp3"), "#FF5BB0", "#F0037E"],
      [document.createElement("button"), new Audio("./assets/laugh-1.mp3"), "#F6A23D", "#C66601"],
      [document.createElement("button"), new Audio("./assets/laugh-2.mp3"), "#F6A23D", "#C66601"]
   ];

   for (let i: number = 0; i < drumPadArray.length; i++) {
      (drumPadArray[i][0] as HTMLButtonElement).className = "singlePad";
      (drumPadArray[i][0] as HTMLButtonElement).setAttribute("style", "background-image: linear-gradient(" + drumPadArray[i][2] + "," + drumPadArray[i][3] + ")");
      (drumPadArray[i][0] as HTMLButtonElement).addEventListener("click", () => {
         if (!ifRecording) {
            (playSample((drumPadArray[i][1]) as HTMLAudioElement));
         }
      });
      document.getElementById("padWrapper").appendChild((drumPadArray[i][0] as HTMLButtonElement));
   }

   let beatArray: HTMLAudioElement[] = [(drumPadArray[4][1] as HTMLAudioElement), (drumPadArray[5][1] as HTMLAudioElement), (drumPadArray[6][1] as HTMLAudioElement)];

   playBtn.addEventListener("click", () => {
      setActiveBtn(playBtn, stopBtn);
      clearInterval(interval);
      interval = setInterval(() => {
         playBeats(beatArray);
      }, 600);
   });

   stopBtn.addEventListener("click", () => {
      setActiveBtn(stopBtn, playBtn);
      clearInterval(interval);
   });

   trashBtn.addEventListener("click", () => {
      setActiveBtn(stopBtn, playBtn);
      clearInterval(interval);
      beatArray = [];
   });

   recordBtn.addEventListener("click", () => {
      clearInterval(interval);
      ifRecording = true;
      for (let i: number = 0; i < drumPadArray.length; i++) {
         (drumPadArray[i][0] as HTMLButtonElement).addEventListener("click", () => {
            if (ifRecording == true) {
               beatArray.push(drumPadArray[i][1] as HTMLAudioElement);
               console.log(beatArray);
               interval = setInterval(() => {
                  playBeats(beatArray);
               }, 600);
               setActiveBtn(playBtn, stopBtn);
               ifRecording = false;
            }
         });
      }
   });

   function playSample(audio: HTMLAudioElement): void {
      audio.play();
   }

   function playBeats(array: HTMLAudioElement[]): void {
      if (index < array.length) {
         playSample(array[index]);
         index++;
      } else {
         index = 0;
      }
   }

   function setActiveBtn(firstElement: HTMLElement, secondElement: HTMLElement): void {
      firstElement.classList.add("is-not-active");
      secondElement.classList.remove("is-not-active");
   }
}