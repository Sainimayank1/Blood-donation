var login_alert = document.getElementById("login1");
var register_alert = document.getElementById("register1");
var btn_movable = document.getElementById("btn");
var form = document.getElementById("form-box");
var login = document.getElementById("login");
var register = document.getElementById("register");


btn_movable.style.left="0%";
login.style.position="relative";
login.style.right="0px";
register.style.position="absolute";
register.style.right="-450px";

login_alert.addEventListener("click", ()=>
{
    login.style.right="0px";
    login.style.position="relative";
    btn_movable.style.left="0%";
    register.style.right="-450px";
    form.style.height="480px";

});


register_alert.addEventListener("click", ()=>
{
    register.style.position="absolute";
    btn_movable.style.left="50%";
    form.style.height="530px";
    login.style.right="350px";
    register.style.right="70px";
});