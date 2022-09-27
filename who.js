let openBtn=document.getElementById("btn-open");
let modalcntnr=document.querySelector(".modal-container");
let closebtn=document.querySelector(".close-btn");

openBtn.addEventListener('click',function(){
    modalcntnr.style.display="block";
});


closebtn.addEventListener('click',function(){
    modalcntnr.style.display="none";
});

window.addEventListener('click',function(e){
if(e.target===modalcntnr){
    modalcntnr.style.display="none";
}
});