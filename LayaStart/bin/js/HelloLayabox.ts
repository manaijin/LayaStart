module laya {
    import Stage = Laya.Stage;
    import Text = Laya.Text;
    import Browser = Laya.Browser;
    import WebGL = Laya.WebGL;
    export class HelloLayabox {
        constructor() {
            // 不支持WebGL时自动切换至Canvas
            Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#232628";
            var txt: Text = new Text();
            //给文本的text属性赋值
            txt.text = "hello_world";
            txt.color = "#ffffff";
            Laya.stage.addChild(txt);
        }
    }
}
new laya.HelloLayabox();