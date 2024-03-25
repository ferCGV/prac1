document.addEventListener("DOMContentLoaded", function() {
    const navbar =document.querySelector("header")
    document.addEventListener("scroll",function(){
        if (scrollY>0){
        navbar.classList.add("navbar")
        }else{
            navbar.classList.remove("navbar")
        }
        
    })


})
