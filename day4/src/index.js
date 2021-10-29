const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];

const title = document.querySelector('h2');

const superEventHandler = {
    mouseenter: function () {
        title.innerHTML = 'The mouse is here!';
        title.style.color = colors[0];
    },
    mouseleave: function () {
        title.innerHTML = 'The mouse is gone!';
        title.style.color = colors[1];
    },
    resize: function () {
        title.innerHTML = 'You just resized!';
        title.style.color = colors[2];
    },
    contextmenu: function () {
        title.innerHTML = 'That was a right click!';
        title.style.color = colors[4];
    },
};

title.addEventListener('mouseenter', superEventHandler.mouseenter); //마우스 올렸을때

title.addEventListener('mouseleave', superEventHandler.mouseleave); //마우스 벗어났을때

window.addEventListener('resize', superEventHandler.resize); //화면 사이즈 변했을때

window.addEventListener('contextmenu', superEventHandler.contextmenu); //오른쪽 클릭
