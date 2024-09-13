let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket')
let text = document.getElementById('text');
let text2 = document.getElementById('text2');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 0.5 + 'px';
    text2.style.marginBottom = value * 0.25 + 'px';
    meteorid.style.top = value * 0.35 + 'px';
});

