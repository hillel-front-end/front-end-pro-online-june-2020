
// window.onload = function() {

//     let block = document.querySelector('.block');


//     // DOM Level 0
//     // Add Event Handler
//     // block.onclick = function() {
//     //     console.log('click');
//     // }

//     block.onmouseover = function() {
//         // console.log('mouseover', this);
//         // f1();
//         // f2();
//     }

//     // Remove Event handler
//     setTimeout(function() {
//         block.onmouseover = null;
//     }, 2000)

//     console.dir(block)


//     // DOM Level 2
//     // Add Event Handler
//     block.addEventListener('click', function() {
//         console.log('click');
//     });

//     block.addEventListener('mouseover', f1);
//     block.addEventListener('mouseover', f2);

//     // Remove Event handler
//     block.removeEventListener('mouseover', f1);
//     block.removeEventListener('mouseover', f2);
// }


// function f1() {
//     console.log('mouseover 1', this);
// }
// function f2() {
//     console.log('mouseover 2', this);
// }


// -----------------------------------------


window.addEventListener('load', function() {

    let block = document.querySelector('.block');
    let textarea = document.querySelector('.textarea');

    // Mouse events

    // block.addEventListener('mouseover', handler)
    // block.addEventListener('mouseout', handler)
    // block.addEventListener('mousemove', handler)

    // block.addEventListener('mouseenter', handler)
    // block.addEventListener('mouseleave', handler)

    // block.addEventListener('click', handler);
    // block.addEventListener('dblclick', handler);
    // block.addEventListener('contextmenu', handler);

    // block.addEventListener('mousedown', handler);
    // block.addEventListener('mouseup', handler);


    // Keyboard Events
    // textarea.addEventListener('keydown', handler);
    // textarea.addEventListener('keypress', handler);
    // textarea.addEventListener('keyup', handler);

    // Input events
    // textarea.addEventListener('input', handler);
    // textarea.addEventListener('change', handler);

    // Focus Events
    // textarea.addEventListener('focus', handler);
    // textarea.addEventListener('blur', handler);

    // ---------------------------------------
    // let checkbox = document.querySelector('#checkbox');
    // let select = document.querySelector('#select');
    
    // checkbox.addEventListener('change', handler)
    // checkbox.addEventListener('input', handler)
    // checkbox.addEventListener('focus', handler)
    // checkbox.addEventListener('blur', handler)

    // select.addEventListener('change', handler)
    // select.addEventListener('input', handler)
    // select.addEventListener('focus', handler)
    // select.addEventListener('blur', handler)
    // select.addEventListener('keydown', handler)

})

// function handler(event) {
//     if (event.shiftKey) {
//         return;
//     }
//     console.log(event.type, event);
// }


// ----------------------------

let step = 5;

window.addEventListener('load', function(){
    let block = document.querySelector('.block');

    document.addEventListener('keydown', function(event){
        const target = block;
        if (event.keyCode === 37) {
            console.log('left');
            target.style.left = target.offsetLeft - step + 'px';
        } else if (event.keyCode === 38) {
            console.log('top');
            target.style.top = target.offsetTop - step + 'px';
        } else if (event.keyCode === 39) {
            console.log('right');
            target.style.left = target.offsetLeft + step + 'px';
        } else if (event.keyCode === 40) {
            console.log('bottom');
            target.style.top = target.offsetTop + step + 'px';
        } 
    })


    let catched = false;

    setInterval(() => {
        if(catched) {
            return;
        }
        let x = window.innerWidth - block.offsetWidth;
        let y = window.innerHeight - block.offsetHeight;

        block.style.left = getRand(x) + 'px';
        block.style.top = getRand(y) + 'px';
        block.style.backgroundColor = 'rgb('+getRand(256)+', '+getRand(256)+', '+getRand(256)+')';
    }, Math.floor(Math.random()*200 + 100));

    block.addEventListener('mousedown', function() {
        catched = true;
    })

    block.addEventListener('mouseup', function() {
        catched = false;
    })

    function getRand(max) {
        return Math.floor(Math.random()*max);
    }
})
