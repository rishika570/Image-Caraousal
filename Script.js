var prev=document.querySelector(".prev");
var next=document.querySelector(".next");
var images=document.querySelector(".caraousal").children;
total=images.length;

var index=0;
prev.addEventListener("click",()=>{
    nextImage("prev");
});
next.addEventListener("click",()=>{
    nextImage("next");
});

function nextImage(direction){
    if(direction=="next"){
        index++;
        if(index==total){
            index=0;
        }
    }
    else{
     if(index==0){
        index=total-1;
     }
     else{
        index--;
     }
    }
    for(let i=0;i<total;i++){
        images[i].classList.remove('main');
    }
    images[index].classList.add('main');
}