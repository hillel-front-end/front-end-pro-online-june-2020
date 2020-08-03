// 'use strict'

// let data = {
//     x: 10,
//     y: 20
// };

// data.__proto__.FOO = 'FOO BAR';

// [].__proto__.runAsync = function(){}


// Array.prototype.runAsync = function(){}

// function f1() {}
// function f2() {}
// function f3() {}


// Object.assign(Array.prototype, {
//     f1: f1,
//     f2: f2,
//     f3: f3
// })

// console.log(Array.prototype);

// -----------------------------------------------

// this

var x = 600;
// window.x = 70;

function f() {
    console.log(this);
}

// f(); // this -> window
// window.f(); // this -> window

// sum();

function sum() {
    inner(); // window

    function inner() {
        console.log(this);
    }
}


let data = {
    x: 10,
    y: 20,
    func: f
}

// data.func(); // data
// f();


// --------------------------------------------

// new
// this == context


// let list = new Array(1, 2, 3);


// 1 - args
// 2 - return
// 3 - this
function Person(name, surname, age){ // фк
    this.name = name;
    this.surname = surname;
    this.age = age;

    if (this === window) {
        return new arguments.callee(name, surname, age);
    }
}

Person.prototype.getFullName = function(){
    return this.name + ' ' + this.surname;
}

let child = new Person('Vasya', 'Petrov');
let child2 = new Person('Petya', 'Vasyn', 23);
let child3 = new Person('Name', 'Surname', 99);
let child4 = Person('Name4', 'Surname4', 99);

// console.log( child.getFullName() );
// console.log( child2.getFullName() );
// console.log( child3.getFullName() );

console.log(child, child2, child3, child4);

/*
    1. создает пустой объект {}
    2. Вызывает функцию Person
    3. this ссылается на объект из п.1
*/

/*
    1. создает пустой объект {} = Object.create(Person.prototype),
    2. Вызывает функцию Person c перенаправленным this на объект из п.1
*/

// console.dir(Person);
// child.runAsync();
