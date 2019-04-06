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

    onLoad: function() {
        /*
        var w_pos = new cc.Vec2(100, 100);
        console.log(w_pos);

        w_pos = cc.v2(200,200);
        console.log(w_pos);

        w_pos = cc.p(300,300);
        console.log(w_pos);

        var src = cc.v2(0,0);
        var dst = cc.v2(100,100);
        var dir = dst.sub(src);
        
        var len = dir.mag();
        console.log(len);

        var s = new cc.Size(100,100);
        console.log(s);

        s = cc.size(200,200);
        console.log(s);

        var r = new cc.Rect(0,0,100,100);
        console.log(r);

        r = cc.rect(0,0,200,200);
        console.log(r);
        //判断点是否在矩形内
        var rec = r.contains(cc.v2(200,200));
        console.log(rec);
        //判断两个矩形是否相交
        
        var rhs = cc.rect(100,100,100,100);
        var ret = r.intersects(rhs);
        console.log(ret);
        */

        //节点坐标转到屏幕坐标 cc.v2(0,0)
        var w_pos = this.node.convertToWorldSpace(cc.v2(0,0)); //以左下角为原点
        console.log(w_pos);//Vec2 {x: 462, y: 270}
        w_pos = this.node.convertToWorldSpaceAR(cc.v2(0,0)); //以锚点为原点
        console.log(w_pos);//Vec2 {x: 512, y: 320}
        // end

        //世界坐标转节点坐标
        var w_pos = cc.v2(512,320);
        var node_pos = this.node.convertToNodeSpace(w_pos); 
        console.log(node_pos); //Vec2 {x: 50, y: 50}
        node_pos = this.node.convertToNodeSpaceAR(w_pos); 
        console.log(node_pos); //Vec2 {x: 0, y: 0}
         
    },

    start () {

    },

    // update (dt) {},
});
