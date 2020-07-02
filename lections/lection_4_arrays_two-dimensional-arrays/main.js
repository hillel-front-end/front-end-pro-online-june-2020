console.log('lection 4');

/*
    Тезисы:
        xx-yy-zz - Two dimensional arrays
        xx-yy-zz - N-dimensional arrays
        xx-yy-zz - diagonals and zones
        xx-yy-zz - n-dimensional arrays in the modern web

    Практика:
        xx-yy-zz - Задача из раздела Лекция
*/



// n = 10;
// m = 15;

// A = new Array(n);

// for(i = 0; i < A.length; i++) {
//     // A[i] = new Array(m + Math.floor(Math.random()*10 + 1));
//     A[i] = new Array(m);
//     for(j = 0; j < A[i].length; j++) { // !!!!!!!!!!!!!!
//         A[i][j] = Math.floor(Math.random()*10);
//         document.write(A[i][j] + ' ');
//     }
//     document.write('<br />');
// }

// console.log(A)


// ---------------------------



n = 50;
m = 50;

A = new Array(n);

for(i = 0; i < A.length; i++) {
    // A[i] = new Array(m + Math.floor(Math.random()*10 + 1));
    A[i] = new Array(m);
    for(j = 0; j < A[i].length; j++) { // !!!!!!!!!!!!!!
        // A[i][j] = 0;
        A[i][j] = i + ',' + j;

        // главная диагональ
        // if (i == j) { 
        //     A[i][j] = '***'; 
        // }

        // if (i + j == n - 1) {
        //     A[i][j] = '***'; 
        // }

        // if (i > j) { 
        //     A[i][j] = '***'; 
        // }

        // if (i < j) { 
        //     A[i][j] = '***'; 
        // }

        // if (i + j > n - 1) {
        //     A[i][j] = '***'; 
        // }

        // if (i + j == n - 1 - 3) {
        //     A[i][j] = '***'; 
        // }

        // if (i + 3 == j) { 
        //     A[i][j] = '***'; 
        // }

        // if ( (j == 3 || i == 5) && i == j) {
        //     A[i][j] = '***'; 
        // }

        // if ( i >= j ^ i + j < n - 1) {
        //     A[i][j] = '***'; 
        // } else {
        //     A[i][j] = '&nbsp;&nbsp;&nbsp;'; 
        // }


        document.write(A[i][j]);
    }
    document.write('<br />');
}

console.log(A)