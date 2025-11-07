let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', () => {
    let value = scrollY;
    console.log(value);
    
    bg.style.top =  value * 0.85 + 'px';
    moon.style.left =  value * -0.5 + 'px';
    mountain.style.top =  value * -0.10 + 'px';
    road.style.top =  value * 0.25 + 'px';
    text.style.top =  value * 0.65 + 'px';
})