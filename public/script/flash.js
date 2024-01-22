const success=document.querySelector(".success");
const error=document.querySelector(".error");

const successBtn=document.querySelector(".success-btn");
const errorBtn=document.querySelector(".error-btn");

successBtn.addEventListener("click",(event)=>{
    success.style.display="none";
});

errorBtn.addEventListener("click",(event)=>{
    error.style.display="none";
});