/*
    Тезисы:
        xx-yy-zz - object intro - creating
        xx-yy-zz - properties - setting and getting (not get/set)
        xx-yy-zz - for..in, Object.keys, Object.values
        xx-yy-zz - method hasOwnProperty(), Object.getOwnPropertyNames()
        xx-yy-zz - Simple practice

        xx-yy-zz - Functions intro - creating
        xx-yy-zz - args, return
*/


list = [
    2,
    false,
    5,
    "hello"
];

listO = {
    "0": 2,
    "1": false,
    "2": 55555555,
    "a3": "hello",
    "length": 4
};

// empty object

data = {
    age: 2,
    x: false,
    y: 5,
    testMsg: "hello"
};
/*
    { ["key": value,] }
*/

// window1 = { width: 120, height: 250, zIndex: 25, color: 'white', isCanOpen: true };

// console.log(window1);

// console.log( window1.width * window1.height * window1['zIndex'], window1.zIndex );

// console.log(listO[2], list['length']); // list["2"]
// console.log(listO["2"], listO.length); 
// console.log(listO.a3); 

// console.log(Math);

// ---------------------------------------------------------

data = {
    width: 120,
    names: ["Vasya", "Katya", "Petya", "Marina"],
    example: [
        [],
        [],
        [],
    ],
    address: {
        city: "Kharkiv",
        zip: 453
    }
};

// console.log(data)


for(i = 0; i < data.names.length; i++) {
    // console.log( data.names[i] );
}

// --------------------------------------------------------

a = "Hello world!"
b = a;
// console.log( a == b ); // true
a += '!!~!!!!'
// console.log(a, '--------------------' ,b);
// console.log( a == b ); // false

A = [1, 2, 3];
B = A.slice();
// console.log( A == B ); // false
A.push(10);
// console.log(A, B);
// console.log( A == B ); // false


dataA = {x: 10, list: { example: true}}
dataB = Object.assign({}, dataA);
// console.log(dataB);
// console.log(dataA == dataB);
// dataB.y = 50;
// console.log(dataA, dataB);

// --------------------------------------------------------

person = {
    name: 'Name',
    age: 20
}

keyExampleFrontEnd = 'friends';

person.surname = 'Sur';
person[keyExampleFrontEnd + '_1'] = ['Name 1', 'Name 2'];

// console.log(person);

// --------------------------------------------------------

info = {
    x: 10,
    name: 'Name',
    age: 20,
    isEqual: false,
    list_1: [1, 2, 3],
    list_2: [4, 5, 6],
    data: {
        x: 10,
        y: 20,
        inner: {
            u: 80,
            sss: 'hello'
        }
    }
};

for(key in info) {
    // console.log(key, info[key]);
    // if (typeof info[key] == 'object') {
    //     console.log(info[key])
    // }
}

// ------------------------------------------------------


info = {
    x: 10,
    name: 'Name',
    age: 20,
    isEqual: false,
    list_1: [1, 2, 3],
    list_2: [4, 5, 6],
    data: {
        x: 10,
        y: 20,
        inner: {
            u: 80,
            sss: 'hello'
        }
    }
};

// console.log( Object.values(info) );
// console.log( Object.keys(info) );
// console.log( Object.entries(info) );

// -------------------------------------------------------------

// msg = 'Hello world!'

// for(key in msg) {
//     console.log(key, msg[key]);
// }
// console.log('----------------------------------')
// arr = [1, 7, 8, 9 , 12,,,,,,undefined];
// arr[1000] = 500;

// for(i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(key in arr) {
//     console.log(key, arr[key]);
// }

example = {
    x: 10,
    y: 20,
    z: 30
}

console.log(!!example.p);

if (!example.p) {
    example.p = 0;
}

// example.p = example.p || 0;