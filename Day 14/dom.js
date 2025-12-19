console.log("Today we are going to learn down object")
let h1 =document.querySelector("#heading");
console.log(h1)
let p=document.querySelector(".para");
console.log(p);
let tag=document.querySelector("h3")
console.log(tag);
let all=document.querySelectorAll(".para");
console.log(all[0].innerText);

all[0].innerText="paragraph2"
all[1].innerHTML="<i> This is itallic </i>"

all[1].style.backgroundColor="red";
document.body.style.backgroundColor="pink";

console.log(all[1].className);
console.log(all[1].classList);
all[1].classList.add("para4")

//remove
all[1].classList.remove("para4")
console.log(all[1].classList.contains("para1"));
console.log(all[1].classList.contains("para4"));

//Toggle
all[1].classList.toggle("para3")

let h4=document.createElement("h4");
console.log(h4);
h4.innerHTML="span"
h4.innerText="pikun is a good boy"
let h5=document.createElement("h5");
h5.innerText="This is heading 5"

//document.body.appendChild(h4)
document.body.append(h4,h5);

let b =document.createElement("b");
b.innerText="this is bold tag "
console.log(b)

let div=document.querySelector(".parent");
console.log(div)
div.after(b)

/*
//prepend
div.prepend(b)
//append
div.append(b)
//before
div.before(b)
//after
div.after(b)
//appendchild
div.appendChild(b)
*/

let handleBtn=()=>{
    console.log("click");
}
let pikun= document.getElementById("btn1")
console.log(pikun)

pikun.onclick=()=>{
    console.log('Debasis');
    
}


let pbody=document.getElementById("paragraph");
console.log(pbody);
pbody.addEventListener("dblclick",()=>{
    console.log("para double click");
    

})
pbody.addEventListener("mousedown",()=>{
    console.log("mouse down");
})
pbody.addEventListener("mouseup",()=>{
    console.log("mouse up");
})

pbody.style.backgroundColor="red";
pbody.addEventListener("mousemove",()=>{
    console.log("mouse move");
})
pbody.addEventListener("mouseenter",()=>{
    console.log("mouse enter")
})