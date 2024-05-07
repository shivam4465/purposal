console.log("hello");
let container=document.querySelector(".container");
let image=document.querySelector(".images");
let btn1=document.querySelector(".yes");
let btn2=document.querySelector(".buttongroup--no");
let para=document.querySelector(".para");

let currentindex=0;
let imgs=["image1.gif","image3.gif","image2.gif","image4.gif","image5.gif"];

let msg_change=0;
let count=0;
const disable=()=>{
    if(count>=3){
        btn2.classList.add("move")
    btn2.addEventListener("mouseover",movehover)
    
    console.log("hello")
    
    
    }
}
const movehover=()=>{
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*300)+1;

    btn2.style.left=i+"px";
    btn2.style.top=j+"px";
}





let changepara=()=>{
    if(msg_change===1){
        para.innerText="souch lo acche se ....🫠";
    }
    else if(msg_change===2){
        para.innerText="manja na yrr🥺";
    }
    else if(msg_change===3){
        para.innerText="kitna bhao khaygi manja yrrrrrrrr😩";
    }
}


const update=()=>{
image.src=imgs[currentindex];
}

btn1.addEventListener("click",()=>{
    currentindex=4;
    para.innerText="yes i knew it yeee!😘";
    update();
})
btn2.addEventListener("click",()=>{
    currentindex=(currentindex+1)%imgs.length;
    count++;
    msg_change++;
    changepara();
    
    disable();
    update();
})
