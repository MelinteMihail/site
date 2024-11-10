// Initiliaze AOS Library
AOS.init();

// declare and initialize all variables
const rightnav = document.getElementById('rightnav');
const rightmenu = document.getElementById('rightmenu');
const artinfo = document.getElementById('artinfo');
const arts = artinfo.getElementsByTagName('article');
const numbers_ul = document.getElementById('numbers').getElementsByTagName('ul')[0];
const numbers_lis = numbers_ul.getElementsByTagName('li');
const rightNavBtn = document.querySelector(".rightnav_btn");
const menuNavItems = document.querySelectorAll(".menu_nav_item");
const menuSocialItems = document.querySelectorAll(".menu_social_item");
const artinfoCloseBtn = document.querySelector(".artinfo_closebtn");
const artinfoBtns = document.querySelectorAll(".artinfo_btn");
const articles = document.querySelectorAll(".item");
const blogPosts = document.querySelectorAll(".blog-post");

// declare all the functions

// cine preia control site-ului imi cer scuze, nu stiu altfel pwpici <3
for(let i = 0; i < blogPosts.length; i++) {
    blogPosts[i].addEventListener("mouseenter", () => {
        for(let j = 0; j < blogPosts.length; j++) {
            if(j == i) continue;
            else blogPosts[j].classList.add("darken");
        }
    });

    blogPosts[i].addEventListener("mouseleave", () => {
        for(let j = 0; j < blogPosts.length; j++) {
            blogPosts[j].classList.remove("darken");
        }
    });
}

function rightnav_click() {
    if(rightnav.classList.contains('viz')) {
        rightnav_close();
    } else {
        rightnav.classList.add('viz');
        rightmenu.classList.add('viz');
        artinfo_close();
    }
}
function rightnav_close() {
    rightnav.classList.remove('viz');
    rightmenu.classList.remove('viz');
}



function artinfo_open(i) {
    artinfo.classList.add('viz');
    artinfo.getElementsByClassName('a' + i)[0].classList.add('viz');
}
function artinfo_close() {
    artinfo.classList.remove('viz');
    for(var i = 0; i < arts.length; ++i)
        arts[i].classList.remove('viz');
}

function checkVisible(elm) {
    const rect = elm.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

let count_already_done = false;
window.onscroll = function() {
    if(checkVisible(numbers_ul) && count_already_done == false) {
        count_already_done = true;
        start_count();
    }
};

let count_i = 0, count_step = 10, count_total = 3000;
function start_count() {
    numbers_lis[0].getElementsByTagName('b')[0].textContent = Math.round(count_i / count_total * 8) + "+";
    numbers_lis[1].getElementsByTagName('b')[0].textContent = Math.round(count_i / count_total * 12) + "+";
    numbers_lis[2].getElementsByTagName('b')[0].textContent = Math.round(count_i / count_total * 450) + "+";
    if(count_i >= count_total)
        numbers_lis[3].getElementsByTagName('b')[0].textContent = "+inf";
    else
        numbers_lis[3].getElementsByTagName('b')[0].textContent = Math.round(count_i / count_total * 10000) + "+";
    count_i += count_step;
    if(count_i <= count_total)
        setTimeout(start_count, count_step);
}

// Add event listeners

// change from onload="document.body.classList.add('loaded')"
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

//change from onclick="rightnav_click()"

rightNavBtn.addEventListener("click", rightnav_click);

//change from onclick="rightnav_close()"

for(let i = 0; i < menuNavItems.length; i++) {
    menuNavItems[i].addEventListener("click", rightnav_close);
}

//change from onclick="rightnav_close()"

for(let i = 0; i < menuSocialItems.length; i++) {
    menuSocialItems[i].addEventListener("click", rightnav_close);
}

//change from onclick="artinfo_close()"

artinfoCloseBtn.addEventListener("click", artinfo_close);

//change all event.preventDefault and onclick="artinfo_open(i)" instances

for(let i = 0; i < artinfoBtns.length; i++) {
    artinfoBtns[i].addEventListener("click", (e) => {
        e.preventDefault();
        artinfo_open(i + 1);
    });
}

// check how many articles there are(e.g "Masterminds 2020")
// and calculate flex-basis based on that
const numberOfArticles = articles.length;

for(let i = 0; i < articles.length; i++) {
    if(numberOfArticles > 3) {
        articles[i].style.flex = `0 0 33.33%`;
    } else {
        articles[i].style.flex = `0 0 ${100 / numberOfArticles}%`;
    }
}