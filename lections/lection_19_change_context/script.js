

//operator spread, rest, destructing
function f(firstParam, ...args) {
    console.log(firstParam, args);
    console.log(arguments);
}

// f(1,2,3,4,5)


function restObj() {

}

const obj = {
    param: 1,
    field: 'Field',
    func() {}
}

const {param, field, func, ...restFields} = obj;

// const param = obj.param
// const restFields = obj
// console.log(param, restFields);//1

class Vehicle {
    constructor(config) {
    }
}

class Car extends Vehicle {
    // constructor(config) {
    //     const model = config.model;
    //
    //     delete config.model;
    //
    //     const vehicleConfig = config
    //
    //     super(vehicleConfig);
    //
    //     this.model = model;
    // }
    constructor({ ...vehicleConfig }) {

        super(vehicleConfig);

        vehicleConfig.obj.a = 20;
        vehicleConfig.engine = 'dfdfdf'
    }
}

const config = {
    engine: 'v10',
    model: 'S10',
    speed: 200,
    obj: {a: 10}
};

// console.log(config);

const mers = new Car(config);

// console.log(config);

const array = [1, 2, 3, 4, 5];

const [first, , third, ...restNums] = array;

// const [value, setValue] = useState(true);

// console.log(first, third, restNums);


//-------------------

const parameters = {
    param1: 'param1',
    param2: 'param2',
    param3: 'param3'
};

// console.log(
//     {
//         field: 'test',
//         param1: 'TEST_FIELD',
//         ...parameters,
//         value: 10,
//         test: 'test',
//         param3: 'PARAM3'
//     }
//     );


const spreadObj = Object.assign({
    field: 'test',
    param1: 'TEST_FIELD'
}, parameters, {
    value: 10,
    test: 'test',
    param3: 'PARAM3'
})
// console.log(parameters)


const DEFAULT_CONFIG = {
    name: 'Grid',
    height: 1000,
    width: 1700
};

function createGrid(config) {
    // const extendedConfig = Object.assign({}, DEFAULT_CONFIG, config);
    const extendedConfig = {...DEFAULT_CONFIG, ...config};


    // console.log(extendedConfig);

    //calculate grid and render
}

createGrid({
    height: 500,
    name: 'gridTest'
});


const array1 = [1,2,3];
const array2 = [4,5,6];

// console.log([...array1, 77, 88, ...array2]);

const minValues = [2, 4, -60, 40,20];

const min = Math.min(...minValues);

// console.log(min);

//call, apply, bind


const lostThisObj = {
    test: 'lostThisObj',
    showTest: function (name, name2) {
        console.log(`${this.test} ${name} ${name2}`);
    }
}

const foundThisObj = {
    test: 'foundThisObj'
}

const showTest = lostThisObj.showTest;
// console.log('showTest', showTest === lostThisObj.showTest); //true

// showTest.call(lostThisObj, 'Alex', 'Pete');
// showTest.apply(foundThisObj, ['Alex', 'Pete']);

// const minValues = [2, 4, -60, 40,20];
//
// const min = Math.min.call(Math, minValues);
// const min = Math.min.apply(Math, minValues);

const showTestBounded = lostThisObj.showTest.bind(lostThisObj, 'Alex');
const showTest2Bounded = lostThisObj.showTest.bind(foundThisObj, 'Pete');

// console.log('showTestBounded', showTestBounded === lostThisObj.showTest); //false
showTestBounded('Pete');
showTest2Bounded('Alex', 'Pete');

const pow2 = Math.pow.bind(Math, 2);

console.log(pow2(3));
console.log(pow2(10));

function move(direction, distance) {
    switch (direction) {
        case 'up': {
            console.log('up', distance);
            return;
        }

        case 'Down': {
            console.log('down', distance);
            return;
        }
    }

    console.error('NO SUCH DIRECTION')
}

const moveUp = move.bind(null, 'up');
const moveDown = move.bind(null, 'Down');


moveUp(100);
moveDown(1000);

move('up', 100);
move('down', 1000);

//how to use OOP in character
class Character extends  Physics {
    constructor({selector, startX, startY}) {
        super();
        this.selector = selector;
        this.x = startX;
        this.y = startY;

        this.#init();
    }

    el = null;

    #init() {
        this.el = document.querySelector(this.selector);

        this.render();
        this.addEventListeners();
    }

    render(){
        if (!this.el) {return;}

        this.el.styles.top = this.y;
        this.el.styles.left = this.x;

        document.appendChild(this.el);
    }

    addEventListeners() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Space') {
                this.jump();
            }
            //...
        });
    }

    move() {}
    jump(){}
    sit() {}


}

class Physics {

}

const char1 = new Character({
    selector: '.block',
    startX: 1000,
    startY: 500
})

const char2 = new Character({
    selector: '.enemy',
    startX: 0,
    startY: 500
})

//value 0 -> 100

//block height -> 0 -> 200





