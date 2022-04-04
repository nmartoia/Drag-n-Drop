let div = document.querySelectorAll("div")
let droite = document.querySelector(".droite")
for(let i = 0 ; i<div.length;i++){
div[i].addEventListener("mousedown",function(c){
    let car = document.createElement("div")
    droite.appendChild(car)
        if(div[i].className=='red'){
            car.className='red';
        }
        else if(div[i].className==='blue'){
            car.className='blue';
        }
        else if(div[i].className==='green'){
            car.className='green';
    }
})
window.addEventListener("mousemove",function(e){
    x=e.clientX;
    y=e.clientY
})
}