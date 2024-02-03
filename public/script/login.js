let show=document.querySelector(".showpassword")
let input=document.querySelector(".input-password");
show.addEventListener("click",(event)=>{
    if(input.type=="password"){
        input.type="text";
    }else{
        input.type="password";
    }
})