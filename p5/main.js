// $(document).ready(function() {



	$(document).keydown( function(e) {

		if ((e.which) == 37) {
			$('cuad').stop().animate({left : '-=50'});
		}		else if ((e.which) == 39) {
					$('cuad').stop().animate({left : '+=50px'});
				} 
	});




// });