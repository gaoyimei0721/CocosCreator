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

    /*
     t:  -->  cc.Touch
     触摸的位置：屏幕坐标，左下角(0,0); getLocation();
    */
    on_touch_move: function(t){
        console.log("cc.Node.EventType.TOUCH_MOVE called");
        //位置
        console.log(t.getLocation());
        var w_pos = t.getLocation(); //cc.Vec2(x,y)
        console.log(w_pos, w_pos.x, w_pos.y);
    
        //距离上一次触摸变化了多少
        var delta = t.getDelta();//x,y各变化了多少cc.Vec2(x,y)
        this.node.x += delta.x;
        this.node.y += delta.y;
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //（1）监听对应的触摸事件：向引擎底层注册一个回调函数，当有触摸事件发生时调这个回调函数
        // cc.Node.EventType.TOUCH_START：触摸开始
        // cc.Node.EventType.TOUCH_MOVE：触摸移动
        // cc.Node.EventType.TOUCH_END：触摸结束，物体内部结束 
        // cc.Node.EventType.TOUCH_CANCEL：触摸结束，物体外部结束
        /*
        （2）回调函数的格式  function(t) --> cc.Touch对象触摸事件对象{触摸信息，事件信息}
         call  -->  this,this指向谁就是这个target,你要绑哪个对象作为你回调函数的this，可以为空
         function() {}.bind(this);   //显示绑定      */
        this.node.on(cc.Node.EventType.TOUCH_START,function(t){
            console.log("cc.Node.EventType.TOUCH_START called")
            //this:函数里面的this
            //停止事件传递
            t.stopPropagationImmediate();
        },this);

        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.on_touch_move,this);
        //关闭事件
        // this.node.off(cc.Node.EventType.TOUCH_MOVE,this.on_touch_move,this);
        
        this.node.on(cc.Node.EventType.TOUCH_END,function(t){
            console.log("cc.Node.EventType.TOUCH_END called")
        },this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(t){
            console.log("cc.Node.EventType.TOUCH_CANCEL called")
        },this);

        //移除target上所有的注册事件
        // this.node.targetOff(this);
    },

    start () {

    },

    // update (dt) {},
});
