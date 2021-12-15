let drop_down = document.getElementsByClassName('drop_down');
let main_items = document.getElementsByClassName('main_items');
let menu_button = document.getElementById('menu_button');
let side_bar = document.getElementsByClassName('side_bar')[0];
let nav_bar = document.getElementsByClassName('nav_bar')[0];
let search_box = document.getElementById('search_box');
let search_button = document.getElementById('search_button');
let admin_settings = document.getElementById('administrator');
let notification = document.getElementsByClassName('notification')[0];
let nav_sub_menu = document.getElementsByClassName('nav_sub_menu');

for(let i = 0; i < drop_down.length; i++)
{
    main_items[i].addEventListener('click', () => {
        if(side_bar.classList.contains('show'))
        {
            drop_down[i].classList.toggle('active');
        }
    });
}

menu_button.addEventListener('click', () => {
    side_bar.classList.toggle('show');
    if(side_bar.classList.contains('show'))
    {
        nav_bar.style.setProperty('--width', '300px')
    }
    else
    {
        nav_bar.style.setProperty('--width', '100px');
    }
});

search_button.addEventListener('click', () => {
    search_box.classList.toggle('show');
});


notification.addEventListener('click', () => {
    nav_sub_menu[0].classList.toggle('show');
});

admin_settings.addEventListener('click', () => {
    nav_sub_menu[1].classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if(e.target.closest('#administrator')) return;
    else if(!e.target.closest('#administrator'))
    {
        if(nav_sub_menu[1].classList.contains('show'))
        {
            nav_sub_menu[1].classList.remove('show');
        }
    }

    if(e.target.closest('.notification')) return;
    else if(!e.target.closest('.notification'))
    {
        if(nav_sub_menu[0].classList.contains('show'))
        {
            nav_sub_menu[0].classList.remove('show');
        }
    }
});