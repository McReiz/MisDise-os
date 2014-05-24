$(document).ready(function(){
	// ---------------- prender y apagar luz ---------------- //
    $('.on-of').click(function(){
    	$('body').toggleClass('off');
    	return false;
    });

   
	// ------------------------ slider ---------------------- //
	

	
	function avanzar(){
		var size = $('#slider #contenidos').find('.cont-slider').size();
		
		$('#slider #contenidos').find('.cont-slider').each(
			function(index,value){

				if($(value).hasClass('activado')){

					$(value).slideUp();
					$(value).removeClass('activado');

					if(index+1<size){
						$($('#slider #contenidos').find('.cont-slider').get(index+1)).slideDown();
						$($('#slider #contenidos').find('.cont-slider').get(index+1)).addClass('activado');
						return false;
					}else{

						$($('#slider #contenidos').find('.cont-slider').get(0)).slideDown();
						$($('#slider #contenidos').find('.cont-slider').get(0)).addClass('activado');	
							return false;
					}
				}
			}
		);
	};
	var segundos = 6000;
	setInterval(function(){avanzar();},segundos);

});