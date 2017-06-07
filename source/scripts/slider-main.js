// слайдер
$(function(){
	function sliderInit() {
		var wrapList = $('.slider-main__tabs__list'),
			listElem = wrapList.find('.slider-main__tabs__elem');

		if(listElem.length <=5)  {
			for(var i = 0; i < listElem.length; i++) {

				var w = 100/(listElem.length);
				$(listElem[i]).css('width' , w + '%');
			}
		} else {
			for(var i = 0; i < listElem.length; i++) {
				$(listElem[i]).css('width' , '20%');
			}
		}
	}
	sliderInit();
})