var login_alert = document.getElementById("login1");
var register_alert = document.getElementById("register1");
var btn_movable = document.getElementById("btn");
var form = document.getElementById("form-box");
var login = document.getElementById("login");
var register = document.getElementById("register");
// var main_form = document.getElementById("form");


login_alert.addEventListener("click", ()=>
{
    login.style.position="relative";
    btn_movable.style.left="0%";
    form.style.height="480px";
    login.style.right="0px";
    register.style.right="-450px";

});


register_alert.addEventListener("click", ()=>
{
    register.style.position="absolute";
    btn_movable.style.left="50%";
    form.style.height="530px";
    login.style.right="350px";
    register.style.right="70px";
});