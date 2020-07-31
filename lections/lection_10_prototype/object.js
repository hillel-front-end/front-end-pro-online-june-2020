// 


let data = {
    x: 10,
    y: 20
};

data.__proto__.FOO = 'FOO BAR';

let info = {
    z: 20,
    msg: 'hello'
};

// console.log(data, info);

let list = [1, 2, 3];

// console.log(list);

// ---------------------------------
list.__proto__.fooBar = function(){
    return console.log('fooBar');
}


// ------------------------------------

let parent = {
    name: 'Default',
    run() {
        console.log('Running');
    }
};

let some = {
    hello: 'test'
};

// some.__proto__ = parent;
// console.log(some);

// let child = Object.create(parent);
// let child2 = Object.create(parent);

// console.log(child, parent)

// child.run();
// child2.run();

// -------------------------------------------------------------
// Object.assign()


let test1 = { x: false, y: 'asdsa', z: 1000, p: {x: 10, h: 345}};
let test2 = { y: [1, 2, 3, 4, 5], p: 999 };

// let result = Object.assign(test1, test2, { x: 111, y: 222 });

let result2 = Object.assign({}, test1, test2, { x: 111, y: 222 });
// console.log(result2);

// copy

let something = {
    x: 10,
    list: [1, 2,3 ],
    value: 'asdas'
};

let parentNew = {
    PARENT_KEY: 'parent'
}

something.__proto__ = parentNew;

// let copy = something; // wrong way
// let copy = Object.assign(Object.create(parentNew), something);
// let copy = {...something};

// console.log(copy, something);


// -------------------------------------------------------------------
// hasOwnProperty

// console.dir(Object);

let parentSome = {
    x: 10,
    y: 20,
    z: 30
};

// let someExample = {
//     ex_1: 'ex_1',
//     value: 2392,
//     id: 'ASC-12',
//     list: [6,74,658]
// };
// someExample.__proto__ = parentSome;

// let someExample = Object.create(parentSome);
// someExample.ex_1 = 'ex_1';
// someExample.value = 2392;
// someExample.id = 'ASC-12';
// someExample.list = [6,74,658];

// let res = Object.getOwnPropertyNames(someExample);
// console.log(res);

// for(let key in someExample) {
//     if (!someExample.hasOwnProperty(key)) {
//         continue;
//     }
//     console.log('IS OWN', someExample.hasOwnProperty(key), key);
// }



// -------------------------------------------------------------------

function f(a, b) {
    // console.log(this); // window
}

f(10, 67);


function testSum(){
    return this.a + this.b;
}

function tempChange(step) {
    this.air.temp += step;
}

let person = {
    a: 60,
    b: 90,
    c: 120,
    air: {
        name: '1',
        model: 't1',
        temp: 23
    },
    sum: testSum,
    tempChange: tempChange
}

let person2 = {
    a: 700,
    b: 12,
    air: {
        name: '2',
        model: 't1',
        temp: 24
    },
    sum: testSum,
    tempChange: tempChange
}

console.log( person.sum() );
console.log( person2.sum() );

person.tempChange(2);
person2.tempChange(-4);
console.log(person, person2)
