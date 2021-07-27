var Scene = Laya.Scene;
var REG = Laya.ClassUtils.regClass;
export var ui;
(function (ui) {
    var test;
    (function (test) {
        class TestSceneUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("test/TestScene");
            }
        }
        test.TestSceneUI = TestSceneUI;
        REG("ui.test.TestSceneUI", TestSceneUI);
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
