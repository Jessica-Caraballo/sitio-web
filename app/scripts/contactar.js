$( document ).ready(function() {	

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

});