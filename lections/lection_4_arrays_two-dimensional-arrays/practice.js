n = 15;
m = 20;

A = new Array(n);
for(i = 0; i < A.length; i++) {
    // A[i] = [];
    // A[i].length = m;
    A[i] = new Array(m);
    for(j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random()*90 + 10);

        // document.write(A[i][j] + ' ');
    }
    document.write('<br />');
}


/*
    
1. В двумерном массиве A размером n на m. Заполнить случайными числами.
    1. Найти ряд, где сумма элементов наименьшая
    2. Найти ряд, где сумма элементов найбольшая
    3. Поменять ряды местами (1 и 2 пункт)

*/

// console.log(A);
for (i = 0; i < A.length; i++) {
    inSum = 0;
    for(j = 0; j < A[i].length; j++) {
        inSum += A[i][j];
    } 
    // console.log('inner - ',  inSum, i)

    // minSum = i == 0 ? inSum : inSum < minSum ? inSum : minSum;
    if (i && inSum < minSum) {
        minSum = inSum;
        index_min = i;
        continue;
    } 
    
    if(i && inSum > maxSum) {
        maxSum = inSum;
        index_max = i;
        continue;
    }
    
    if (i == 0) {
        minSum = inSum; // гипотеза min
        index_min = 0;

        maxSum = inSum; // гипотеза max
        index_max = 0;
    } 
}

// console.log('result - ',  minSum, index_min);
// console.log('result - ',  maxSum, index_max);


// swap

// A[index_min] = A[index_max];
// A[index_max] = A[index_min];

temp = A[index_min];
A[index_min] = A[index_max];
A[index_max] = temp;
// console.log(A);

document.write('<hr />');
// for(i = 0; i < A.length; i++) {
//     for(j = 0; j < A[i].length; j++) {
//         document.write(A[i][j] + ' ');
//     }
//     document.write('<br />');
// }

// ---------------------------------------------------------------

// str = 'Hello world!'

// console.log(str)
// console.log(str[4])
// console.log(str.split(''));

// console.log( [5, 7, 8, 1].indexOf(8) );
// console.log( "Hello 1 world 2 test 3!".indexOf(2) );

// console.log( [5, 7, 8, 1].includes() );
// console.log( "Hello 1 world 2 test 3!".includes() );

// console.log( [5, 7, 8, 1].slice(0, 2) );
// console.log( "Hello 1 world 2 test 3!".slice(0, 2) );
// console.log( "Hello 1 world 2 test 3!".substr(0, 2) );




