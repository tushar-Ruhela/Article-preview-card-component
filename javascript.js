let popup=document.querySelector(".popup");
let triangle=document.querySelector(".triangle-down");
let logoImage=document.querySelector(".share");
let logoImage2=document.querySelector(".logo2");
let bodyclck=document.getElementsByTagName("body");


const logo = document.querySelector(".logo")
let show=true;
logo.addEventListener("click",function(){

    if(show==true){
    popup.style.visibility = "visible";
    triangle.style.visibility = "visible";
    logoImage2.style.backgroundColor = "#6E8098";
    popup.style.transition = "transform 10s ease-in-out";
    triangle.style.transition = "transform 10s ease-in-out";


    show=false;
    }
    else{
        popup.style.visibility = "hidden";
        triangle.style.visibility = "hidden";
    popup.style.transition = "transform 10s ease-in-out";
    
    show=true;
    }
});

let logoClose=document.getElementsByClassName("logo2")[0];

logoClose.addEventListener("click",function(){
    popup.style.visibility = "hidden";
    triangle.style.visibility = "hidden";
    popup.style.transition = "transform 10s ease-in-out";
    triangle.style.transition = "transform 10s ease-in-out";

});
