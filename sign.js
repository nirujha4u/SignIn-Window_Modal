const sign=document.getElementById("sign")
const form=document.getElementById("form")
const close=document.getElementById("close")
const over=document.querySelector(".overlay")
const submit=document.getElementById("submit")

sign.addEventListener("click",()=>{
    if(form.style.display=="block"){
        form.style.display="none";
    }else{
        form.style.display="block";
        over.style.display="block";
    }
})

close.addEventListener("click",function(){
    form.style.display="none";
    over.style.display="none"
})

over.addEventListener("click",function(){
    over.style.display="none";
    form.style.display="none";
})


submit.addEventListener("click",function(){
    window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox")
})