window.addEventListener('load', function(){
    // let items = document.querySelectorAll('.container .item');

    // items.forEach(function(elem){
    //     elem.addEventListener('click', function(ev){
    //         console.log('Item - ', this, ev.target);
    //     })
    // });


    // let container = document.querySelector('.container');

    // container.addEventListener('click', function(ev){
    //     console.log('Container - ', this, ev.target);
    // })


    // document.body.addEventListener('click', function(ev){
    //     console.log('Body - ', this, ev.target);
    // })

    // document.querySelector('.block').addEventListener('click', function(ev){
    //     console.log('Block - ', this, ev.target);
    // })


    // let actionItems = document.querySelectorAll('.container, .item, .block, body');
    let actionItems = document.querySelectorAll('.item');
    // let actionItems = document.querySelectorAll('.container');

    actionItems.forEach(function(elem){
        elem.addEventListener('click', function(ev){
            // if (!ev.target.classList.contains('item')) {
            //     return;
            // }
            // console.log(this);
            console.log(this==ev.currentTarget);
            // ev.target.classList.add('ACTIVE');
            // this.classList.add('ACTIVE');

            setTimeout(() => {
                console.log(this==ev.currentTarget);
                // debugger
            }, 1000)
        })
    });

})