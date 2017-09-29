$(function() {
	if ($('#js-map').length) {
		var myMap;
		jQuery.getScript("http://api-maps.yandex.ru/2.0/?load=package.full&amp;lang=ru-RU", function (){
				function init(){  
						myMap = new ymaps.Map("js-map", {
									center: [55.826738, 37.437730],
						zoom: 12
					});
							var myPlacemark = new ymaps.Placemark([55.826738,  37.437730], {
						balloonContent: '<div class="map__content">Location</div>',
						iconImageHref: 'pic/location.png', 
				}, {
						hideIconOnBalloonOpen: false,
						iconImageHref: 'pic/location.png',
						iconImageSize: [35, 50],
        		iconImageOffset: [-25, -10]
					});				 
					myMap.geoObjects.add(myPlacemark);
					myPlacemark.events;	 
					}
					ymaps.ready(init);
			});
		};
 })
