
// console.log('1');
// console.log('2');

// setTimeout(() => { // async
//     console.log('3');
//     console.log('4');
// }, 1000);

function random(){
    return Math.floor(Math.random()*1000 + 500)
}



// const promised = new Promise((resolve, reject) => {
//     const time = random();
//     // async code here
//     setTimeout(() => {
//         console.log('Async code');

//         // if (time > 1000) {
//             resolve(time);
//         // }

//         // reject(time);
//     }, time);
// });


// promised
//     .then(value => {
//         console.log('after', value);

//         return value;
//     })
//     .catch(value => {
//         console.log('rejected after', value);

//         return value;
//     })
//     .finally(() => {
//         console.log('finally');
//     });



// promised
//     .then(asyncNumberTwo)
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(2);
//                 reject();
//             }, 1000);
//         });
//     })
//     .then((value) => {
//         console.log(3, value);
//     })
//     .catch((error) => {
//         console.log('rejected', 3, error);
//     });



// function asyncNumberTwo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(1);
//             // resolve();
//             reject();
//         }, 1000);
//     });
// }

// promised.then(onPromiseResolve, onPromiseReject)

// function onPromiseResolve() {}
// function onPromiseReject() {}



// fetch(firstUrl)
//     .then(data => {
//         return fetch(data.url)    
//     })
//     .then((afterData) => {
//         console.log(afterData)
//     })


// async function gettingData() {
//     const data = await fetch(firstUrl);
//     const afterData = await fetch(data.url);

//     console.log(afterData)
// }

// ------------------------------------------------

function getAsync(title = 'async default', cb = () => {}) {
    return new Promise((resolve, reject) => {
        const timer = random();
        const isFulfilled = cb(timer);

        setTimeout(() => {
            if (isFulfilled) {
                resolve(`${title} - ${timer}`);
            }

            reject(title)
        }, timer)
    });
}

const async1 = getAsync('title 1', value => value > 700);
const async2 = getAsync('title 2', value => value > 100);
const async3 = getAsync('title 3', value => value > 800);
const async4 = getAsync('title 4', value => value !== 0);

const asyncList = [];
asyncList.push(async1);
asyncList.push(async2);
asyncList.push(async3);
asyncList.push(async4);

// console.time();
// Promise.all(asyncList)
//     .then(allValues => console.log(allValues))
//     .catch(error => console.warn(error))

// Promise.allSettled(asyncList)
//     .then(allValues => console.log(allValues));

// Promise.race(asyncList)
//     .then(value => {
//         console.log(value)
//     },
//     error => {
//         console.warn(error)
//     });