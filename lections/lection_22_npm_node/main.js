function request(method = "GET", path) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                reject(xhr.statusText);
            }

            resolve(xhr.responseText)
        })
        xhr.open(method, path, true);

        xhr.send();
    });
}

// request('GET', '/users.json')
//     .then(data => console.log(JSON.parse(data)));


// fetch('/users.json', {
//     method: 'GET'
// })
// .then(resp => resp.json())
// .then(resp => console.log(resp))

// fetch('/data1.txt', {
//     method: 'GET'
// })
// .then(resp => resp.text())
// .then(resp => console.log(resp))

// ---------------------------------------------------------------

Promise.all([
    fetch('/data1.txt'),
    fetch('/data2.txt'),
    fetch('/data3.txt')
])
.then(responses => Promise.all(responses.map(resp => resp.text())))
.then(values => console.log(values));