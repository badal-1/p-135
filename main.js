function disappear(){
document.getElementById("input_thing").style.visibility="hidden";
}
disappear();
function appear(){
if(document.getElementById("please").innerHTML == "Press here to make the input disappear"){
document.getElementById("input_thing").style.visibility="hidden";
document.getElementById("please").innerHTML="Press here to make the input appear";
document.getElementById("please").style.color="red";

}
else{
document.getElementById("input_thing").style.visibility="visible";
document.getElementById("please").innerHTML="Press here to make the input disappear";
document.getElementById("please").style.color="green";
}
}