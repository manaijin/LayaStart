class TweenDemo {
    constructor() {
        //初始化舞台
        Laya.init(1920, 1080, Laya.WebGL);
        //背景颜色
        Laya.stage.bgColor = "#1b2436";
        //创建缓动文本
        this.createTween();
        console.log(this.toHexString(20));
    }
    //创建缓动文本
    createTween() {
        //"LayaBox字符串总宽度"
        var w = 800;
        //文本创建的起始位置(>>在此使用右移运算符，相当于/2 用>>效率更高)
        var offsetX = Laya.stage.width - w >> 2;
        //显示的字符串
        var demoString = "L";
        var letterText;
        var start_time = Laya.systemTimer.currTimer;
        //根据"LayaBox"字符串长度创建单个字符，并对每个单独字符使用缓动动画
        for (var i = 0, len = demoString.length; i < len; ++i) {
            //从"LayaBox"字符串中逐个提出单个字符创建文本
            letterText = this.createLetter(demoString.charAt(i));
            letterText.x = w / len * i + offsetX;
            //文本的初始y属性
            letterText.y = 300;
            //对象letterText属性y从缓动目标的100向初始的y属性300运动，每次执行缓动效果需要3000毫秒，缓类型采用elasticOut函数方式，延迟间隔i*100毫秒执行。
            let delay = i * 1000;
            Laya.Tween.from(letterText, { y: 100, update: new Laya.Handler(this, this.updateColor, [letterText, delay, start_time]) }, 3000, Laya.Ease.elasticOut, null, delay);
        }
    }
    //创建单个字符文本，并加载到舞台
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
        //将文本字体改变成红色
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
