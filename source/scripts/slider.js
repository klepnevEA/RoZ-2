// слайдер
$(function(){
	$(".slider").slick({
	    dots: true,
	    arrows: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
				}
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false

                }
            }
        ]
	});


	$(".slider-without-arrows").slick({
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false

                }
            }
        ]
	});

    $(".news-slider__list").slick({
        dots: true,
        arrows: false,
    });


    

})

