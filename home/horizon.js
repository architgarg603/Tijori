let container = document.querySelector(".container")

let popup = document.querySelector(".popup")
let signupOpt = document.querySelector(".signupOpt span");
let signup = document.querySelector(".signup");
let signin= document.querySelector(".login");
let signinOpt = document.querySelector(".signinOpt span");
let popupImg = document.querySelector(".popupImg");
let closeBtn = document.querySelectorAll(".close");
let loginBtn = document.querySelector(".LoginBtn");

let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let div4 = document.querySelector(".div4");
let div5 = document.querySelector(".div5");

let subHead = document.querySelector(".workSub")
let head = document.querySelector(".work")

document.addEventListener("scroll",function(){
    let top = container.getBoundingClientRect().top;
    if(top<-470){
        div2.style.opacity = "1"
        div2.style.bottom = "0px"
        
    }
    if(top<-870){
        div3.style.opacity = "1"
        div3.style.bottom = "0px"
        
    }
    if(top<-1450){
        div4.style.opacity = "1"
        div4.style.bottom = "0px"
        
    }
    if(top<-2000){
        div5.style.opacity = "1"
        div5.style.bottom = "0px"
        
    }
})
signupOpt.addEventListener("click",function(){
    popupImg.style.left = "0%"
    popupImg.style.right = "50%"
})
signinOpt.addEventListener("click",function(){
    popupImg.style.right = "0%"
    popupImg.style.left = "50%"
})

closeBtn.forEach(x=>{
    x.addEventListener("click",function(){
        popup.style.display = 'none';
        div2.style.display = "flex";
        div3.style.display = "flex";
        div4.style.display = "flex";
        div5.style.display = "flex";
        head.style.display = "flex";
        subHead.style.display = "flex";
    })
})

loginBtn.addEventListener("click",function(){
    popup.style.display = 'flex';
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    head.style.display = "none";
    subHead.style.display = "none";
})

