

window.onload = function(){
    // console.dir(document.body);


    // 1

    // console.log(document.body.className);
    // document.body.className += ' block';
    // document.body.className = document.body.className.replace(' pro', '');

    // document.body.classList.add('block');
    // document.body.classList.remove('pro');

    // setInterval(function(){
    //     document.body.classList.toggle('block');
    // }, 2000);

    // console.log(document.body.classList.contains('block'));
    let x = 1000;

    // 2 query
    // old
    // var specialText = document.getElementById('special');
    // specialText.classList.add('bold');
    // specialText.innerHTML += ' <br><ul><li>'+ x +'</li></ul>SUPER';
    // console.dir(specialText.innerHTML);

    // var buttons = document.getElementsByClassName('btn-main');
    // console.log(buttons);

    // for(var i = 0; i < buttons.length; i++) {
    //     buttons[i].classList.add('bold');
    // }

    // // super
    // var specialText = document.querySelector('.special-text');
    // specialText.classList.add('bold');
    // specialText.innerHTML += ' <br><ul><li>'+ x +'</li></ul>SUPER';
    // console.dir(specialText);

    // console.time();
    // buttons = document.querySelectorAll('.btn-main');
    // console.timeEnd();
    // console.time();
    // buttons2 = document.getElementsByClassName('btn-main')
    // console.timeEnd();
    // console.time();
    // for(var i = 0; i < buttons.length; i++) {
    //     buttons[i].classList.add('bold');
    // }
    // console.timeEnd();

    // console.time();
    // buttons.forEach(function(btn){
    //     btn.classList.add('bold');
    // });
    // console.timeEnd();

    // console.time();
    // for(var i = 0; i < 1000; i++) {
    //     console.log('copy')
    // }
    // console.timeEnd();

    
    // let list = [];
    // list.length = 1000;
    // for(let i = 0; i < list.length; i++) {
    //     list[i] = i;
    // }
    // console.time();
    // list.forEach(function(btn){
    //     console.log('copy')
    // });
    // console.timeEnd();

    // ------------------------------------

    let block = document.querySelector('.block-example');

    console.dir(block.style);

    // block.style.color = 'red';
    // block.style.backgroundColor = 'aqua';
    // block.style.fontWeight = 'bold';

    // block.style.cssText = `
    //     color: red;
    //     background-color: aqua;
    //     font-weight: bold;
    // ` ;

    // setInterval(function(){
    //     block.style.fontSize = Math.floor(Math.random()*100 + 50) +'px';
    // }, 500);

    // block.style.cssText += 'border-radius: 15px;';

    
    setInterval(function() {
        var r = getRand();
        var g = getRand();
        var b = getRand();
        block.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
    }, 3000)

};

function getRand() {
    return Math.floor(Math.random()*256);
}




