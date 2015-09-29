
$(document).ready(function(){

    var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}


	initPageAnim();
	
	if(_viewport.width < 992) {
		$('.video-player').mediaelementplayer({
			hideVideoControlsOnLoad: true
		});

		$('body').addClass('device');

		//$('.banner-video').find('video').remove();

		var carouselSlide = $('.carousel-slide').owlCarousel({
		    startPosition:1,
		    loop:true,
		    margin:10,
		    dots:true,
		    nav:false,
		    stagePadding: 30,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:3
		        }
		    }
		});


		var aboutSlider = $('.about-slider').owlCarousel({
		    margin:30,
		    nav:true,
		    loop:true,
		    stagePadding: 10,
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
		            items:3
		        },
		        1000:{
		            items:3
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

		//destroyCarousel(_viewport.width, carouselSlide);

	} else {

		//$('.navigation').addClass('sticky');
		var _itemHeight = 0;
		var _diffHeight = 0;	
		var _maxHeight = 0;
		setTimeout(function(){
			
			$('.schedule-item').each(function(){
				_itemHeight = $(this).outerHeight(true);
				if (_itemHeight> _maxHeight) { 
	                _maxHeight = _itemHeight;     
	           }
			});
			

			$('.schedule-item').each(function(){
				_diffHeight = _maxHeight - $(this).outerHeight(true);
				var lastChild = $(this).find('.article').last();
				lastChild.each(function(){
					$(this).outerHeight($(this).outerHeight(true) + _diffHeight);
				});
			});

		},300);


		$('.video-section').click(function(e){
			e.preventDefault();
			var videoPlayer = $(this).find('video');
			var videoPlay = $(this);

			//$(this).children('.video-container').find('img').hide();
			//videoPlayer.fadeIn();
			if(videoPlayer.get(0).paused) {
				videoPlayer.get(0).play(); 
			} else {
				videoPlayer.get(0).pause();
			}
		});
		visibleVideo();

		/*$('.banner-player').mediaelementplayer({
			startVolume: 0,
			videoHeight : '100%',
			videoWidth : '100%',
			alwaysShowControls : false,
			features: [],
			loop: true,
	        success: function(player, node) {
	        	$('.banner-video img').hide();
	        	//$('video').eq(0).get(0).play();
	        }
		});

		visibleVideo();

		$('.video-section').click(function(e){
			e.preventDefault();
			var videoPlayer = $(this).find('video');
			var videoPlay = $(this);

			$(this).children('.video-container').find('img').hide();
			videoPlayer.fadeIn();
			if(videoPlayer.get(0).paused) {
				videoPlayer.get(0).play(); 
				videoPlay.addClass('active');
			} else {
				videoPlayer.get(0).pause();
				videoPlay.removeClass('active')
			}
		});
*/
		$('.video-player').mediaelementplayer({
			hideVideoControlsOnLoad: true,
			//defaultVideoHeight : $('#career').outerHeight(),
			videoHeight : $('#career').outerHeight(true),
			//defaultVideoWidth : $('.video-container').outerHeight(),
			//videoWidth : $('#career .video-container').outerWidth()
		});



		//console.log($('#career .container').height());
		$('.review-dots .dots').each(function(){
			$(this).addClass('active');
		});
	}
	changeImage('.map');
	sameColHeight(_viewport.width, '.section', '.col'); 
	sameColHeight(_viewport.width, '.location-item', 'h3');
	sameColHeight(_viewport.width, '.location-item', '.review-text'); 

	rollOverDimension(_viewport.width);




	//NAVIGATION ITEM CLICK ANIMATION
	/*$('header nav ul li a[href*=#]:not([href=#])').click(function(e) {
		e.preventDefault();
		console.log($(this.hash));
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
			},1);
		    return false;
		  }
		}
	});*/
	var speed = 1;
	if(_viewport.width > 991) {
		speed = 1;
	} else {
		speed = 1;
	}

	$("header nav ul li a").click(function(e) {
		e.preventDefault();
		var target = '#'+$(this).data('link-id');
		//console.log(speed);
		//console.log(target);
		if (target.length) {

			$('body').removeClass('scroll-lock');
			$('header').removeClass('active');
			$('header').addClass('enable-bg');
			setTimeout(function(){
			    $('html, body').animate({
			        scrollTop: ($(target).offset().top - 50)
			    }, 1000);
			},speed);	
		}
	});



		var carouselSlider = $('.carousel-slider').owlCarousel({
		    margin:30,
		    nav:true,
		    loop:true,
		    stagePadding: 10,
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
		            items:3
		        },
		        1000:{
		            items:3
		        }
		    }
		});



	//destroyCarousel(_viewport.width, $('.values-slider .carousel-slider'));





	//destroyCarousel(_viewport.width, $('.schedule-content'));

	var mapContainer = $('.map-container');
	setTimeout(function(){

	mapContainer.owlCarousel({
        loop:false,
	    nav:false,	
		autoStart: false,
	    dotsContainer: '.map-nav',
	    responsive:{
	        0:{
	            items:1
	        }
	    }
    });

	},100);


	if(_viewport.width < 992) {

		loadReviewCarousel('.location-item', _viewport.width);
		
	}


	mapContainer.on('changed.owl.carousel', function(event) {
		var itemIndex = event.item.index;
		$('.location-item').eq(itemIndex).removeClass('hide').addClass('current');
		$('.location-item').eq(itemIndex).siblings().removeClass('current').addClass('hide');
		
		loadReviewCarousel('.location-item', itemIndex, _viewport.width);

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
		var videoPlayer = $(this).parent().parent().siblings().find('video');
		var videoPlay = $(this).parent().parent().siblings().find('.video-play');
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
	

	/*var reviewContentHeight = 0;

	$('.location-item').each(function(){

		$(this).find('.review-text').each(function(){
			
			//$(this).find('.review-content').each(function(){

			            console.log($(this).outerHeight());
						if ($(this).outerHeight() > reviewContentHeight) { 
			                reviewContentHeight = $(this).outerHeight();     
			            }
			//});

			
		});
		$(this).find('.review-text').outerHeight(reviewContentHeight);
	
	});*/

});


$(window).resize(function(){  
    var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}

	changeImage('.map');
	if(_viewport.width < 992) {

		$('.banner-video').find('.mobile').removeAttr('style');
		$('body').addClass('device');

		if(!$('.carousel-slide').hasClass('owl-carousel')) {
			var carouselSlide = $('.carousel-slide').owlCarousel({
		   	 	startPosition:1,
			    loop:true,
			    margin:10,
			    dots:true,
			    nav:false,
			    stagePadding: 30,
			    responsive:{
			        0:{
			            items:1
			        },	
			        600:{
			            items:3
			        },
			        1000:{
			            items:3
			        }
			    }
			});
		}

		if(!$('.about-slide').hasClass('owl-carousel')) {
			var aboutSlider = $('.about-slider').owlCarousel({
			    margin:30,
			    nav:true,
			    loop:true,
			    stagePadding: 10,
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
			            items:3
			        },
			        1000:{
			            items:3
			        }
			    }
			});
		}

		if(!$('.review-slider').hasClass('owl-carousel')) {

		
				loadReviewCarousel('.location-item', 0);

				$('.map-container').on('changed.owl.carousel', function(event) {
					var itemIndex = event.item.index;
					$('.location-item').eq(itemIndex).removeClass('hide').addClass('current');
					$('.location-item').eq(itemIndex).siblings().removeClass('current').addClass('hide');
					
						
					loadReviewCarousel('.location-item', itemIndex, _viewport.width);

				});
	
		}

		if(!$('.schedule-content').hasClass('owl-carousel')) {
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

		}



		$('.review-text').removeAttr('style');


	//destroyCarousel(_viewport.width, carouselSlide);



	} else {
		$('body').removeClass('device');
		//$('.mejs-layer').outerHeight($('#career').outerHeight());
		//$('.video-player').outerHeight($('#career').outerHeight());
		console.log($('#career').outerHeight());
		if($('.review-slider').hasClass('owl-carousel')) {
			//$('.review-slider').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
			//$('.review-slider').find('.owl-stage-outer').children().unwrap();
			//console.log('test');
		}

		destroyCarousel($('.carousel-slide'));
		destroyCarousel($('.about-slider'));
		destroyCarousel($('.schedule-content'));

		$('.location-item').each(function(index){

			destroyCarousel($(this).eq(index).find('.review-slider'));
		});
		//var _videoHeight = $('#career').outerHeight();
		//$('.video-player').removeAttr('style');
		//$('.video-player').outerHeight(_videoHeight);
		//console.log($('.video-player'));
		//console.log(_videoHeight);
	}
	
	sameColHeight(_viewport.width, '.section', '.col'); 
	sameColHeight(_viewport.width, '.location-item', 'h3');
	sameColHeight(_viewport.width, '.location-item', '.review-text'); 

	rollOverDimension(_viewport.width);

	//loadReviewCarousel('.location-item', _viewport.width);




}).resize();

var _top = $(window).scrollTop();
var _direction;

$(window).scroll(function(e) {
    var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}

var _cur_top = $(window).scrollTop();
//console.log(_cur_top);



	if(_viewport.width > 991) {
		if ( $(window).scrollTop() >= 100) {
			if(_top < _cur_top)
		    {
		        $('.navigation').removeClass('sticky');
		        $('.navigation').addClass('nav-hide');
		    }
		    else
		    {
		        $('.navigation').addClass('sticky');
		        $('.navigation').removeClass('nav-hide');
		    }
		    _top = _cur_top;
		} else {
			$('.navigation-header').removeClass('sticky nav-hide');
		}
		visibleVideo();
	} else {

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


	}


	
});



function visibleVideo() {
	$('.video-section').each(function(){
		//console.log($(this).visible(true));
		if($(this).visible(true)) {
			$(this).find('video').get(0).play(); 
			//console.log('visible');
		} else {
			$(this).find('video').get(0).pause(); 
			//console.log('hidden');
		}

	});
}


function loadReviewCarousel(selector, index, viewport) {
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}

	var container = $(selector).eq(index);

	if(_viewport.width < 992) {
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
	} else {
	

	}
}


function hideArrowInactive(selector, itemIndex, itemSize) {

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


function sameColHeight(viewport, selector, target) {

	if(viewport >= 992) {
		//.section .col
		var maxHeight = 0;
		$(selector).each(function(){

			$(this).find(target).each(function(){

				$(this).each(function(index){

						if ($(this).outerHeight() > maxHeight) { 
			                maxHeight = $(this).outerHeight();     
			            }


			        });


			});

			 $(this).find(target).outerHeight(maxHeight);

		});
	} else {
		$('.section').each(function(){
			$(this).find('.col').each(function(){
				$(this).each(function(index){
		            $(this).removeAttr('style');
		        });
			});
		});
	}
}




function destroyCarousel(selector) {
	var _viewport = {
		width : $(window).width(),
		height : $(window).height()
	}

	if(selector.hasClass('owl-carousel')) {

		if(_viewport.width >= 992) {	
			//selector.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
		    //selector.find('.owl-stage-outer').children().unwrap();

		    if (selector.hasClass("owl-carousel")) {
			    selector.owlCarousel({
			        touchDrag: false,
			        mouseDrag: false
			    });
			    selector.data('owlCarousel').destroy();
			    selector.removeClass('owl-carousel owl-loaded');
			    selector.find('.owl-stage-outer').children().unwrap();
			    selector.removeData();
			}
		}
	}


}

function rollOverDimension(viewport) {
	if(viewport >= 992) {
		$('.carousel-slide').find('.item').each(function(){
			$(this).children('.roll-over').outerHeight($(this).outerHeight());
			$(this).children('.roll-over').outerWidth($(this).outerWidth());
		});
	}
}

function changeImage(selector) {
	//'.vehicle-item'
	var _imgContainer = $(selector);

	_imgContainer.each(function(){
		var _this = $(this);
		if($('body').hasClass('device')) {
			var _newImg = _this.find('img').data('mobile-image');
			_this.find('img').attr('src', 'img/'+_newImg);
		} else {
			var _newImg = _this.find('img').data('desktop-image');
			_this.find('img').attr('src', 'img/'+_newImg);
		}
	});
}

function initPageAnim( viewport ) {
   	//if(!$('body').hasClass('device')) {

    	$('.animated').addClass('hiding');
        $('.animated').appear(function() {

            var element = $(this);
         
            var animation = element.data('animation');
            var animationDelay = element.data('delay');
            if(animationDelay) {
                setTimeout(function(){
                    element.addClass( animation + " visible" );
                    element.removeClass('hiding');
                }, animationDelay);
            } else {
                element.addClass( animation + " visible" );
                element.removeClass('hiding');
            }


        }, {accY: -50});

    //} else {
    //	$('.animated').removeClass('hiding');
    //}
}





