/*Slider del logo en la cabecera*/

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
		}
		function stop(){
		   clearTimeout(animate);
		}
	window.onload =init;


/*Validacion del formulario de contacto*/
	$("#formulario").validate({
	    rules:
	    {
	        nombre: 
	        {
	            required: true,
	            minlength:2       
	        },
	        telefono: 
	        {
	        	required: true,
	            // Contiene solo dígitos 
				digits : true,
	            // Solo 9 digitos
				minlength : 9
			},
			email: 
	        {
				required: true,
	            //      Email debe ser un correo electrónico válido en apariencia
				email: true,
				minlength: 4,
	            //      Comprueba que el usuario no exista previamente en la bbdd (a través del email)
				remote: "php/validar_email.php"
			},
			conocer: 
	        {
	            allow_single_deselect: true
	        },            
	        direccion: 
	        {
	            required: true
	        },
	        reforma: 
	        {
	            required: true
	        },
	        comentario: 
	        {
	            required: true
	        }
	    },   
	    /*      Al pulsar enviar, se muestra un aviso al usuario de que se va a dar de alta y que se le pasará la primera cuota
	    * de 50€, 140€ o 550€ según corresponda (forma de pago). 
	    * El usuario podrá cancelar la operación.    */
	    submitHandler : function() 
	    {
	            
	        var alerta=confirm("¡Solicitud de presupuesto enviada! Recibirá noticias nuestra en un máximo de 24h.");
	            
	        if(alerta==true)
	        {
	            window.location.href = "index.html";
	        }
	    }                    
	});

	$(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});

});