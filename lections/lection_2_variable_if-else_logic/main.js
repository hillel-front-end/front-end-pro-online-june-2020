console.log('lection 2');

/*
 Тезисы:
    xx-yy-zz - Вступление
    xx-yy-zz - создание переменных var
    xx-yy-zz - Math.pow, Math.floor, Math.round, Math.ceil, Math.trunc, Math.abs, Math.random,
    xx-yy-zz - boolean
    xx-yy-zz - logic &&, ||, !
    xx-yy-zz - if else
    xx-yy-zz - cycles do...while, while
    xx-yy-zz - cycles for

Практика:
    Возведение числа в степень a^n, без Math.pow
*/


// x = 10;
// var y = 20;
// let z = 30;
// const p = 56;
// console.log(p);
// p = 20;

// ---------------------------------------

x = -45.67;
// console.log(Math.pow(5, 3));
// console.log(Math.floor(x));
// console.log(Math.round(x));
// console.log(Math.ceil(x));
// console.log(Math.trunc(x));
// console.log(Math.abs(x));

// console.log(Math.random());


// --------------------------------------

x = 10;
y = -5;

expression = x > y && x != 0 && y > 100
// expression = true && x != 0 && y > 100
// expression = true && true && y > 100
// expression = true && y > 100
// expression = true && false
// expression = false


expression = x + y > 0 && (x != 0 && y > 100)
// expression = true && (x != 0 && y > 100)
// expression = true && (true && y > 100)
// expression = true && (true && false)
// expression = true && false
// expression = false

// console.log( expression );


// x = 10;
// y = -5;

// expression = x > 0 || x != y;

// expression = (x < 0 && x != y) || y != 0;
// expression = (true && x != y) || y != 0;
// expression = (true && true) || y != 0;
// expression = true || y != 0;
// expression = true || true;
// expression = true;

// expression = x < 0 && (x != y || y != 0);
// expression = true && (x != y || y != 0);
// expression = true && (true || y != 0);
// expression = true && (true || true);
// expression = true && true;
// expression = true;

// console.log( expression );

// ------------------------------------------------------------

// if else


/*

    if (expression) { -> Boolean(expression)
        // true
        // code
    } else {
        // false

    }

*/


// x = 0;

// isSomeValue = prompt();

// if (0 == x) {
//     console.log('true part');
// } else {
//     console.log('false part');
// }


// ------------------------------------------------------------



/*
 (expression) {
     // code
 }
*/

// предусловие
/*
 while (expression) {
     // code
 }
*/

// i = 0; 
// while (i <= 5) {
//     console.log(i);
//     i = i + 2;
// }


// постусловием
/*
 do {
     // code
 } while (expression);
*/

// i = 0; 
// do {
//     console.log(i);
//     i = i + 1;
// } while (i <= 5);


// цикл с счетчиком

/*
 for(1; 2; 3) {
     4
 }

 1 -> 2 true -> 4 -> 3 -> [2]
        false -> end
*/

// for(i = 0; i <= 5; i++) {
//     console.log(i);
// }


// Practice

/*
    Ввести с клавиатуры 2 числа a и b (где a <<< b). 
    Запустить цикл перебора от a до b. 
    Вывести в консоль квадраты чётных чисел.
*/

// a = +prompt('a = '); // 0
// b = +prompt('b = '); // 10

// if (a >= b) console.warn('WRONG!!!');

// for(i = a; i <= b; i++){ // 10
//     if (i % 2 == 0) { // 10
//         // val = i*i;
//         val = Math.pow(i, 2); // 10
//         console.log(val);
//     }
// }


console.log('--------------------------better way---------------------------------');

// if (a % 2 == 0) { // 1
//     i = a;
// } else {
//     i = a + 1;
// } // 1

// i = a;
// if (a % 2 != 0) { 
//     i++;
// }

// for(; i <= b; i = i + 2) { 
//     val = Math.pow(i, 2);
//     console.log(val);
// }

// -------------------------------------------------------------------
/*
    Заставить пользователя ввести с клавиатуры число.
*/

 do{
    a = prompt('a = ');
    b = prompt('b = ');
    decodedA = +a;
    decodedB = +b;
    isWrongA = isNaN(decodedA);
    isWrongB = isNaN(decodedB);

    if (isWrongA || isWrongB) {
        console.error(a + ' ' + b + ' - values is incorrect');
    } else {
        a = decodedA;
        b = decodedB;
    }
} while(isWrongA || isWrongB);


console.log(a, b);


