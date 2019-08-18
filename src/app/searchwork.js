var mapShow = document.querySelector('.topSection__map');
var resultsShow = document.querySelector('.topSection__results');
var search_result = document.querySelector('.search-result');
var map = document.querySelector('.map');
mapShow.onmousedown = push;
function push(){
    search_result.setAttribute("style", "display: none");
    map.setAttribute("style", "display: flex");
}
resultsShow.onmousedown = pushNext;
function pushNext(){
    search_result.setAttribute("style", "display: flex");
    map.setAttribute("style", "display: none");
}