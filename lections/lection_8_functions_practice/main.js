console.log('Lection_7');


/*
1) Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’
2) Организовать вывод массива [6,7,2,3,5,7] в виде списка, при помощи тегов ul-li
3) В массиве [5,6,43,3,436,7,87,76,45,3] вырезать центральный элемент, если длина массива чётная – вырезать два элемента, которые можно считать центральнымию
*/


var arr =  [1, 7, 8, 9];
// document.write(arr);
document.write(arr.join('_'));



// console.log('Hello world')
// document.write('Hello world');
// document.write('<hr>');
// console.log(100.67)
// document.write(100.67);
// document.write('<hr>');
// console.log(false)
// document.write(false);
// document.write('<hr>');
// console.log(undefined)
// document.write(undefined);

// document.write('<hr>');
// console.log( sum ); 
// document.write(sum);
function sum(a, b) {
    return a + b;
} 


// var list = [6,7,45,754,7];
// document.write('<hr>');
// console.log( list ); 
// document.write(list);

// var data = {
//     x: 10,
//     y: 80,
//     address: '123'
// };
// document.write('<hr>');
// console.log( data ); 
// document.write( JSON.stringify(data) );





// ------------------
// Организовать вывод массива [6,7,2,3,5,7] в виде списка, 
// при помощи тегов ul-li
// join()


// var list = [6,7,2,3,7];

// // document.write('<ul><li>' + list.join('</li><li>') +'</li></ul>');

// function renderList(arr) {
//     var str = '<ul><li>';

//     for(let i = 0; i < arr.length - 1; i++) {
//         str = str + arr[i] + '</li><li>';
//     }

//     str = str + arr[arr.length - 1]  + '</li></ul>';
//     return str;
// }



/*
В массиве [5,6,43,3,436,7,87,76,45,3] вырезать центральный элемент, 
если длина массива чётная – вырезать два элемента, 
которые можно считать центральными
*/

// source = [1, 2, 3, 4, 5];
// console.log(source.toString())
// source.splice(2, 3)
// console.log(source.toString())

// 1 2 3 4 5
// center -> 5 / 2 -> 2.5 -> source[2] -> 4 -> source.splice(2, 1)
// 1 2 3 4 5 6
// center -> 6 / 2 -> 3 -> source[2] -> 4 -> source.splice(3 - 1, 2)

// source = [1, 2, 3, 4, 5];
// var center = Math.ceil(source.length / 2) - 1;
// var size = 1;

// if (source.length % 2 == 0) {
//     size = 2;
// }

// source.splice(center, size);
// console.log(source.toString())

// source.splice(center, source.length % 2 == 0 ? 2 : 1);

// ---------------------------------------------------

/*

    
Функция должна вернуть массив из центральных элементов переданных массивов.

Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3

Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4



*/


function getCenters() {
    // console.log( arguments ); // псевдо массив
    let result = [];
    // let sources = [a1, a2, a3];
   
    for(let i = 0; i < arguments.length; i++) {
        // result.push(getCenter(arguments[i]));
        result = result.concat(getCenter(arguments[i]));
    }
    return result;
}

function getCenter(source) {
    let center = Math.ceil(source.length / 2) - 1;
    let size = 1;

    if (source.length % 2 == 0) {
        size = 2;
    }

    return source.slice(center, center + size);
}




let arr1 = [1, 2, 3, 4, 5]; 
let arr2 = [11, 22, 33, 44, 55]; 
let arr3 = [111, 222, 333, 444, 555, 666];
let res = getCenters(arr1, arr2, arr3, [1, 2], arr2, arr3, arr1, arr2, arr3);

// console.log(res);



/*
напиши функцию filter, которая принимает функцию-предикат и массив.
 Возвращает она массив значений, для которых предикат вернет true.

 var input = [1, 2, 3, 4, 5, 6];
 function isEven(x) { return x % 2 == 0; } // проверяет на четность
 console.log(filter(input, isEven)); // [2, 4, 6]

*/




function filter(source, callback) {
    if (!source || !source.length) {
        return;
    }
    if (!callback || typeof callback != 'function') {
        return source;
    }
    let filtred = [];
   
    for(let i = 0; i < source.length; i++) {
        if (callback(source[i])) {
            filtred.push(source[i]);
        }
    }

    return filtred;
}


function isEven(x) { 
    return x % 2 == 0; 
}

function isOdd(x) { 
    // return !isEven(x);
    return x % 2 != 0; 
}

function isPrime(value) { 
    if (value <= 1) { return false; }
    for(let i = 2; i < value; i++) {
        if (value % i == 0){
            return false;
        }
    }
    return true;
}

var input = [1, 2, 3, 4, 5, 6, 78, 97, 93, 43, 29, 13, 19, 45];
// let result = filter(input, isEven);
// result = filter(input, isPrime);
// console.log(input, result)

result = filter(filter(input, isOdd), isPrime);

console.log(result);

result = filter([7,87,8,1,3,2,78,7,87,8,7,87,8], function(value) {
    return value > 5
});

result = filter([7,"12", 67, '123',7,8,7,87, 'hell;po world',8], function(value) {
    return typeof value == 'string';
});

result = filter([7,87,8,1,3,123, 2,78,7,87,8,7, 113, 127,87,8], function(value) {
    return value > 100 && isPrime(value);
});

console.log(result)