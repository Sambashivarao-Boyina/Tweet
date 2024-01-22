
const navBar=document.querySelector(".nav-options");
const navItems=document.querySelector(".nav-items");


navBar.addEventListener("click",(event)=>{
    if(navItems.style.height=="0px"){
        navItems.style.height="auto";
    }else{
        navItems.style.height="0px";
    }
});