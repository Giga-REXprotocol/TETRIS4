function ochibaMaker(n) {
    var ochiba = document.createElement("div");
    ochiba.className = "ochiba";
    ochiba.innerHTML = "🍂";
    for(var i = 0; i < n; i++) {
        ochibaSet(ochiba);
    }
}

function ochibaSet(clone) {
    var ochibaClone = clone.cloneNode(true);
    var ochibaStyle = ochibaClone.style;
    ochibaStyle.left = 100 * Math.random() + "%";
    ochibaStyle.animationDelay = 8 * Math.random() + "s";
    ochibaStyle.fontSize = ~~(20 * Math.random() + 10) + "px";

    //秋っぽい色にランダムで OSなどの環境により適用されない事があります
    switch(~~(3 * Math.random())) {
        case 0: var ochibaColor = "#91002C"; break;
        case 1: var ochibaColor = "#E8380D"; break;
        case 2: var ochibaColor = "#F39800"; break;
    }
    ochibaStyle.color = ochibaColor;

    document.body.appendChild(ochibaClone);
    ochibaClone.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
        var ochiba = document.createElement("div");
        ochiba.className = "ochiba";
        ochiba.innerHTML = "🍂;";
        ochibaSet(ochiba);
    }, false)
}

//使用例 落ち葉を50枚出します
ochibaMaker(100);