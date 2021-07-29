var laya;
(function (laya) {
    var Sprite = Laya.Sprite;
    var WebGL = Laya.WebGL;
    class Sprite_DrawShapes {
        constructor() {
            Laya.init(500, 300, WebGL);
            //this.drawLine();
            //this.drawLines();
            //this.drawMultShape();
            this.drawRect();
        }
        drawLine() {
            this.sp = new Sprite();
            Laya.stage.addChild(this.sp);
            //画直线
            this.sp.graphics.drawLine(10, 10, 100, 10, "#ff0000", 3);
            this.sp.graphics.drawLine(100, 10, 100, 100, "#ff0000", 3);
            this.sp.graphics.drawLine(100, 100, 10, 10, "#ff0000", 3);
        }
        drawLines() {
            this.sp = new Sprite();
            Laya.stage.addChild(this.sp);
            //画折线
            this.sp.graphics.drawLines(10, 10, [0, 0, 100, 0, 100, 100, 0, 0], "#ff0000", 3);
        }
        drawMultShape() {
            var canvas = new Sprite();
            Laya.stage.addChild(canvas);
            var path = [];
            path.push(0, -130); //五角星A点坐标
            path.push(33, -33); //五角星B点坐标
            path.push(137, -30); //五角星C点坐标
            path.push(55, 32); //五角星D点坐标
            path.push(85, 130); //五角星E点坐标
            path.push(0, 73); //五角星F点坐标
            path.push(-85, 130); //五角星G点坐标
            path.push(-55, 32); //五角星H点坐标
            path.push(-137, -30); //五角星I点坐标
            path.push(-33, -33); //五角星J点坐标
            canvas.graphics.drawPoly(Laya.stage.width / 2, Laya.stage.height / 2, path, "#FF7F50");
        }
        drawRect() {
            this.sp = new Sprite();
            Laya.stage.addChild(this.sp);
            //画矩形
            this.sp.graphics.drawRect(20, 20, 100, 50, "#ffff00");
        }
    }
    laya.Sprite_DrawShapes = Sprite_DrawShapes;
})(laya || (laya = {}));
new laya.Sprite_DrawShapes();
