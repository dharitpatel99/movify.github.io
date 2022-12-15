 const inputs = document.querySelectorAll(".input");

 function focusFun(){
    let var1= this.parentNode;
     var1.classList.add("focus");
 }

 function blurFun(){
    let var1= this.parentNode;
    if(this.value == ""){
     var1.classList.remove ("focus");
    }
 }

 inputs.forEach(input => {
    input.addEventListener("focus", focusFun);
    input.addEventListener("blur", blurFun);
 }); 