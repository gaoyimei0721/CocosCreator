// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //接收者
        //事件类型，是你自定义的字符串
        //回调函数：function(e) {}  e --> Event.EventCustom的实例
        // this.node.on("pkg_event",function(e){
        //     console.log("pkg_event", e.detail);
        // }, this);

        
    },

    start:function() {
        //发送者（派发者），只能传递给自己,不会向上传递
        this.node.emit("pkg_event",{blake:"huang"});

        //派送者，不只是发送给自己，发给我们这个体系
        //true/false, true向上传递，false不向上传递
        var e = new cc.Event.EventCustom('pkg_event',true);
        e.detail = {blake:"huang"};
        this.node.dispatchEvent(e);
    },

    // update (dt) {},
});
