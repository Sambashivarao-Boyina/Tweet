const editBtn=document.querySelector(".user-profile-pic-edit");
const editOptions=document.querySelector(".user-profile-edit-options");
if(editBtn){
    editBtn.addEventListener("click",(event)=>{
        if(editOptions.style.display==="none"){
            editOptions.style.display="block";
        }else{
            editOptions.style.display="none";
        }
    })
}