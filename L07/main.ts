namespace L07 {
   const playBtn: HTMLImageElement = document.createElement('img');
   playBtn.src = './images/play-button.png';
   playBtn.className = "playBtn";

   const drumPadArray: (HTMLButtonElement | HTMLAudioElement | string)[][] = [
      // innerer Index        0                                1                   2            //außerer Index
               [document.createElement("button"), new Audio('./assets/A.mp3'), "1f63d1"],             // 0
               [document.createElement("button"), new Audio('./assets/C.mp3'), "1f63d1"],             // 1
               [document.createElement("button"), new Audio('./assets/F.mp3'), "1f63d1"],             // 2
               [document.createElement("button"), new Audio('./assets/G.mp3'), "F52692"],             // 3
               [document.createElement("button"), new Audio('./assets/hihat.mp3'), "F52692"],         // 4
               [document.createElement("button"), new Audio('./assets/kick.mp3'), "F52692"],          // 5
               [document.createElement("button"), new Audio('./assets/snare.mp3'), "F52692"],         // 6
               [document.createElement("button"), new Audio('./assets/laugh-1.mp3'), "CD700A"],       // 7
               [document.createElement("button"), new Audio('./assets/laugh-2.mp3'), "CD700A"]        // 8 
   ]

   for (let i = 0; i < drumPadArray.length; i++) {
      (drumPadArray[i][0] as HTMLButtonElement).className = "singlePad";
      (drumPadArray[i][0] as HTMLButtonElement).setAttribute('style', 'background-color: #' + drumPadArray[i][2]);
      (drumPadArray[i][0] as HTMLButtonElement).addEventListener('click', () => playSample((drumPadArray[i][1]) as HTMLAudioElement))
      document.getElementById("app").appendChild((drumPadArray[i][0] as HTMLButtonElement));
   }

   document.getElementById("app").appendChild(playBtn);

   playBtn.addEventListener('click', () => {
      setInterval(() => {
         playSample((drumPadArray[5][1] as HTMLAudioElement))
         setTimeout(() => {
            playSample((drumPadArray[6][1] as HTMLAudioElement))
         }, 400);
         setTimeout(() => {
            playSample((drumPadArray[4][1] as HTMLAudioElement))
         }, 800);
      }, 1200)
   })

   function playSample(audio: HTMLAudioElement) {
      audio.play();
   }

}