let popup=document.querySelector(".popup");
let triangle=document.querySelector(".triangle-down");
let logoImage=document.querySelector(".share");
let logoImage2=document.querySelector(".logo2");
let bodyclck=document.getElementsByTagName("body");


const logo = document.querySelector(".logo")

logo.addEventListener("click",function(){
    popup.style.visibility = "visible";
    triangle.style.visibility = "visible";
    
   
    logoImage2.style.backgroundColor = "#6E8098";
    
});

bodyclck.addEventListener("click",function(){
    popup.style.visibility = "hidden"; 
 
    
});
