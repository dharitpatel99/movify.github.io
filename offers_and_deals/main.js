var cpnBtn = document.getElementById("cpnBtn");
var cpnCode = document.getElementById("cpnCode");

cpnBtn.onclick = function(){
    navigator.clipboard.writeText(cpnCode.innerHTML);
}