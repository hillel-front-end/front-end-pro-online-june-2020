
// console.log('1');

// console.time();
// for(i = 0; i <= 1000; i++) {
//     continue;
// }
// console.timeEnd();

// console.time();
// for(i = 0; i <= 1000; i++) {
//     console.log('cycle');
// }
// console.timeEnd();

// console.time();
// setTimeout(() => { // async code
//     console.timeEnd();
//     console.log('2');
// }, 1000);

// console.log('3');

// -------------------------------------

console.log('1');
document.querySelector('#clickMe').addEventListener('click', () => { // async
    console.log('click me');
});
console.log('2');

for(i = 0; i <= 500000000; i++) {
    continue;
}
console.log('middle');
for(i = 0; i <= 500000000; i++) {
    if (i == 500000000-1000) {
        document.querySelector('#clickMe').click();
    }
    continue;
}


console.log('3');


// document.querySelector('#clickMe').click();
// setTimeout(() => {
//     console.log('timer');
// }, 0)

// for(i = 0; i <= 1000000000; i++) {
//     continue;
// }


// -------------------------------------------------------------------------
// Pseudo code

// let data = {};

// // sync
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'url')
// xhr.send(); // ??????????????????????
// data = xhr.responseText;

// // async
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'url', true)
// xhr.send(); 


// // callback hell
// xhr.addEventListener('readystatechange', () => {
//     data = xhr.responseText;

//     postGettingData()
// })

// function postGettingData() {
//     list.render(data);
// }

// // Promise

// const dataAsync = new Promise(function(resolve, reject){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'url', true)
//     xhr.send(); 

//     xhr.addEventListener('readystatechange', () => {
//         data = xhr.responseText;
//         resolve() // trigger
//     })
// });

// dataAsync
//     .then(postGettingData)
//     .then(postGettingData2)
//     .then(postGettingData3)
//     .then(postGettingData4)
//     .then(postGettingData5)

// dataAsync
//     .then(postGettingData)
//     .then(postGettingData2)
//     .then(postGettingData3)





