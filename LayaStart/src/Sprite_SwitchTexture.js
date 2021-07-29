var laya;
(function (laya) {
    var Sprite = Laya.Sprite;
    var Stage = Laya.Stage;
    var Browser = Laya.Browser;
    var WebGL = Laya.WebGL;
    class Sprite_SwitchTexture {
        constructor() {
            this.texture1 = "../../res/apes/monkey1.png";
            this.texture2 = "../../res/apes/monkey2.png";
            this.texture3 = "../../res/apes/monkey3.png";
            this.flag = 0;
            // 不支持WebGL时自动切换至Canvas
            Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#ffffff";
            //Laya.loader.load([this.texture1, this.texture2, this.texture3], Handler.create(this, this.onAssetsLoaded));
            this.createMask();
        }
        onAssetsLoaded() {
            this.sp = new Sprite();
            Laya.stage.addChild(this.sp);
            this.sp.pivot(0, 0);
            this.sp.pos(0, 0);
            this.sp.size(100, 100);
            // 显示默认纹理
            this.switchTexture();
            this.sp.on("click", this, this.switchTexture);
            this.createMask();
        }
        switchTexture() {
            var textureUrl;
            switch (this.flag) {
                case 0:
                    textureUrl = this.texture1;
                    break;
                case 1:
                    textureUrl = this.texture2;
                    break;
                case 2:
                    textureUrl = this.texture3;
                    break;
                default:
                    textureUrl = this.texture1;
                    break;
            }
            var texture = Laya.loader.getRes(textureUrl);
            // // 方法1
            // this.sp.graphics.clear();
            // this.sp.loadImage(textureUrl);
            // 方法2
            this.sp.graphics.clear();
            this.sp.graphics.drawTexture(texture, 0, 0, 100, 100);
            // 设置交互区域
            this.sp.size(100, 100);
            this.flag++;
            this.flag %= 3;
        }
        createMask() {
            //创建遮罩对象
            this.mask = new Laya.Sprite();
            //画一个圆形的遮罩区域
            this.mask.graphics.drawCircle(50, 50, 50, "#ff0000");
            //圆形所在的位置坐标
            this.mask.pos(0, 0);
            //实现img显示对象的遮罩效果
            this.sp.mask = this.mask;
        }
        graphicsImg() {
            // this.img = new Laya.Sprite();
            // Laya.stage.addChild(this.img);
            // this.img.pivot(0, 0);
            // this.img.pos(0, 0);
            // this.img.size(100, 100);
            // //获取图片资源，绘制到画布
            // this.img.graphics.drawTexture(Laya.loader.getRes(this.texture1), 150, 50, 100, 100);
            //创建遮罩对象
            this.mask = new Laya.Sprite();
            //画一个圆形的遮罩区域
            this.mask.graphics.drawCircle(80, 80, 50, "#ff0000");
            //圆形所在的位置坐标
            this.mask.pos(120, 50);
            //实现img显示对象的遮罩效果
            this.sp.mask = this.mask;
        }
    }
    laya.Sprite_SwitchTexture = Sprite_SwitchTexture;
})(laya || (laya = {}));
new laya.Sprite_SwitchTexture();
