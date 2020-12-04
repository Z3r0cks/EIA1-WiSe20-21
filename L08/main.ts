namespace L07 {
   const playBtn: HTMLImageElement = document.createElement('img');
   playBtn.src = './images/play-button.png';
   playBtn.className = "playBtn";

   const stopBtn: HTMLImageElement = document.createElement('img');
   stopBtn.src = './images/play-button.png';
   stopBtn.className = "playBtn";

   const drumPadArray: (HTMLButtonElement | HTMLAudioElement | string)[][] = [
      // innerer Index        0                                1            2        3                     //außerer Index
      [document.createElement("button"), new Audio('./assets/A.mp3'), "#3D93F6", "#1F63D1"],             // 0
      [document.createElement("button"), new Audio('./assets/C.mp3'), "#3D93F6", "#1F63D1"],             // 1
      [document.createElement("button"), new Audio('./assets/F.mp3'), "#3D93F6", "#1F63D1"],             // 2
      [document.createElement("button"), new Audio('./assets/G.mp3'), "#FF5BB0", "#F0037E"],             // 3
      [document.createElement("button"), new Audio('./assets/hihat.mp3'), "#FF5BB0", "#F0037E"],         // 4
      [document.createElement("button"), new Audio('./assets/kick.mp3'), "#FF5BB0", "#F0037E"],          // 5
      [document.createElement("button"), new Audio('./assets/snare.mp3'), "#FF5BB0", "#F0037E"],         // 6
      [document.createElement("button"), new Audio('./assets/laugh-1.mp3'), "#F6A23D", "#C66601"],       // 7
      [document.createElement("button"), new Audio('./assets/laugh-2.mp3'), "#F6A23D", "#C66601"]        // 8 
   ]
   for (let i = 0; i < drumPadArray.length; i++) {
      (drumPadArray[i][0] as HTMLButtonElement).className = "singlePad";
      (drumPadArray[i][0] as HTMLButtonElement).setAttribute('style', 'background-image: linear-gradient(' + drumPadArray[i][2] + ',' + drumPadArray[i][3] + ')');
      (drumPadArray[i][0] as HTMLButtonElement).addEventListener('click', () => playSample((drumPadArray[i][1]) as HTMLAudioElement))
      document.getElementById("app").appendChild((drumPadArray[i][0] as HTMLButtonElement));
   }

   document.getElementById("app").appendChild(playBtn);
   document.getElementById("app").appendChild(stopBtn);

   let test;

   playBtn.addEventListener('click', () => {
      test = setInterval(() => {
         setTimeout(() => {
            playSample((drumPadArray[4][1] as HTMLAudioElement))
         }, 200);
         setTimeout(() => {
            playSample((drumPadArray[5][1] as HTMLAudioElement))
         }, 400);
         setTimeout(() => {
            playSample((drumPadArray[6][1] as HTMLAudioElement))
         }, 600);
      }, 800)
   })

   stopBtn.addEventListener('click', () => {
      console.log("test");
      clearInterval(test)
   })

   function playSample(audio: HTMLAudioElement) {
      audio.play();
   }
}