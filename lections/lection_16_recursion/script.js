const func1 = function() {}

function func2() {}

const funcArrow = () => {};

const funcArrowCompact = arg => {
    console.log();

    return Math.random();
};

const funcReturnFirstArg = arg => arg + 1;

const funcReturnFirstArg2 = (arg, arg2) => arg + arg2;

function funcReturnFirstArg1(arg) {
    return arg;
}

const funcReturnObject = key => ({
    [key]: 1
});

var a = 'Window';

const obj1 = {
    a: 10,
    log: function () {
        console.log(this.a);
    },
    logArrow: () => console.log(this.a)
};

// obj1.log();
obj1.logArrow.call(obj1);

function funcArguments() {
    return (arg1, ...args2) => {
        for (let index in arguments) {
            console.log('arguments', arguments[index]);
        }

        for (let index2 in args2) {
            console.log('arguments2', args2[index2]);
        }

        console.log(args2);
    }
}

// const funcArguments = () => {
//     for (let index in arguments) {
//         console.log(arguments[index]);
//     }
// }

let closureEvent;
let closureCurrentTarget;

document.addEventListener('click',event => {
    // console.log(event.target);
    // console.log(event.currentTarget);
    closureEvent = event;
    closureCurrentTarget = event.currentTarget;

    setTimeout(() => {
        console.log(closureEvent.currentTarget);
        console.log(closureCurrentTarget);
    }, 0);
});


const returnedFunc = funcArguments(1, 2, 3);

returnedFunc(4,5,6);

// function someFunc() {
//     const that = this;
//
//     return () => {
//         that.sdf;
//     }
// }

const arr = [1, 2, 3];

arr.forEach(element => console.log(element));
const arrMapped = arr.map(element => element * element);

console.log(arrMapped);