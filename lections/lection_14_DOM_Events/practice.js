/*
Реализовать контекстное (event = contextmenu) меню. Список хранить в памяти. // Почитать про event.preventDefault()

Хранить в списке action - название функции которая будет выполнятся при нажатии на пункт меню из задания №1.

Меню должно всегда открыватся в окне, не создавая скрола.

*/

window.addEventListener('load', function(){
    const context = document.querySelector('.contextmenu-container');

    document.addEventListener('contextmenu', function(event){
        console.time()
        event.preventDefault();
        let clientX = event.clientX;
        let clientY = event.clientY;

        let contextStyle = window.getComputedStyle(context);
        let wContext = parseInt(contextStyle.getPropertyValue('width')) + 2*parseInt(contextStyle.getPropertyValue('border-width'));
        let hContext = parseInt(contextStyle.getPropertyValue('height')) + 2*parseInt(contextStyle.getPropertyValue('border-width'));

        let wWidth = window.innerWidth;
        let hWidth = window.innerHeight;

        
        if(clientX >= wWidth - wContext) {
            clientX -= wContext;
        }

        if(clientY >= hWidth - hContext) {
            clientY -= hContext;
        }
       
        context.classList.add('show');
        context.style.left = clientX + 'px';
        context.style.top = clientY + 'px';

        document.addEventListener('click', onHideContextMenu);
        console.timeEnd()
    })

    
    
    function onHideContextMenu(event){
        console.log('REMOVE');
        context.classList.remove('show');
        document.removeEventListener('click', onHideContextMenu);
    }
})
