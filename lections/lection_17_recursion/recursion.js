
function isObject(value) {
    return typeof value === 'object' && value;
}

function deepMerge(obj1, obj2) {
    for (let key in obj2) {
        if (isObject(obj2[key])) {

            if (!isObject(obj1[key])) {
                obj1[key] = {};
            }

            obj1[key] = deepMerge(obj1[key], obj2[key]);

            continue;
        }

        obj1[key] = obj2[key];
    }

    return obj1;
}

const obj = {
    a: 10,
    b: 20,
    c: {
        d: 'deep',
        e: 'deep2'
    }
}

const obj2 = {
    c: {
        f: 'f',
        n: 'n'
    }
}

console.log(deepMerge(obj, obj2));



//n! = n * (n-1)!;

function factorial(n) {
    // debugger;
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

// console.log(factorial(5));

// n = fib(n-1) + fib(n-2)
function fib(index) {
    if (index <= 1) return 1;

    const currentFibNumber = fib(index - 1) + fib(index - 2);

    return currentFibNumber;
}

console.log(fib(7));


const arr = [1, 2, 4, 5, 6, 7];

// console.log(findIndex(arr, 3));

function findIndex(array, numberToFind) {
    return search(array, numberToFind, 0, array.length - 1);
}

function search(array, numberToFind, leftIndex, rightIndex) {
    if (leftIndex >= rightIndex) {
        return leftIndex;
    }

    const middle = Math.floor((rightIndex - leftIndex) / 2);

    if (array[middle] === numberToFind) return middle;

    if (array[middle] > numberToFind) {
        return search(array, numberToFind, leftIndex, middle - 1);
    } else {
        return search(array, numberToFind, middle + 1, rightIndex);
    }
}