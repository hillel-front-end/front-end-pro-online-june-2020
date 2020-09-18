
// npm, node-static


// XMLHttpRequest <-> AJAX




// fetch = XMLHttpRequest + Promise




// var xhr = new XMLHttpRequest();
// xhr.open('GET', '/users', false); // 10sec
// xhr.send();
// console.log(xhr.responseText);





function myFetch(url){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true); // 10sec
        xhr.send();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4) {
                resolve(xhr.responseText)
            }
        })
    })
}

// myFetch('/users').then(data => console.log(data));



Promise.all([
    myFetch('./data1.txt'),
    myFetch('./data2.txt'),
    myFetch('./data3.txt')
]).then(dataAll => console.log(dataAll))