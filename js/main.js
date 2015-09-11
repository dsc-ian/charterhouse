
$(document).ready(function(){

/*
	$('.bxslider').bxSlider({
	    slideWidth: 320,
	    minSlides: 2,
	    maxSlides: 3,
	    moveSlides: 1,
   		slideMargin: 10,
	    pager: false,
	    auto: true,
		controls : false
	});



	$('.carousel-slider').bxSlider({
   		slideMargin: 50,
		pager : false,
		controls : true,
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>',
		infiniteLoop : false,
		hideControlOnEnd : true
	});
*/

	$('.carousel-slide').owlCarousel({
	    loop:false,
	    margin:10,
	    nav:false,
	    stagePadding: 30,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$('.carousel-slider').owlCarousel({
	    loop:false,
	    margin:30,
	    nav:true,
	    stagePadding: 30,
	    navText: [
	      "<i class='fa fa-angle-left'></i>",
	      "<i class='fa fa-angle-right'></i>"
	      ],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:35
	        }
	    }
	});

	var mapContainer = $('.map-container');
	mapContainer.owlCarousel({
        loop:false,
	    nav:false,	
	    dotsContainer: '.map-nav',
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
    });

	mapContainer.on('changed.owl.carousel', function(event) {
		var itemIndex = event.item.index;
		$('.location-item').eq(itemIndex).removeClass('hide').addClass('current');
		$('.location-item').eq(itemIndex).siblings().removeClass('current').addClass('hide');

	})
	



	$('.location-item').each(function(){

		$(this).find('.review-slider').owlCarousel({
	        loop:false,
		    margin:30,
		    nav:true,	
		    dotsContainer: $(this).find('.review-dots'),
		    navText: [
		      "<i class='fa fa-angle-left'></i>",
		      "<i class='fa fa-angle-right'></i>"
		      ],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:3
		        }
		    }
	    });


	});
	

	$('.location-item').eq(0).addClass('current');
	$('.location-item').eq(0).siblings().addClass('hide');

	$('.burger').click(function(e){
		e.preventDefault();	
		if(!$('header').hasClass('active')) {

			$('header').addClass('active');

		} else {

			$('header').removeClass('active');
		}

	});
	


	







});














