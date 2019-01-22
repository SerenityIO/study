function SignIn(){
    if((document.getElementById("login").value=="admin") && (document.getElementById("password").value=="admin")){
        HiteError();
    } else ViewError();
}

function ViewError(){
    document.getElementById("err").style.display="block";
}
function HiteError(){
    document.getElementById("err").style.display="none";
}