function yesClick(){

window.location.href="flower.html";

}



let no=document.getElementById("noBtn");


no.addEventListener("mouseover",()=>{

let x=Math.random()*300;
let y=Math.random()*200;

no.style.left=x+"px";
no.style.top=y+"px";

});
