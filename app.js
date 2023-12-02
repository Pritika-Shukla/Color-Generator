let btn=document.querySelector("button");

btn.addEventListener("click",function() {
let randomColor=getRandomColor();
let h2=document.querySelector("h2");
h2.innerText=randomColor;
let box=document.querySelector("div");
box.style.backgroundColor=randomColor;
})

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);

    let color=`rgb(${red},${blue},${green})`;
    return color;
}

