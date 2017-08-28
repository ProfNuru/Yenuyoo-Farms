$('document').ready(function(){
	$('.slides div:first').addClass('top');

	var change = function(){
		//Change slide
		var current = $('.slides div.top');
		var next = current.next();

		if(!next.length){
			next = $('.slides div:first');
			next.addClass('top');
			current.animate({opacity:0.0},1000,function(){
				current.removeClass('top');
				current.css({opacity: 1.0});
			});
			

		}else{
			next.css({opacity: 0.0})
			.addClass('top')
			.animate({opacity: 1.0},1000,function(){
				current.removeClass('top');
			});
			
		}
		
	}
	setInterval(change,3000);


});