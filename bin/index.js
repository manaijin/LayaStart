/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/laya.core.js")
loadLib("libs/laya.ui.js")
loadLib("libs/laya.physics.js")
loadLib("libs/laya.html.js")
//-----libs-end-------
// 尽量不要放在上面注释中间，因为会被ide'项目设置-类库设置'所覆盖
loadLib("libs/fairygui/rawinflate.min.js");// 如果勾选了不压缩，这个库不需要
loadLib("libs/fairygui/fairygui.js");// 只依赖laya.core,laya.html两个模块
loadLib("js/bundle.js");
