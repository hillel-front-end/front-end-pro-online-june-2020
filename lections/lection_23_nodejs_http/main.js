
// fetch('/data1.json')
//     .then(resp => resp.json())
//     .then(console.log)


// fetch('/users?user-id=3')
//     .then(resp => resp.json())
//     .then(console.log)



// fetch('/users?all')
//     .then(resp => resp.json())
//     .then(resp => {
//         document.body.innerHTML += `<ul>${resp.map(item => `<li>${item.name}</li>`).join('')}</ul>`;
//     })



// -------------------------------------

window.addEventListener('load', () => {
    document.querySelector('#addUser').addEventListener('click', () => {
        const userNameField = document.querySelector('#user-name');
        const userName = userNameField.value;

        if (userName === '') {
            return console.warn('Name is empty')
        }

        fetch('/user/add', {
            method: 'POST',
            body: JSON.stringify({
                userName
            })
        }).then(() => {
            userNameField.value = '';
        })
    })

    document.querySelector('#removeUser').addEventListener('click', () => {
        const userIdField = document.querySelector('#user-delete-id');
        const userId = userIdField.value;

        if (userId === '') {
            return console.warn('Id is empty')
        }

        fetch('/user/remove', {
            method: 'DELETE',
            body: JSON.stringify({
                userId: Number(userId)
            })
        }).then(() => {
            userIdField.value = '';
        })
    })
    
    
})