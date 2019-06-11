;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	window.googleMap = function () {
		if ($('#map').length) {
			$win.on('load', function () {
				initializeMap();
			});
		}
	}

	function initializeMap() {
		var mapHolder = document.getElementById('map');
		var centerLat = $(mapHolder).data('lat');
		var centerLng = $(mapHolder).data('lng');
		var markerLat = $(mapHolder).data('marker-lat');
		var markerLng = $(mapHolder).data('marker-lng');
		var zoom = $(mapHolder).data('zoom');

		var mapStyle = [
		    {
		        "featureType": "all",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "saturation": 36
		            },
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 40
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 16
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 20
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 17
		            },
		            {
		                "weight": 1.2
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 20
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 21
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 17
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 29
		            },
		            {
		                "weight": 0.2
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 18
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 16
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 19
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#141414"
		            },
		            {
		                "lightness": 0
		            }
		        ]
		    }
		];

		var mapOptions = {
			center: { lat: centerLat, lng: centerLng },
			zoom: zoom,
			icon: 'css/images/pin.png',
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
			draggable: false,
			scrollwheel: false,
			scaleControl: false,
			disableDoubleClickZoom: true,
			overviewMapControl: false,
			panControl: false,
			streetViewControl: false,
			zoomControl: false,
			styles: mapStyle
		}

		map = new google.maps.Map(mapHolder, mapOptions);

		var markerStyle = {
			path: google.maps.SymbolPath.CIRCLE,
			scale: 4,
			optimized: false,
			fillOpacity: 1,
			fillColor: '#b2ecf0',
			strokeOpacity: 0,
			strokeWeight: 2
		}

		var marker = new google.maps.Marker({
			position: { lat: markerLat, lng: markerLng },
			map: map,
			html: '<span class="123456"></span>',
			icon: markerStyle
		});

		label = new Label({
			map: map
		});

		label.bindTo('position', marker);
		label.set('text', '');
		label.bindTo('visible', marker);
		label.bindTo('clickable', marker);
		label.bindTo('zIndex', marker);

		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();

			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});
	}

	$doc.ready(function() {
		var $innerPage, scroller;
		var $wrapper = $('.wrapper');

		//Enalbe smooth scroll on Chrome
		var platform = navigator.platform.toLowerCase();
		var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

		if (platform.indexOf('win') == 0) {
			if (isChrome) {
				$.srSmoothscroll();
			}
		}

		//Menu
		$('body').on('click', '.btn-menu', function (e) {
			e.preventDefault();

			var $this = $(this);

			$this.toggleClass('active').addClass('animating');
			$('.nav').toggleClass('visible');

			setTimeout(function() {
				$this.removeClass('animating');
			}, 800);
		});

		$('body').on('click', '.nav ul a', function (e) {
			e.preventDefault();

			var target = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 800);

			$('.nav').removeClass('visible');
			$('.btn-menu').removeClass('active').addClass('animating');

			setTimeout(function() {
				$('.btn-menu').removeClass('animating');
			}, 800);
		});

		//Scroll to
		$('.scroll-to').on('click', function (e) {
			e.preventDefault();

			var target = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(target).offset().top - ( $win.height() / 4 )
			}, 400);

			if ( $('.switch').length ) {
				$(target).addClass('active');
			}
		});

		//Audio Trigger
		$('body').on('change', '.player-btn input', function () {
			var audio = document.getElementById('audio');

			if ( $(this).prop('checked') ) {
				audio.play();
			} else {
				audio.pause();
				$(this).parent().addClass('manual');
			}
		});

		//Show Switch
		$('.switch-trigger').on('click', function (e) {
			e.preventDefault();

			$('.section-switch').addClass('switch-visible');
		});

		//Switch Toggle
		$('.switch-toggle').on('click', function () {
			$(this).toggleClass('switched');

			switchPages();
		});

		$win.on('load', function () {
			$('.loader').addClass('hidden');



			initSkrollr();

			loadInnerPage();

			initSlider();

			playStopAudio();
		});

		function playStopAudio() {
			$win.on('scroll', function () {
				if ( $('.player-btn input').length && $('.player-trigger').hasClass('skrollable-after') ) {
					if ( !$('.player-btn').hasClass('manual') ) {
						$('.player-btn input').prop('checked', true);
						$('.player audio').trigger('play');
					}
				} else {
					$('.player-btn input').prop('checked', false);
					$('.player audio').trigger('pause');
				}
			});
		}

		//Init Slider
		function initSlider() {
			//Slider Swipe
			var $slides = $('.slide .slide-inner');
			var $sliderCaption = $('.slider .slider-caption-inner');
			var slidesRowLength = $('.slider .slider-row:first-child').children().length;
			var step = $win.width() / 3;
			var pauseCounter = 0;
			var swipeCounter = 0;
			var animationDuration = 700;
			var isAnimating = false;

			$('.slider').swipe({
				swipeLeft: function (event, direction, distance, duration, fingerCount) {
					if ( !isAnimating ) {
						moveSlides($slides, direction, true);
						moveSlides($sliderCaption, direction);
					}
				},
				swipeRight: function (event, direction, distance, duration, fingerCount) {
					if ( !isAnimating ) {
						moveSlides($slides, direction, true);
						moveSlides($sliderCaption, direction);
					}
 				},
 				preventDefaultEvents: false
			});

			function moveSlides($elements, direction, countIt) {
				pauseCounter = 0;

				if ( countIt ) {
					if ( direction === 'left' && swipeCounter !== slidesRowLength + 1 ) {
						swipeCounter++;
					} else if ( direction === 'right' && swipeCounter >= 0 ) {
						swipeCounter--;
					}

					isAnimating = true;

					setTimeout(function() {
						isAnimating = false;
					}, ( slidesRowLength * 10 ) + animationDuration);
				}

				$elements.each(function () {
					var $element = $(this);
					var currentLeft = parseInt($element.css('left'));

					setTimeout(function() {
						if ( direction === 'left' && swipeCounter !== slidesRowLength + 1 ) {
							$element.css('left', currentLeft - step);
						} else if ( direction === 'right' && currentLeft < 1 ) {
							$element.css('left', currentLeft + step);
						}
					}, pauseCounter);

					pauseCounter += 10;
				});
			}
		}

		//init Skrollr
		function initSkrollr() {
			scroller = skrollr.init({
				smoothScrolling: false,
				mobileCheck: function() {
					return false;
				},
				forceHeight: false
			});
		}

		//Load inner Page
		function loadInnerPage() {
			if ( $wrapper.hasClass('home') ) {
				$.ajax({
					url: $wrapper.data('load'),
					method: 'get',
					dataType: 'html',
					success: function (result) {
						$innerPage = $(result).filter('.wrapper');

						$innerPage.addClass('placed').appendTo('body');

						if ( $innerPage.find('.player-btn input').length ) {
							$innerPage.find('.player-btn input').prop('checked', false);
							$innerPage.find('.player audio').removeAttr('autoplay');
						}
					}
				});
			}
		}

		function switchPages() {
			$('html, body').animate({ //Scroll to Top
				scrollTop: 0
			}, 1500);

			setTimeout(function() { //Disable Scrollinh
				$('html').addClass('no-scroll');
			}, 1500);

			setTimeout(function() {
				scroller.destroy(); //Disabled 

				$innerPage.addClass('active');
				$('body').addClass('overlay');

				setTimeout(function() { //Remove old content and make new visible
					$wrapper.detach();
					
					$innerPage.removeClass('active placed');
				}, 700);

				setTimeout(function() { //Reinitilize functionalities for the new content
					$('html').removeClass('no-scroll');
					$('body').removeClass('overlay');

					initSkrollr();

					initSlider();

					initializeMap();

					playStopAudio();


				}, 1000);
			}, 2000);
		}
	});
})(jQuery, window, document);