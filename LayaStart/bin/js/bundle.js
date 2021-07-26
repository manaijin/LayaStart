(function () {
    'use strict';

    var laya;
    (function (laya) {
        var Sprite = Laya.Sprite;
        var Stage = Laya.Stage;
        var Handler = Laya.Handler;
        var Browser = Laya.Browser;
        var WebGL = Laya.WebGL;
        class Sprite_SwitchTexture {
            constructor() {
                this.texture1 = "../../res/apes/monkey2.png";
                this.texture2 = "../../res/apes/monkey3.png";
                this.flag = false;
                Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
                Laya.stage.alignV = Stage.ALIGN_MIDDLE;
                Laya.stage.alignH = Stage.ALIGN_CENTER;
                Laya.stage.scaleMode = "showall";
                Laya.stage.bgColor = "#ffffff";
                Laya.loader.load([this.texture1, this.texture2], Handler.create(this, this.onAssetsLoaded));
            }
            onAssetsLoaded() {
                this.ape = new Sprite();
                Laya.stage.addChild(this.ape);
                this.ape.pivot(55, 72);
                this.ape.pos(100, 50);
                this.ape.size(100, 100);
                this.switchTexture();
                this.ape.on("click", this, this.switchTexture);
            }
            switchTexture() {
                var textureUrl = (this.flag = !this.flag) ? this.texture1 : this.texture2;
                var texture = Laya.loader.getRes(textureUrl);
                this.ape.graphics.clear();
                this.ape.graphics.drawTexture(texture, 0, 0, 100, 100);
                this.ape.size(100, 100);
            }
        }
        laya.Sprite_SwitchTexture = Sprite_SwitchTexture;
    })(laya || (laya = {}));
    new laya.Sprite_SwitchTexture();

}());
