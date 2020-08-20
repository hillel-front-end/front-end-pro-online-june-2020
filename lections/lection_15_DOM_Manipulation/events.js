let block = document.querySelector('.block')

// attributes
block.classList.add('active');

block.setAttribute('super', 'puper');
block.removeAttribute('data-savelii');
// block.style.backgroundColor = 'red';

// -------------------------------------------

// content

// block.innerHTML += '<h1>Title HTML</h1> &sim;';
// block.innerText += '<h1>Title TEXT</h1> &sim;';

// console.log(block.innerHTML);
// console.log(block.innerText);


// -------------------------------------------

// setTimeout(function(){
//     block.remove();
// }, 3000)


let h3Element = document.createElement('h3');

h3Element.innerHTML = 'Super h3 title';
h3Element.classList.add('active');

h3Element.addEventListener('click', function(){
    this.innerHTML += ' Clicked!'
});

// document.body.append(h3Element);
// document.querySelector('.block').append(h3Element);

// setTimeout(function(){
//     document.body.append(h3Element);
// }, 2000)

// cloning
// let cloned = document.querySelector('.block').cloneNode(true);

// document.body.append(cloned);

// console.dir(h3Element);

// console.dir(block)


// Render list of names

let users = ['Name 1', 'Name 2', 'Name 3', 'Name 4'];
let target = document.querySelector('.users-container');

let ul = document.createElement('ul');
for(let i = 0; i < users.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = `<span class="special">` + users[i] + `</span>`;
    

    li.addEventListener('click', onClickRemove);

    if (i % 2 == 0) {
        li.classList.add('even')
    }

    ul.append(li);
}

// Fragments
target.append(ul);


function onClickRemove(event) {
    event.target.remove();
}

// menu

const TARGET_MENU_DEFAULT = document.querySelector('.menu-container');

const menu = [
    {
        title: 'Home',
        action: 'homeAction'
    },
    {
        title: 'Store',
        action: 'storeAction',
        submenu: [
            {
                title: 'Buy',
                action: 'buyAction'
            },
            {
                title: 'Products',
                action: 'productsAction'
            },
        ]
    },
    {
        title: 'Contact',
        action: 'contactAction'
    },
    {
        title: 'FAQ',
        action: 'faqAction'
    },
];

// if (users.admin) {
//     menu.push({
//         title: 'Admin',
//         action: 'adminAction'
//     });

//     document.querySelector('menu').append(getMenuItem({
//         title: 'Admin',
//         action: 'adminAction'
//     }));
// }

const menuActions = {
    homeAction: function(){ console.log('homeAction'); },
    storeAction: function(){ console.log('storeAction'); },
    contactAction: function(){ console.log('contactAction'); },
    faqAction: function(){ console.log('faqAction'); },
    productsAction: function(){ console.log('productsAction'); },
    buyAction: function(ev){ ev.stopPropagation(); console.log('buyAction'); },
};

renderMenu(menu);

function renderMenu(source = [], target = TARGET_MENU_DEFAULT) {
    if (!source.length) {
        return;
    }
    let menuFragment = document.createDocumentFragment();
    source.forEach(function(menuItem){
        let divItem = document.createElement('div');
        divItem.classList.add('menu-item')
        divItem.innerHTML = menuItem.title;
        if(menuItem.submenu){
            divItem.append(getSubMenu(menuItem.submenu));
        }

        divItem.addEventListener('click', menuActions[menuItem.action]);
        // item.addEventListener('click', function() {
        //     menuActions[menuItem.action]();
        // });

        menuFragment.append(divItem)
    });

    target.append(menuFragment)
}

function getSubMenu(source) {
    let menuFragment = document.createElement('div');
    menuFragment.classList.add('menu-item-wrap');
    source.forEach(function(menuItem){
        menuFragment.append(getMenuItem(menuItem))
    });

    return menuFragment;
}

function getMenuItem(menuItem) {
    let divItem = document.createElement('div');
    divItem.classList.add('menu-item')
    divItem.innerHTML = menuItem.title;

    if(menuItem.submenu){
        divItem.innerHTML += getSubMenu(menuItem.submenu);
    }
    

    divItem.addEventListener('click', menuActions[menuItem.action]); 

    return divItem;
}


// ---------------------------------
// function getMenuItemForES6(menuItem) {
//     return `<div class="menu-item">${menuItem.title}</div>`;
// }

// let menuStr = `
//     <div class="menu-container">
//         ${menu.map(menuItem => `
//             <div class="menu-item">
//                 ${menuItem.title}
//                 ${menuItem.submenu ? `<div class="menu-item-wrap">${menuItem.submenu.map(val => getMenuItemForES6(val)).join('')}</div>` : ``}
//             </div>
//         `).join('')}
//     </div>
// `;

// document.body.innerHTML += menuStr;