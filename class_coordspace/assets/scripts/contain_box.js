//包围盒
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        //获取节点的包围盒，相对与父亲节点坐标系下的包围盒
        var box = this.node.getBoundingBox();
        console.log(box);
        /**
         * Rect
            height: 50
            width: 50
            x: -25
            y: -25
         */
        //世界坐标系下的包围盒
        var w_box = this.node.getBoundingBoxToWorld();
        console.log(w_box);
        /**
         * Rect
            height: 50
            width: 50
            x: 487
            y: 295
         */

         this.node.on(cc.Node.EventType.TOUCH_START, function(t){
            var w_pos = t.getLocation();
            var pos = this.node.convertToNodeSpaceAR(w_pos);
            console.log(pos);

            pos = this.node.convertTouchToNodeSpaceAR(t);
            console.log('##',pos);
         }, this);

         //我要把当前这个sub移动到世界坐标为900，600；
         //把世界坐标转到相对于他的父亲节点的坐标
         var node_pos = this.node.parent.convertToNodeSpaceAR(cc.v2(900,600));
         this.node.setPosition(node_pos);//相对于this.node.parent这个为参照物，AR为原点的坐标系

         //获取当前节点的世界坐标
         this.node.convertToWorldSpaceAR(cc.v2(0,0));
    },

    // update (dt) {},
});
