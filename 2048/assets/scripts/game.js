const ROWS = 4; //行数、
const NUMBERS = [2, 4]; //随机生成的数字
const MIN_LENGTH = 50; //最起码拖动的长度
const MOVE_DURATION = 0.1; //移动的时长

cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: cc.Label,
        score: 0,
        blockPrefab: cc.Prefab,
        gap: 20,
        bg: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.drawBgBlocks();
        this.init();
    },

    //背景块绘制
    drawBgBlocks() {
        this.blockSize = (cc.winSize.width - this.gap * (ROWS + 1)) / ROWS; //块的大小
        let x = this.gap + this.blockSize / 2;  //第一个块的x轴位置
        let y = this.blockSize;                 //第一个块的y轴位置
        this.positions = [];                    //定位块
        for (let i = 0; i < ROWS; ++i) {
            this.positions.push([0, 0, 0, 0]);
            for (let j = 0; j < ROWS; ++j) {
                let block = cc.instantiate(this.blockPrefab);  //对于需要重复使用的节点保存成Prefab（预制）资源，作为动态生成节点时使用的模板
                block.width = this.blockSize;
                block.height = this.blockSize;
                this.bg.addChild(block);                  //在bg节点下添加block节点
                block.setPosition(cc.p(x, y));
                this.positions[i][j] = cc.p(x, y);        //放置block块
                x += this.gap + this.blockSize;
                block.getComponent('block').setNumber(0); //将块内数字置为0
            }
            y += this.gap + this.blockSize;
            x = this.gap + this.blockSize / 2;
        }
    },

    //初始化：分数归零、清空所有快
    init() {
        this.updateScore(0);

        if (this.blocks) { //判断是否是第一次开始游戏
            for (let i = 0; i < this.blocks.length; ++i) {
                for (let j = 0; j < this.blocks[i].length; ++j) {
                    if (this.blocks[i][i] != null) {
                        this.blocks[i][j].destroy();
                    }
                }
            }
        }
        this.data = [];
        this.blocks = [];
        for (let i = 0; i < ROWS; ++i) {
            this.blocks.push([null, null, null, null]);
            this.data.push([0, 0, 0, 0]);
        }

        //新建三个块
        this.addBlock();
        this.addBlock();
        this.addBlock();
    },

    updateScore(number) {
        this.score = number;
        this.scoreLabel.string = "分数：" + number;
    },

    /*
     *找出空闲的块
     * @return 空闲快的一维数组表示
     */
    getEmptyLocations() {
        let locations = [];
        for (let i = 0; i < this.blocks.length; ++i) {
            for (let j = 0; j < this.blocks[i].length; ++j) {
                if (this.blocks[i][j] == null) {
                    locations.push(i * ROWS + j);
                }
            }
        }
        return locations;
    },

    //生成数字快
    addBlock() {
        let locations = this.getEmptyLocations();
        let index = locations[Math.floor(cc.random0To1() * locations.length)];
        let x = Math.floor(index / ROWS);
        let y = Math.floor(index % ROWS);
        let positions = this.positions[x][y];
        let block = cc.instantiate(this.blockPrefab);  //对于需要重复使用的节点保存成Prefab（预制）资源，作为动态生成节点时使用的模板
        block.width = this.blockSize;
        block.height = this.blockSize;
        this.bg.addChild(block);                  //在bg节点下添加block节点
        block.setPosition(positions);  
        block.getComponent('block').setNumber(Math.floor(cc.random0To1() * NUMBERS.length));
    },

    // update (dt) {},
});
