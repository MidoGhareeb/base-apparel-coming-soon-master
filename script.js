
let error=document.querySelector(".error");
let errLabel=document.querySelector(".input label")
function validation(){
    let email = document.getElementById("email").value;
    let regx=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if(regx.test(email)){
        location.reload()
    }else{
        error.style.display="block"
        errLabel.style.display="block"
        document.getElementById("email").style.borderColor="hsl(0, 93%, 68%)"
    }
}