class PoolTest {
    constructor() {
        this.createTime = 0;
        //初始化引擎
        Laya.init(1136, 640, Laya.WebGL);
        //等比缩放
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        //背景颜色
        Laya.stage.bgColor = "#232628";
        //帧循环
        Laya.timer.frameLoop(1, this, this.onFrame);
    }
    onFrame() {
        //如果创建对象时间为100帧间隔后
        if (this.createTime >= 100) {
            //每200帧间隔创建30个雪花
            for (var i = 0; i < 100; i++) {
                //img:Image=new Image(); //不使用对象池的写法
                //通过对象池创建图片，如对象池中无相应的对象，则根据Image类型执行new Image()创建
                var img = Laya.Pool.getItemByClass("img", Laya.Image);
                //通过锚点设置轴心点
                img.anchorX = img.anchorY = 0.5;
                //图片的资源
                img.skin = "res/snow0.png";
                //在舞台上方随机位置创建
                img.x = Math.random() * 1136;
                img.y = Math.random() * -150;
                //对象池中的图片被缩放了，需重新设置其缩放属性。
                //如果对象中还有其他属性被改变了，
                img.scaleX = img.scaleY = 1;
                //加载到舞台
                Laya.stage.addChild(img);
                //到100帧后创建完对象后时间归0
                this.createTime = 0;
            }
        }
        else {
            //更新创建时间
            this.createTime++;
        }
        //检测每个舞台中的图片对象，并进行位置更新。
        for (var j = 0; j < Laya.stage.numChildren; j++) {
            //获取舞台中的图片对象
            var img1 = Laya.stage.getChildAt(j);
            //位置更新
            img1.y++;
            //缩放更新
            img1.scaleX -= 0.001;
            img1.scaleY -= 0.001;
            //图片旋转
            img1.rotation++;
            //超出边界或缩放小于0
            if (img1.y > 640 + 20 || img1.scaleX <= 0) {
                //从舞台中移除
                Laya.stage.removeChild(img1);
                //img1.destroy(); //不使用对象池的编写方式,直接用destroy清空             
                //回收到对象池
                Laya.Pool.recover("img", img1);
            }
        }
    }
}
new PoolTest();
