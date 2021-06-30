const deletePopUp = document.querySelector(".deletePopUp");
const deletePopUpText = document.querySelector(".deletePopUp .wrap");
const deleteBtn = document.querySelector(".deleteBtn");

deleteBtn.addEventListener("click",function(){
    if(deleteBtn.classList.contains("active")){
        deleteBtn.classList.remove("active");
        deletePopUpText.innerHTML = "Delete Button Deactivated"
        deletePopUp.style.display = 'flex';
        deletePopUp.classList.add('activePopUp')
        setTimeout(function(){
            deletePopUp.classList.remove('activePopUp')
        },1000);
    }else{
        deleteBtn.classList.add("active");
        deletePopUpText.innerHTML = "Delete Button Activated"
        deletePopUp.style.display = 'flex';
        deletePopUp.classList.add('activePopUp')
        setTimeout(function(){
            deletePopUp.classList.remove('activePopUp')
        },1000);
    }
})