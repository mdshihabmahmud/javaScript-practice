var nav = document.getElementById('myNav');
var open = document.getElementById('openNav');
var close = document.getElementById('closeNav');

open.addEventListener('click', function(){
	nav.style.left = '0px';
})
close.addEventListener('click', function(){
	nav.style.left = '-250px';
})