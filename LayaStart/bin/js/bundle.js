(function () {
    'use strict';

    class PoolTest {
        constructor() {
            this.createTime = 0;
            Laya.init(1136, 640, Laya.WebGL);
            Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            Laya.stage.bgColor = "#232628";
            Laya.timer.frameLoop(1, this, this.onFrame);
        }
        onFrame() {
            if (this.createTime >= 100) {
                for (var i = 0; i < 100; i++) {
                    var img = Laya.Pool.getItemByClass("img", Laya.Image);
                    img.anchorX = img.anchorY = 0.5;
                    img.skin = "res/snow0.png";
                    img.x = Math.random() * 1136;
                    img.y = Math.random() * -150;
                    img.scaleX = img.scaleY = 1;
                    Laya.stage.addChild(img);
                    this.createTime = 0;
                }
            }
            else {
                this.createTime++;
            }
            for (var j = 0; j < Laya.stage.numChildren; j++) {
                var img1 = Laya.stage.getChildAt(j);
                img1.y++;
                img1.scaleX -= 0.001;
                img1.scaleY -= 0.001;
                img1.rotation++;
                if (img1.y > 640 + 20 || img1.scaleX <= 0) {
                    Laya.stage.removeChild(img1);
                    Laya.Pool.recover("img", img1);
                }
            }
        }
    }
    new PoolTest();

}());
