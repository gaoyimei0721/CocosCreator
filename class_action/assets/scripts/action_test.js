cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //move
        //moveTo：目标; moveBy：变化;
        // var mto = cc.moveTo(1, cc.v2(100,100)); //cc.moveTo(1,x,y);
        // this.node.runAction(mto);
        // var mby = cc.moveBy(1, cc.v2(100,100));
        // this.node.runAction(mby);

        //rotate
        // var rto = cc.rotateTo(1,180); //旋转到180度
        // this.node.runAction(rto);
        // var rby = cc.rotateBy(1,75); //在原来基础上，变化75，可正，可负
        // this.node.runAction(rby);

        //scale
        // this.node.scale = 2;
        // var sby = cc.scaleBy(1,1.1); //按指定倍数缩放节点（若原来是2倍，缩放1.1*2）
        // this.node.runAction(sby);
        // var sto = cc.scaleTo(1,1.1); //将节点大小缩放到指定倍数
        // this.node.runAction(sto);

        //opactify(改变透明度)
        //淡入：fadeIn; 淡出：fadeOut 
        //  var fin = cc.fadeIn(1);
        //  this.node.opactify = 0;
        //  this.node.runAction(fin);
        // var fout = cc.fadeOut(1);
        // this.node.runAction(fout); //透明度变为0，物体还在
        // var fto = cc.fadeTo(1,128); //渐变透明度到某一值
        // this.node.runAction(fto);

        //function
        /*var func = cc.callFunc(function(){
            console.log("call Func action!")
        }.bind(this));
        console.log('begin ###'); //1
        this.node.runAction(func); //3
        console.log('end ###'); //2*/

        //移动到目的地后，隐藏这个物体怎么办？
        //命令清单 [Action1,A2,A3]
        //seq
        /*var m1 = cc.moveTo(1,100,100);
        var fout = cc.fadeOut(0.5);
        var seq = cc.sequence([m1, fout]); //动作序列，不同时发生
        this.node.runAction(seq);*/

        //一个节点可同时运行多个Action
        /*var m1 = cc.moveTo(1,100,100);
        var fout = cc.fadeOut(0.5);
        this.node.runAction(fout);
        this.node.runAction(m1);*/

        //不断放大缩小
        /*var s1 = cc.scaleTo(0.8,1.1);
        var s2 = cc.scaleTo(0.8,0.8);
        var seq = cc.sequence([s1,s2]);
        var rf = cc.repeatForever(seq);
        this.node.runAction(rf);*/

        //回弹效果
        //匀速的飞过，不好，缓动特效
        /*this.node.y = 0;
        var m = cc.moveTo(1,100,0).easing(cc.easeBackOut());//缓动方式
        this.node.runAction(m);*/

        /*var r = cc.rotateBy(3,360).easing(cc.easeCubicActionOut());
        var rf = cc.repeatForever(r);
        this.node.runAction(rf);
        // this.node.stopAction(rf);//移除一个动作
        this.node.stopAllActions();//移除所有动作*/
        //end
        
        //移动了到(100,0); 删除
        /*var m = cc.moveTo(1,100,0);
        var end_func = cc.callFunc(function(){
            this.node.removeFromParent();
        }.bind(this));
        var seq = cc. sequence([m, end_func]);
        this.node.runAction(seq);*/

        //cc.Delay,（延时）
        var dl = cc.delayTime(3);
        var fout = cc.fadeOut(0.5);
        var end_func = cc.callFunc(function(){
            this.node.removeFromParent();
        }.bind(this));
        var seq = cc.sequence([dl, fout, end_func]);
        this.node.runAction(seq);



    },

    start () {

    },

    // update (dt) {},
});
