
$(document).ready(function(){
	$('video').mediaelementplayer({
		hideVideoControlsOnLoad: true
	});

	$('header nav ul li a[href*=#]:not([href=#])').click(function(e) {
		e.preventDefault();

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  $(this).parent().addClass('active').siblings().removeClass('active');
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

		  if (target.length) {
		  	$('body').removeClass('scroll-lock');
			$('header').removeClass('active');
			$('header').addClass('enable-bg');
			setTimeout(function(){

			    $('html,body').animate({
			      scrollTop: target.offset().top
			    }, 1000);
			},700);
		    return false;
		  }
		}
	});



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
	    startPosition:1,
	    loop:true,
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


	var carouselSlider = $('.carousel-slider').owlCarousel({
	    margin:30,
	    nav:true,
	    loop:true,
	    stagePadding: 30,
	    navRewind:true,
	    navText: [
	      "<img src='img/arrow-left.png'>",
	      "<img src='img/arrow-right.png'>"
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



	var scheduleSlider = $('.schedule-content').owlCarousel({
	    loop:false,
	    margin:30,
	    nav:true,
		autoStart: false,
	    navText: [
	      "<img src='img/arrow-left.png'>",
	      "<img src='img/arrow-right.png'>"
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
	hideArrowInactive('.schedule-content',0,1);
	scheduleSlider.on('changed.owl.carousel', function(event) {
		var itemIndex = event.item.index;
		var itemSize  = event.item.count - 1;
		hideArrowInactive('.schedule-content', itemIndex, itemSize);
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

	

	/* VIDEO */
	//Video Play Button Circle
	$('.video-play').click(function(e){
		e.preventDefault();
		var videoPlayer = $(this).siblings().find('video');
		var videoPlay = $(this);
		if(videoPlayer.get(0).paused) {
			videoPlayer.get(0).play(); 
			videoPlay.addClass('active');
		} else {
			videoPlayer.get(0).pause();
			videoPlay.removeClass('active')
		}
	});

	//Video Player Container 
	$('.video-player').click(function(e){
		e.preventDefault();
		var videoPlayer = $(this).parent().find('.mejs-playpause-button');
		var videoPlay = $(this).parent().find('.video-play');

		if(videoPlayer.hasClass('mejs-play')) {
			videoPlay.addClass('active');
		} else {
			videoPlay.removeClass('active');
		}
	});

	//Play button  
	$('.btn-play').click(function(e){
		e.preventDefault();
		var videoPlayer = $(this).parent().siblings().find('video');
		var videoPlay = $(this).parent().siblings().find('.video-play');

		if(videoPlayer.get(0).paused) {
			videoPlayer.get(0).play(); 
			videoPlay.addClass('active');
		} else {
			videoPlayer.get(0).pause();
			videoPlay.removeClass('active')
		}

	});


	$('.mejs-playpause-button').click(function(e){
		e.preventDefault();
		var videoPlay = $(this).parent().parent().parent().siblings('.video-play');

		if($(this).hasClass('mejs-play')) {
			videoPlay.addClass('active');
		} else {
			videoPlay.removeClass('active')
		}
	});	
	
	/* END VIDEO */

	
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


	//var scrollPost = [];
	var timeOUt, scrolTimeOut;

	$('.burger').click(function(e){
		e.preventDefault();	
		if(!$('header').hasClass('active')) {	
			$('header').addClass('active');
			$('header').removeClass('enable-bg');
				$('body').addClass('scroll-lock');
		} else {
			$('header').removeClass('active');
			$('body').removeClass('scroll-lock');
			$('header').addClass('enable-bg');
		}
		
	
	});

	$('.schedule-btn, .schedule .close-btn').click(function(e){
		e.preventDefault();
		if(!$('.schedule').hasClass('active')) {
				$('body').addClass('scroll-lock');
			$('.schedule').addClass('active');
		} else {
			$('body').removeClass('scroll-lock');
			$('.schedule').removeClass('active');
		}
	});	
	/*
	$('.burger').click(function(e){
		e.preventDefault();	
		//scrollPost.push($('body').scrollTop());
		if(!$('header').hasClass('active')) {	
			$('header').addClass('active');
			//timeOUt = setTimeout(function(){
				$('body').addClass('scroll-lock');
			//},1000);
		//$('body').scrollTop(scrollPost[0]);
		} else {
			clearTimeout(timeOUt);
			$('header').removeClass('active');
			$('body').removeClass('scroll-lock');
			scrolTimeOut = setTimeout(function(){
				scrollPost.splice(0);
			},1000);
		}
		//$('body').scrollTop(scrollPost[0]);
		
	});*/
	

});


$(window).resize(function(){  
	console.log('resize');
}).resize();

var _top = $(window).scrollTop();
var _direction;

$(window).scroll(function(e) {

var _cur_top = $(window).scrollTop();
//console.log(_cur_top);
	if ( $(window).scrollTop() >= 30) {
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
		$('.navigation-header').removeClass('sticky header-hide');
	}


	
});



function loadReviewCarousel(selector, index) {
	var container = $(selector).eq(index);
	container.find('.review-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:true,	
		autoStart: false,
		dotsContainer: container.find('.review-dots'),
	    navText: [
	      "<img src='img/arrow-left.png'>",
	      "<img src='img/arrow-right.png'>"
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


function hideArrowInactive(selector, itemIndex, itemSize) {
	console.log(itemIndex, itemSize);
	if(itemIndex == 0) {
		$(selector).find('.owl-prev').hide();
	} else {
		$(selector).find('.owl-prev').show();
	}

	if(itemIndex == itemSize) {
		$(selector).find('.owl-next').hide();
	} else {
		$(selector).find('.owl-next').show();
	}
}





