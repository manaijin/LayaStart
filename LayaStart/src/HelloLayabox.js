var laya;
(function (laya) {
    var Stage = Laya.Stage;
    var Text = Laya.Text;
    var Input = Laya.TextInput;
    var Event = Laya.Event;
    var Browser = Laya.Browser;
    var WebGL = Laya.WebGL;
    class HelloLayabox {
        constructor() {
            this.prevX = 0;
            this.prevY = 0;
            // 不支持WebGL时自动切换至Canvas
            Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
            Laya.stage.bgColor = "#232628";
            this.createText();
            this.createSingleInput();
            this.createMultiInput();
        }
        createText() {
            this.txt = new Text();
            this.txt.overflow = Text.SCROLL;
            this.txt.text =
                "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
                    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
                    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
                    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
                    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
                    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
            this.txt.size(200, 100);
            this.txt.x = 0;
            this.txt.y = 0;
            this.txt.borderColor = "#FFFF00";
            this.txt.fontSize = 20;
            this.txt.color = "#ffffff";
            Laya.stage.addChild(this.txt);
            this.txt.on(Event.MOUSE_DOWN, this, this.startScrollText);
        }
        /* 开始滚动文本 */
        startScrollText(e) {
            this.prevX = this.txt.mouseX;
            this.prevY = this.txt.mouseY;
            Laya.stage.on(Event.MOUSE_MOVE, this, this.scrollText);
            Laya.stage.on(Event.MOUSE_UP, this, this.finishScrollText);
        }
        /* 停止滚动文本 */
        finishScrollText(e) {
            Laya.stage.off(Event.MOUSE_MOVE, this, this.scrollText);
            Laya.stage.off(Event.MOUSE_UP, this, this.finishScrollText);
        }
        /* 鼠标滚动文本 */
        scrollText(e) {
            var nowX = this.txt.mouseX;
            var nowY = this.txt.mouseY;
            this.txt.scrollX += this.prevX - nowX;
            this.txt.scrollY += this.prevY - nowY;
            this.prevX = nowX;
            this.prevY = nowY;
        }
        createSingleInput() {
            var inputText = new Input();
            inputText.size(350, 100);
            inputText.x = Laya.stage.width - inputText.width >> 2;
            inputText.y = (Laya.stage.height - inputText.height >> 1) - 100;
            // 移动端输入提示符
            inputText.prompt = "Type some word...";
            // 设置字体样式
            inputText.bold = true;
            inputText.bgColor = "#666666";
            inputText.color = "#ffffff";
            inputText.fontSize = 20;
            Laya.stage.addChild(inputText);
        }
        createMultiInput() {
            var inputText = new Input();
            inputText.size(350, 100);
            inputText.x = Laya.stage.width - inputText.width >> 2;
            inputText.y = (Laya.stage.height - inputText.height >> 1) + 100;
            // 移动端输入提示符
            inputText.prompt = "Type some word...";
            // 多行输入
            inputText.multiline = true;
            inputText.wordWrap = false;
            // 设置字体样式
            inputText.padding = "2,2,2,2";
            inputText.bgColor = "#666666";
            inputText.color = "#ffffff";
            inputText.fontSize = 20;
            Laya.stage.addChild(inputText);
        }
    }
    laya.HelloLayabox = HelloLayabox;
})(laya || (laya = {}));
new laya.HelloLayabox();
