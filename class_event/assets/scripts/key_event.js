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

    //（1）向引擎注册一个事件类型的回调函数
    //（2）按键事件的类型：cc.SystemEvent.EventType.KEY_DOWN,cc.SystemEvent.EventType.KEY_UP;
    //（3）配置的回调函数：function(event){} targrt,目标
    //（4）每一个按键，都会对应一个按键码，space,A,B,C, event对象 event.keyCode
    onLoad () {
        //按键被按下
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.on_key_down, this);
        
        //按键弹起
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.on_key_up, this);
    },

    on_key_down: function(event){
        switch(event.keyCode){
            case cc.KEY.space:
                console.log("space key down!");
            break;
        }

    },

    on_key_up: function(event){
        switch(event.keyCode){
            case cc.KEY.space:
                console.log("space key up!");
            break;
        }
    },

    start () {

    },

    // update (dt) {},
});
