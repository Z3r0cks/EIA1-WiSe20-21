var L07;
(function (L07) {
    var playBtn = document.getElementById("playBtn");
    var stopBtn = document.getElementById("stopBtn");
    var recordBtn = document.getElementById("recordBtn");
    var trashBtn = document.getElementById("trashBtn");
    var index = 0;
    var ifRecording = false;
    var interval;
    var drumPadArray = [
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
    var _loop_1 = function (i) {
        drumPadArray[i][0].className = "singlePad";
        drumPadArray[i][0].setAttribute("style", "background-image: linear-gradient(" + drumPadArray[i][2] + "," + drumPadArray[i][3] + ")");
        drumPadArray[i][0].addEventListener("click", function () {
            if (!ifRecording) {
                (playSample((drumPadArray[i][1])));
            }
        });
        document.getElementById("padWrapper").appendChild(drumPadArray[i][0]);
    };
    for (var i = 0; i < drumPadArray.length; i++) {
        _loop_1(i);
    }
    var beatArray = [drumPadArray[4][1], drumPadArray[5][1], drumPadArray[6][1]];
    playBtn.addEventListener("click", function () {
        setActiveBtn(playBtn, stopBtn);
        clearInterval(interval);
        interval = setInterval(function () {
            playBeats(beatArray);
        }, 600);
    });
    stopBtn.addEventListener("click", function () {
        setActiveBtn(stopBtn, playBtn);
        clearInterval(interval);
    });
    trashBtn.addEventListener("click", function () {
        setActiveBtn(stopBtn, playBtn);
        clearInterval(interval);
        beatArray = [];
    });
    recordBtn.addEventListener("click", function () {
        clearInterval(interval);
        ifRecording = true;
        var _loop_2 = function (i) {
            drumPadArray[i][0].addEventListener("click", function () {
                if (ifRecording == true) {
                    beatArray.push(drumPadArray[i][1]);
                    console.log(beatArray);
                    interval = setInterval(function () {
                        playBeats(beatArray);
                    }, 600);
                    setActiveBtn(playBtn, stopBtn);
                    ifRecording = false;
                }
            });
        };
        for (var i = 0; i < drumPadArray.length; i++) {
            _loop_2(i);
        }
    });
    function playSample(audio) {
        audio.play();
    }
    function playBeats(array) {
        if (index < array.length) {
            playSample(array[index]);
            index++;
        }
        else {
            index = 0;
        }
    }
    function setActiveBtn(firstElement, secondElement) {
        firstElement.classList.add("is-not-active");
        secondElement.classList.remove("is-not-active");
    }
})(L07 || (L07 = {}));
//# sourceMappingURL=main.js.map