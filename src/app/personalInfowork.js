var personal = document.querySelector('.info__personal');
var account = document.querySelector('.info__account');
var account_info = document.querySelector('.account');
var about = document.querySelector('.about');
personal.onmousedown = push;
function push(){
    personal.classList.add("info__information--active");
    account_info.setAttribute("style", "display: none");
    about.setAttribute("style", "display: flex");
    account.classList.remove("info__information--active");
}
account.onmousedown = pushNext;
function pushNext(){
    account.classList.add("info__information--active");
    account_info.setAttribute("style", "display: flex");
    about.setAttribute("style", "display: none");
    personal.classList.remove("info__information--active");
}