
	$( document ).ready(function() {
	$('#cssmenu').prepend('<div id="menu-button">Menu</div>');
		$('#cssmenu #menu-button').on('click', function(){
			var menu = $(this).next('ul');
			if (menu.hasClass('open')) {
				menu.removeClass('open');
			}
			else {
				menu.addClass('open');
			}
		});
	});


$( document ).ready(function() {
var imgObj = null;
var animate ;
	function init(){
	   imgObj = document.getElementById('logo');
	   imgObj.style.position= 'absolute'; 
	   imgObj.style.top = '30px';
	   imgObj.style.left = '-200px';
	   imgObj.style.visibility='hidden';
	   moveRight();
	} 
	function moveRight(){
		if (parseInt(imgObj.style.left)<=40)
		{
		   imgObj.style.left = parseInt(imgObj.style.left) + 5 + 'px';
		   imgObj.style.visibility='visible';
		   animate = setTimeout(moveRight,20); // call moveRight in 20msec
		   //stopanimate = setTimeout(moveRight,20);
		  }
		else
		  stop();
		  f();
	}
	function stop(){
	   clearTimeout(animate);
	}
window.onload =init;
});