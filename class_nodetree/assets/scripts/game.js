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

    //use this for initialization
    //组件实例在加载的时候运行
    //组件实例.onload()，组件实例.start
    onLoad () {
        //this. -->当前实例
        console.log(this);
        console.log("this.onload");

        //代码里怎么找到节点?
        //指向这个组件实例所挂载的节点
        console.log(this.node);
        console.log(this.node.name);
        console.log(this.node.positon);
        console.log(this.node.group,this.node.groupIndex);
        console.log(this.node.parent.name);

        //孩子
        var children = this.node.children;
        for(var i = 0; i < children.length; i++){
            console.log(children[i].name);
        }
        
        //添加
        // var new_node = new cc.Node();
        // this.node.addChild(new_node);
        //删除
        // new_node.removeFromParent();
        // this.node.removeAlChildrn();//删除所有孩子节点

        //查找：局部查找和全局查找
        //局部
        var item = this.node.getChildByName("item1");
        console.log("********",item.name);//有两个同名的，谁先找到就是谁
        //全局，时间消耗，对于编写通用的模块而言，能不用就不用
        item = cc.find('Canvas/parent/item1');
        console.log('########',item.name);

        var pos = item.getPosition();//相对位置
        console.log('pos = ',pos);
        // pos = cc.p(100,100);//cc.Vec
        item.setPosition(pos);
    },

    //组件实例
    start () {

    },

    // update (dt) {},
});
