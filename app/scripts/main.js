$(document).ready(function(){function e(){o=document.getElementById("logo"),o.style.position="absolute",o.style.top="30px",o.style.left="-200px",o.style.visibility="hidden",i()}function i(){parseInt(o.style.left)<=40?(o.style.left=parseInt(o.style.left)+5+"px",o.style.visibility="visible",t=setTimeout(i,20)):n()}function n(){clearTimeout(t)}$("#cssmenu").prepend('<div id="menu-button">Menu</div>'),$("#cssmenu #menu-button").on("click",function(){var e=$(this).next("ul");e.hasClass("open")?e.removeClass("open"):e.addClass("open")});var t,o=null;window.onload=e,$(window).load(function(){$("#carousel").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,itemWidth:210,itemMargin:5,asNavFor:"#slider"}),$("#slider").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,sync:"#carousel"})})});