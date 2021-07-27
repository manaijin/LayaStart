(function () {
    'use strict';

    class TweenDemo {
        constructor() {
            Laya.init(1920, 1080, Laya.WebGL);
            Laya.stage.bgColor = "#1b2436";
            this.createTween();
            console.log(this.toHexString(20));
        }
        createTween() {
            var w = 800;
            var offsetX = Laya.stage.width - w >> 2;
            var demoString = "L";
            var letterText;
            var start_time = Laya.systemTimer.currTimer;
            for (var i = 0, len = demoString.length; i < len; ++i) {
                letterText = this.createLetter(demoString.charAt(i));
                letterText.x = w / len * i + offsetX;
                letterText.y = 300;
                let delay = i * 1000;
                Laya.Tween.from(letterText, { y: 100, update: new Laya.Handler(this, this.updateColor, [letterText, delay, start_time]) }, 3000, Laya.Ease.elasticOut, null, delay);
            }
        }
        createLetter(char) {
            var letter = new Laya.Text();
            letter.text = char;
            letter.color = "#ffffff";
            letter.font = "Impact";
            letter.fontSize = 180;
            Laya.stage.addChild(letter);
            return letter;
        }
        updateColor(txt, delay, start_time) {
        }
        changeColor(txt) {
            txt.color = "#ff0000";
            txt.color;
        }
        toHexString(n) {
            if (n < 0) {
                n = 0xFFFFFFFF + n + 1;
            }
            return "0x" + ("00000000" + n.toString(16).toUpperCase()).substr(-8);
        }
        stringToHex(str) {
            let val = "";
            for (let i = 0; i < str.length; i++) {
                if (val == "")
                    val = str.charCodeAt(i).toString(16);
                else
                    val += "," + str.charCodeAt(i).toString(16);
            }
            return val;
        }
    }
    new TweenDemo();

}());
