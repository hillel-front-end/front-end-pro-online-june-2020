

function blabla() { 
    return a + b + x;
}


let data = {
    x: 10,
    y: 20,
    // sum: function(a, b){ // method
    //     return a + b;
    // },
    sum: blabla
}

// console.log(blabla.toString(), data.sum.toString());


// console.log(data.sum(2, 19));


// console.log();
// alert();

function f(cb) {

    f1();
    cb();

}

function f1() {

}


f(function(){})
f(function(){})
f(function(){})