/**
 * @description Скрипт отвечает за подсчет скорости загрузки сайта, информация выводится на каждой странице сайта.
 */

window.onload = function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
    document.getElementById("page-load").innerHTML = ('Page load time is '+ loadTime + 'ms');
}