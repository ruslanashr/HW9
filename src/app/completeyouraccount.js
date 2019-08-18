var password = document.getElementById('password');
var check_result = document.querySelector('.check__result');
var result = document.getElementsByClassName('result');
password.onkeydown = handle;
function handle(e){
    var value = password.value;
    if (value.length >= 0 && value.length <= 4){
        check_result.setAttribute("style", "display: flex");
        password.setAttribute("style", "box-shadow: none");
        result[0].classList.add("color-red");
        result[0].classList.remove("color-orange");
        result[1].classList.remove("color-orange");
    }
    else if (value.length > 4 && value.length <= 7){
        result[0].classList.remove("color-red");
        result[0].classList.add("color-orange");
        result[1].classList.add("color-orange");
        result[0].classList.remove("color-green");
        result[1].classList.remove("color-green");
        result[2].classList.remove("color-green");
    }
    else if (value.length > 7){
        result[0].classList.remove("color-orange");
        result[1].classList.remove("color-orange");
        result[0].classList.add("color-green");
        result[1].classList.add("color-green");
        result[2].classList.add("color-green");
    }
    if (value.length < 1){
        check_result.setAttribute("style", "display: none");
    } 
}