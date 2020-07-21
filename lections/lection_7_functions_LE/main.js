console.log('Lection_7');


if (true) { // block-scoped
    var x = 10; // global
    let y = 20; // !global

    console.log('in if ', y)
}

function f() {
    var z = 700;
    let p = 999;

    console.log(z, p);
}


console.log(x);
// console.log(y);


A = [1, 2, 3,4,5];
A.length = 500;

function f1() { 
    function f2() {
        for(var i = 0, n = A.length; i < n; i++) {
            console.log(A[i]);
        }
    }
}

// --------------------------

var a = 10;
var a = 12;
var a = 10;
var a = 17;
var a = 18;
var a = 123;

let kk = 20;

// console.log(kk);
while(true) {
    let kk = 79;
    
    // console.log(kk);
    break;
}

// --------------------------

// for(let i = 0; i <= 3; i++) {
//     console.log(i);
// }

// console.log(i); // error - i is not defined