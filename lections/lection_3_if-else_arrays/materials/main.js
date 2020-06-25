console.log('lection 2');

/*
    Тезисы:
        xx-yy-zz - array intro
        xx-yy-zz - cycles + arrays
        xx-yy-zz - sum, find
        xx-yy-zz - push, pop, shift, unshift, splice, slice, "copy"

    Практика:
        - Задачи из раздела Лекция
*/

// A = [];
A = [7, 9, 23, -6, 65, 4,5,45,4,5,45,4,5];

// console.log(A);
// console.log(A.length);

// console.log(A[2]); // 23
// console.log(A[0]); // 7

// console.log(A[A.length - 1]); // last


// ----------------------------------

// A = [1, 2, 3, 4, false, true, 'gello', 2];

// console.log( A[0] + A[2] );
// console.log(A);

// A[2] = 60;

// console.log(A);

// ----------------------------------

A = [];
A.length = 5;

// console.log(A);

for(i = 0; i < A.length; i++) {
    // A[i] = prompt();
}

// console.log(A);



B = [false, true, 'hello', 10];

for(i = 0; i < B.length; i++) {
    // console.log(B[i]);

    if (i == 1) {
        break;
    }
}
// B.length = 2;


// ----------------------------------

A = [];
A.length = 20;

// console.log( Math.random() ); // 0 .. 1
sum = 0;
p = 1;
for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random()*121) - 50;

    // sum = sum + A[i];
    sum += A[i];
    p *= A[i];
}

// console.log(A);
// console.log(sum)
// console.log(p)


/*
    rand(10) -> 0 - 9
    rand(20) -> 0 - 19
    rand(10+1) 20 -> 20 - 30
    rand(120+1)-50 -> -50 - 70
*/

/*
    random() -> 0 .. 1 -> 0.87565
    floor(random()*10) -> 8.7565 -> 8 -> 0-9
    floor(random()*20) -> 16.7565 -> 8 -> 0-19  
    floor(random()*121)-50 -> -50 - 70
*/


// ---------------------------------------------------

// A = [1, 6, 7, 8, 3];
// console.log(A);

// // A[A.length] = 10;
// res = A.push(152);

// console.log(A, res);

// res = A.pop();
// console.log(A, res);


// res = A.unshift(152);
// console.log(A, res);

// res = A.shift();
// console.log(A, res);

// ---------------

// A = [1, 6, 7, 8, 3, 7, 3, 4, 56, 6];
// res = A.slice(2, 6); // [7, 8, 3, 7]
// res = A.slice(0); // [1, 6, 7, 8, 3, 7, 3, 4, 56, 6]
// res = A.slice(0, -1); // [1, 6, 7, 8, 3, 7, 3, 4, 56]
// res = A.slice(1); // [6, 7, 8, 3, 7, 3, 4, 56, 6]


// res = A.splice(2, 3);
// res = A.splice(2, 3, 888, 56,75,7,57,5,7,57,57,5,7,7,999);
// console.log(A, res);