var L07;
(function (L07) {
    var playBtn = document.createElement('img');
    playBtn.src = './images/play-button.png';
    playBtn.className = "playBtn";
    var stopBtn = document.createElement('img');
    stopBtn.src = './images/play-button.png';
    stopBtn.className = "playBtn";
    var drumPadArray = [
        // innerer Index        0                                1            2        3                     //außerer Index
        [document.createElement("button"), new Audio('./assets/A.mp3'), "#3D93F6", "#1F63D1"],
        [document.createElement("button"), new Audio('./assets/C.mp3'), "#3D93F6", "#1F63D1"],
        [document.createElement("button"), new Audio('./assets/F.mp3'), "#3D93F6", "#1F63D1"],
        [document.createElement("button"), new Audio('./assets/G.mp3'), "#FF5BB0", "#F0037E"],
        [document.createElement("button"), new Audio('./assets/hihat.mp3'), "#FF5BB0", "#F0037E"],
        [document.createElement("button"), new Audio('./assets/kick.mp3'), "#FF5BB0", "#F0037E"],
        [document.createElement("button"), new Audio('./assets/snare.mp3'), "#FF5BB0", "#F0037E"],
        [document.createElement("button"), new Audio('./assets/laugh-1.mp3'), "#F6A23D", "#C66601"],
        [document.createElement("button"), new Audio('./assets/laugh-2.mp3'), "#F6A23D", "#C66601"] // 8 
    ];
    var _loop_1 = function (i) {
        drumPadArray[i][0].className = "singlePad";
        drumPadArray[i][0].setAttribute('style', 'background-image: linear-gradient(' + drumPadArray[i][2] + ',' + drumPadArray[i][3] + ')');
        drumPadArray[i][0].addEventListener('click', function () { return playSample((drumPadArray[i][1])); });
        document.getElementById("app").appendChild(drumPadArray[i][0]);
    };
    for (var i = 0; i < drumPadArray.length; i++) {
        _loop_1(i);
    }
    document.getElementById("app").appendChild(playBtn);
    document.getElementById("app").appendChild(stopBtn);
    var test;
    playBtn.addEventListener('click', function () {
        test = setInterval(function () {
            setTimeout(function () {
                playSample(drumPadArray[4][1]);
            }, 200);
            setTimeout(function () {
                playSample(drumPadArray[5][1]);
            }, 400);
            setTimeout(function () {
                playSample(drumPadArray[6][1]);
            }, 600);
        }, 800);
    });
    stopBtn.addEventListener('click', function () {
        console.log("test");
        clearInterval(test);
    });
    function playSample(audio) {
        audio.play();
    }
})(L07 || (L07 = {}));
//# sourceMappingURL=main.js.map