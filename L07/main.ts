namespace L07 {
   const wrapperClass: HTMLDivElement = document.createElement("div")
   const playBtn: HTMLImageElement = document.createElement('img');
   wrapperClass.className = "drumPad";
   playBtn.src = './images/play-button.png';
   playBtn.className = "playBtn";
   document.body.appendChild(wrapperClass);

   const drumPadArray: (HTMLButtonElement | HTMLAudioElement | string)[][] = [
      [document.createElement("button"), new Audio('./assets/A.mp3'), "1f63d1"],
      [document.createElement("button"), new Audio('./assets/C.mp3'), "1f63d1"],
      [document.createElement("button"), new Audio('./assets/F.mp3'), "1f63d1"],
      [document.createElement("button"), new Audio('./assets/G.mp3'), "F52692"],
      [document.createElement("button"), new Audio('./assets/hihat.mp3'), "F52692"],
      [document.createElement("button"), new Audio('./assets/kick.mp3'), "F52692"],
      [document.createElement("button"), new Audio('./assets/snare.mp3'), "F52692"],
      [document.createElement("button"), new Audio('./assets/laugh-1.mp3'), "CD700A"],
      [document.createElement("button"), new Audio('./assets/laugh-2.mp3'), "CD700A"]
   ]

   for (let i = 0; i < drumPadArray.length; i++) {
      (drumPadArray[i][0] as HTMLButtonElement).className = "singlePad";
      (drumPadArray[i][0] as HTMLButtonElement).setAttribute('style', 'background-color: #' + drumPadArray[i][2]);
      (drumPadArray[i][0] as HTMLButtonElement).addEventListener('click', () => playSample((drumPadArray[i][1]) as HTMLAudioElement))
      wrapperClass.appendChild((drumPadArray[i][0] as HTMLButtonElement));
   }
   wrapperClass.appendChild(playBtn);

   playBtn.addEventListener('click', () => {
      setInterval(() => {
         playSample((drumPadArray[5][1] as HTMLAudioElement))
         setTimeout(() => {
            playSample((drumPadArray[6][1] as HTMLAudioElement))
         }, 300);
         setTimeout(() => {
            playSample((drumPadArray[4][1] as HTMLAudioElement))
         }, 600);

      }, 900)
   })

   function playSample(audio: HTMLAudioElement) {
      audio.play();
   }
}