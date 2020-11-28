var L07;
(function (L07) {
    var wrapperClass = document.createElement("div");
    var playBtn = document.createElement('img');
    wrapperClass.className = "drumPad";
    playBtn.src = './images/play-button.png';
    playBtn.className = "playBtn";
    document.body.appendChild(wrapperClass);
    var drumPadArray = [
        [document.createElement("button"), new Audio('./assets/A.mp3'), "1f63d1"],
        [document.createElement("button"), new Audio('./assets/C.mp3'), "1f63d1"],
        [document.createElement("button"), new Audio('./assets/F.mp3'), "1f63d1"],
        [document.createElement("button"), new Audio('./assets/G.mp3'), "F52692"],
        [document.createElement("button"), new Audio('./assets/hihat.mp3'), "F52692"],
        [document.createElement("button"), new Audio('./assets/kick.mp3'), "F52692"],
        [document.createElement("button"), new Audio('./assets/snare.mp3'), "F52692"],
        [document.createElement("button"), new Audio('./assets/laugh-1.mp3'), "CD700A"],
        [document.createElement("button"), new Audio('./assets/laugh-2.mp3'), "CD700A"]
    ];
    var _loop_1 = function (i) {
        drumPadArray[i][0].className = "singlePad";
        drumPadArray[i][0].setAttribute('style', 'background-color: #' + drumPadArray[i][2]);
        drumPadArray[i][0].addEventListener('click', function () { return playSample((drumPadArray[i][1])); });
        wrapperClass.appendChild(drumPadArray[i][0]);
    };
    for (var i = 0; i < drumPadArray.length; i++) {
        _loop_1(i);
    }
    wrapperClass.appendChild(playBtn);
    playBtn.addEventListener('click', function () {
        setInterval(function () {
            playSample(drumPadArray[5][1]);
            setTimeout(function () {
                playSample(drumPadArray[6][1]);
            }, 300);
            setTimeout(function () {
                playSample(drumPadArray[4][1]);
            }, 600);
        }, 900);
    });
    function playSample(audio) {
        audio.play();
    }
})(L07 || (L07 = {}));
//# sourceMappingURL=main.js.map