// Your code goes here

const bodyBackground = document.querySelector("body");
window.addEventListener('scroll', () => {
    bodyBackground.style.background = '#FFEACD';
});


// 1. mouseenter
const navigation = document.querySelectorAll(".nav-link");
navigation.forEach(el => {
    el.addEventListener('mouseenter', () => {
        event.preventDefault();
        el.style.color = '#F3952C';
    });
});

// 2. mouseleave
navigation.forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.color = 'black';
    });
});

// 3. dblclick
const colorDestination = document.querySelector(".content-destination");
    colorDestination.addEventListener('dblclick', (event) => {
    event.target.style.color = 'green';
});

// 4. mouseover
const intro = document.querySelector(".intro");
intro.addEventListener('mouseover', () => {
    intro.style.background = '#6CC1A2';
});

// 5. mouseout
intro.addEventListener('mouseout', () => {
    intro.style.background = '#85C6CB';
});

// 6. resize
const busImg = document.querySelector(".intro img");
    window.addEventListener('resize', (event) => {
    busImg.src ="https://images.unsplash.com/photo-1443397646383-16272048780e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3264&q=80";
});

// 7. contextmenu

const logoBus = document.querySelector(".logo-heading");
logoBus.addEventListener('contextmenu', (event) => {
    logoBus.style.color = '#F3952C';
});

// 8. load
window.addEventListener('load', () => {
    alert("Hello World!");
});

//9. scroll
const navBar = document.querySelector(".main-navigation");
window.addEventListener('scroll', () => {
    navBar.style.background = '#85c6cb';
});

// 10. click
const button = document.querySelectorAll(".btn");
button.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        el.style.color = 'black';
        el.style.background = '#F3952C';
    });
});

const footerBlue = document.querySelector("footer");
footerBlue.addEventListener('click', (event) => {
    footerBlue.style.background = '#85C6CB';
});
