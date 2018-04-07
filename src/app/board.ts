export class Board {
    width: number;
    height: number;
    nodes: Array<MyNode>;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.nodes = new Array<MyNode>();
        this.testAddingNodes();
    }

    private testAddingNodes() {
        this.addNode(new MyNode(this.width, this.height));
        this.addNode(new MyNode(this.width, 1));
        this.addNode(new MyNode(1, this.height));
        this.addNode(new MyNode(1, 1));
    }

    addNode(node: MyNode) {
        this.nodes.push(node);
    }

    getWidth() { return this.width; }
    getHeight() { return this.height; }
    getNodes() { return this.nodes; }
}

export class Bridge {
    n1: MyNode;
    n2: MyNode;
    num: number;

    constructor(n1: MyNode, n2: MyNode, num: number) {
        this.n1 = n1;
        this.n2 = n2;
        this.num = num;
    }

    setNum(num: number) {
        this.num = num;
    }

    getN1() { return this.n1; }
    getN2() { return this.n2; }
    getNum() { return this.num; }
}

export class MyNode {
    x: number;
    y: number;
    val: number;
    bridges: Array<Bridge>;

    constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
        this.bridges = new Array<Bridge>();
    }

    setVal(val: number) {
        this.val = val;
    }

    addBridge(bridge: Bridge) {
        this.bridges.push(Bridge);
    }

    getX() { return this.x; }
    getY() { return this.y; }
    getVal() { return this.val; }
    getBridges() { return this.bridges; }
}
