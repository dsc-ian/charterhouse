
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
	            items:1
	        }
	    }
	});



	$('.schedule-content').owlCarousel({
	    loop:false,
	    margin:30,
	    nav:true,
		autoStart: false,
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
	            items:1
	        }
	    }
	});

	var mapContainer = $('.map-container');
	mapContainer.owlCarousel({
        loop:false,
	    nav:false,	
		autoStart: false,
	    dotsContainer: '.map-nav',
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    },
	    onSliderLoad : loadReviewCarousel('.location-item', 0)
    });

	mapContainer.on('changed.owl.carousel', function(event) {
		var itemIndex = event.item.index;
		$('.location-item').eq(itemIndex).removeClass('hide').addClass('current');
		$('.location-item').eq(itemIndex).siblings().removeClass('current').addClass('hide');
		
			
		loadReviewCarousel('.location-item', itemIndex);

	});
	/*var myPlayer = videojs("video", { "controls": true, "autoplay": false, "preload": "auto" });;

	$('.btn-play').click(function(e){
		e.preventDefault();

		if(!$(this).hasClass('playing')) {
			$(this).addClass('playing');
			myPlayer.play();
		} else {			
			$(this).removeClass('playing');
			myPlayer.play();
		}
		return false;
	});*/

	
//loadLocationItem();
	/*function loadLocationItem() {

		console.log('loaded');
		$('.location-item').each(function(index){
			console.log(index);
			$(this).find('.review-slider').owlCarousel({
				loop:false,
				margin:30,
				nav:true,	
				autoStart: false,
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
				        items:1
				    }
				}
			});


		});
	}
	*/
	

	$('.location-item').eq(0).addClass('current');
	$('.location-item').eq(0).siblings().addClass('hide');


	var scrollPost = [];
	var timeOUt, scrolTimeOut;
	$('.burger').click(function(e){
		e.preventDefault();	
		scrollPost.push($('body').scrollTop());
		if(!$('header').hasClass('active')) {	
			$('header').addClass('active');
			timeOUt = setTimeout(function(){
				$('body').addClass('scroll-lock');
			},1000);
		$('body').scrollTop(scrollPost[0]);
		} else {
			clearTimeout(timeOUt);
			$('header').removeClass('active');
			$('body').removeClass('scroll-lock');
			scrolTimeOut = setTimeout(function(){
				scrollPost.splice(0);
			},1000);
		}
		$('body').scrollTop(scrollPost[0]);
		
	});

	$('.schedule-btn, .schedule .close-btn').click(function(e){
		e.preventDefault();
		scrollPost.push($('body').scrollTop());
		if(!$('.schedule').hasClass('active')) {
			//$('body').css({'overflow':'hidden'});
			timeOUt = setTimeout(function(){
				$('body').addClass('scroll-lock');
			},1000);
			$('.schedule').addClass('active');
		} else {
			//$('body').removeAttr('style');
			clearTimeout(timeOUt);
			$('body').removeClass('scroll-lock');
			$('.schedule').removeClass('active');
			scrolTimeOut = setTimeout(function(){
				scrollPost.splice(0);
			},1000);
		}
		$('body').scrollTop(scrollPost[0]);

	});	
	

});


$(window).resize(function(){  
	console.log('resize');
}).resize();

var _top = $(window).scrollTop();
var _direction;

$(window).scroll(function(e) {

var _cur_top = $(window).scrollTop();

	if ( $(window).scrollTop()  >= $('.navigation-header').outerHeight()) {
		if(_top < _cur_top)
	    {
	        $('.navigation-header').removeClass('sticky');
	        $('.navigation-header').addClass('header-hide');
	    }
	    else
	    {
	        $('.navigation-header').addClass('sticky');
	        $('.navigation-header').removeClass('header-hide');
	    }
	    _top = _cur_top;
	} else {
		$('.navigation-header').removeClass('sticky');
	}

});



function loadReviewCarousel(selector, index) {
	var container = $(selector).eq(index);
	container.find('.review-slider').owlCarousel({
		loop:false,
		margin:30,
		nav:true,	
		autoStart: false,
		dotsContainer: container.find('.review-dots'),
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
		        items:1
		    }
		}
	});
}








