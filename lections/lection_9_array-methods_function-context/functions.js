// Array (methods=functions)


list = [1, 8, -9, 5 ,-98, 4, 5,-46];

// list[1000] = 'LAST';
for(let i = 0; i < list.length;i++) {
    // console.log(i, list[i], list);
}

console.log('-------------------');

let result;

// foreach - просто перебирает
// list[1000] = 'LAST';
result = list.forEach(function(value, index, source){
    // console.log('DONE', value, index, source)
    // console.log('next - ', source[index + 1])
    // console.log(index, value)
    // console.log(value, index, source)
});
// console.log('RESULT - ', result);

// map - просто преобразовывает
result = list.map(function(value, index, source){
    // console.log(value, index, source);

    return Math.abs(value*10);
});
// console.log('RESULT - ', result);



users = [
    { name: 'Vasya', point: 5 },
    { name: 'Katya', point: 5 },
    { name: 'Petya', point: 3 },
    { name: 'Mariya', point: 4 },
    { name: 'Unknown', point: 2 },
];


points = users.map(function(usr) {
    return usr.point;
});
// console.log(users);
// console.log(points);

let counter = 2001;
schoolInfo = points.map(function(value){
    // console.log(source[source.length-1-index]);
    return {
        id: 'id-'+counter++,
        point: value
    }
    // return ['id-'+counter++, value];
})

// console.log('schoolInfo', schoolInfo);




// filter - просто фильтрует
result = list.filter(function(value, index, source){
    return value > 0;
});
// console.log(list)
// console.log('RESULT - ', result);


// list = [1, 800, -9, 5 ,-98, 4, 5,-46];
// // some
// result = list.some(function(value){
//     // console.log(value);
//     return value >= 100;
// });
// // console.log('RESULT - ', result);

// // every
// result = list.every(function(value){
//     console.log(value);
//     return typeof value == 'number';
// });
// console.log('RESULT - ', result);

// ---------------------------------------------------

// reduce

list = [-12, 800, -9, 5 ,-98, 4];

// result = list.reduce(function(prev, value){
//     return prev + value;
// }, 0);
// result = list.reduce(function(prev, value){
//     if (value > 0) {
//         return prev + value;
//     } 

//     return prev;
// }, 0);
result = list.reduce(function(prev, value, index){
    if (value > 0) {
        return prev + value;
    } 

    return prev;
}, 0);
// console.log('RESULT - ', result);

/*
index = 0
value = 12
prev = 0 (from second argument)
-----------------------------
index = 1
value = 800
prev = 12
-----------------------------
index = 2
value = -9
prev = 812
-----------------------------
index = 3
value = 5
prev = 803
-----------------------------
index = 4
value = -98
prev = 808
-----------------------------
index = 5
value =  4
prev = 710
-----------------------------

return 714
*/


let data = {
    x: 2,
    sum: '123eads',
    list: [1,4,64,64,6,46, 'adads', false, 123],
    example: {},
    arr: [1, 2, 3],
    ssd: [6,7,67,6],
    s:[1,2,32,3]
};

let values = Object.values(data);

values = Object.values(data).filter(function(item){
    return Array.isArray(item);
})

// let concated = values.reduce(function(prev, item){
//     return prev.concat(item);
// })
// .reduce(function(prev, item) {
//     if (typeof item == 'number') {
//         return prev + item;
//     }
//     return prev;
// }, 0)

// let concated = values.reduce(function(prev, item){
    
//     prev.source = prev.source.concat(item);
//     prev.sum += item.reduce(function(prev, item){
//         if (typeof item == 'number') {
//             return prev + item;
//         }
//         return prev;
//     }, 0);

//     return prev;
// }, { source: [], sum: 0 })
// console.log(values, concated);