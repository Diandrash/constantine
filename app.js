const menu = document.querySelector('.iconmenu')
const ul = document.getElementsByTagName('ul')[0];


menu.addEventListener('click', function() {
    ul.classList.toggle('slider')
});

