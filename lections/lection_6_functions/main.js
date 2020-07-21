console.log('Lection_6');




// example();
// example2();


// // function declaration
// function example() {
//     // тело функции
//     console.log('example is working')
//     f();
// }
// function f() {}

// // function expression
// example2 = function() {
//      // тело функции
//      console.log('example2 is working')
//      f();
// } // анонимная

// example();
// example2();


// -------------------------------------------


// function sum(a, b) {
//     return a + b;
// }

// res = sum(76, 52);
// console.log(res); 


// function sumArray(list) {
//     console.log(list);
//     sum = 0;
//     for(i = 0; i < list.length; i++){
//         sum += list[i];
//     }

//     return sum;
//     // return undefined;
// }

// superArray = [7,5,75,75,7,6];
// res = sumArray(superArray);
// console.log(res, sum, i); 

// -------------------------------------------



// global

// z = 10; // global
// var example = 600; // local == global
// var y = 1999;

// console.log(window);
// console.log(window.example);


// f();
// k();


// function f(){
//     x = 420;
//     console.log('f z = ', z)
//     console.log('f x = ', x)
//     var asjhfhdasfjasij = 'gergergergergerg';
// }

// function k(){
//     var y = 999;
//     console.log('k z = ', z)
//     console.log('k y = ', y)
//     // console.log('f x = ', x); // error
//     f1();

//     function f1() {
//         console.log('f1 z = ', z)
//         console.log('f1 y = ', y)
//         // console.log('f1 y = ', asjhfhdasfjasij) // is not defined
//         console.log(window.y)
//     }
// }



// -------------------------------------------


// function sum(a, b, c) { // a, b, c - local varibales
//     var res = a + b + c;
//     return res;
// }

// console.log(sum(2, 8, 9));


function sumArray(list) {
    var sum = 0;
   
    for(var i = 0; i < list.length; i++){
        sum += list[i];
    }

    return sum;
}

i = 67;
superArray = [7,5,75,75,7,6];
res = sumArray(superArray);
// console.log(res, i); 


ggArray = [
    [1, 7, 8],
    [-6, 3, -2],
    [0, 9, 89, 2, 4],
];

for(i = 0; i < ggArray.length; i++) {
    console.log(sumArray(ggArray[i]));
}

// for(i = 0; i < ggArray.length; i++) {
//     sum = 0;
//     for(j = 0; j < ggArray[i].length; j++){
//         sum += list[j];
//     }
// }