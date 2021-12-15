
let menu = document.getElementById('menu_button');
let sideBar = document.getElementsByClassName('sideBar')[0];

menu.addEventListener('click', () => {
    sideBar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if(e.target.closest('.sideBar')) return
    else if(!e.target.closest('.sideBar'))
    {
        if(sideBar.classList.contains('active'))
        {
            sideBar.classList.remove('active');
        }
    }
});
