var body = document.querySelector('body');
var blauw = document.querySelector('input[name=blauw]');
var bruin = document.querySelector('input[name=bruin]');

blauw.onclick = function () {
    body.classList.toggle('blauw');
}

bruin.onclick = function () {
    body.classList.toggle('bruin');
}