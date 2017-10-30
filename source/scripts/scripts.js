

$(document).ready(function() {
    // $('.teatcher__title').click(function() {
    //     $(this).addClass('active')
    //     $('.infoblock').addClass('active')
    // });


    $('.grantz__tabs-elem .btn').on('click' ,function() {
        var that = $(this),
            data_tab = that.data('grantz-tab');
            
            $('.grantz__tabs-elem .btn').removeClass('active');
            that.addClass('active');

            $('.grantz-tabs').removeClass('active');
            $('#'+data_tab).addClass('active');
    });


    $('.grantz__searth-input').on('focus', function() {
        if($(this).val() == 'Введите название') {
            $(this).css('color', "#000");
            $(this).val('');
        }
    })
    $('.grantz__searth-input').on('blur', function() {
        if($(this).val() == '') {
            $(this).css('color', "#c4c4c4");
            $(this).val('Введите название');
        }
    })





//скрипты для главной стр для слабовидящих 

$('.menu-viz .menu-viz__item').click(function() {
    $('.menu-viz__item').removeClass('active');
    $(this).addClass('active');
});
$('.controlpanel__item_font .controlpanel__item-btn').click(function() {
    $('.controlpanel__item_font .controlpanel__item-btn').removeClass('active');
    $(this).addClass('active');
});
$('.controlpanel__list_color .controlpanel__item-btn').click(function() {
    $('.controlpanel__item_color .controlpanel__item-btn').removeClass('active');
    $(this).addClass('active');
});

$('.controlpanel__item_font .controlpanel__item-btn').click(function() {
    $font = $(this).attr('id');
    $('body').removeClass('fontSizeSmall');
    $('body').removeClass('fontSizeMedium');
    $('body').removeClass('fontSizeBig');
    $('body').addClass($font);
 });

$('.controlpanel__item_color .controlpanel__item-btn').click(function() {
    $color = $(this).attr('id');
    $('body').removeClass('ColorBlack');
    $('body').removeClass('ColorBlue');
    $('body').addClass($color);
 });

$('.management__comments__button-play a').text('Перейти к новости');
$('.management__comments__date .icon-clock').text('Опубликовано:');
$('.activities-calendar .link-all__link').text('Перейти ко всем мероприятиям');
$('.news .link-all__link').text('Перейти ко всем новостям');
$('.news__data .icon-clock').text('Опубликовано: ');


$(".viz-modal__box input[type='radio']").change(function() {
    if($(".viz-modal__box #radio-1").prop("checked")) { 
            console.log('белый');
            $('body').removeClass('ColorBlack');
            $('body').removeClass('ColorBlue');
            $('.controlpanel__item_color .controlpanel__item-btn').removeClass('active');
            $('.controlpanel__list_color #ColorWhite').addClass('active');

    }
    if($(".viz-modal__box #radio-2").prop("checked")) { 
            console.log('черный');
            $('body').removeClass('ColorBlue');
            $('body').addClass('ColorBlack');

            $('.controlpanel__item_color .controlpanel__item-btn').removeClass('active');
            $('.controlpanel__list_color #ColorBlack').addClass('active');
            
            
    }
    if($(".viz-modal__box #radio-3").prop("checked")) { 
            console.log('синий');
            $('body').removeClass('ColorBlack');
            $('body').addClass('ColorBlue');
            $('.controlpanel__item_color .controlpanel__item-btn').removeClass('active');
            $('.controlpanel__list_color #ColorBlue').addClass('active');
    }
});

        

//модалки задаем кнопке class = 'modal" и id, cамой модалкe даем класс равный id 

$('.modall').click(function() {
    $id = this.id;
    $('.viz-modal' + '.'+ $id ).addClass('active');
    $('html, body').scrollTop( 0 ); 

});

$('.viz-modal__close').click(function() {
    $(this).closest('.viz-modal').removeClass('active');
});
$('.viz-modal .viz-modal__btns .btn').click(function() {
    $(this).closest('.viz-modal').removeClass('active');
});
$('#mod-4').click(function() {
    $('.mod-3').removeClass('active');
});





$('.viz-modal__box-btns_cer .btn').click(function() {
    $('.viz-modal__box-btns_cer .btn').removeClass('active');
    $(this).addClass('active');

    $Letter = $(this).attr('id');
    $('body').removeClass('LetterSpacingSmall');
    $('body').removeClass('LetterSpacingMedium');
    $('body').removeClass('LetterSpacingBig');
    $('body').addClass($Letter);
});
$('.viz-modal__box-btns_font .btn').click(function() {
    $('.viz-modal__box-btns_font .btn').removeClass('active'); 
    $(this).addClass('active');

    $fontf = $(this).attr('id');
    $('body').removeClass('FontFamilyArial');
    $('body').removeClass('FontFamilyTimesNewRoman');
    $('body').addClass($fontf);
});

//dropdown

    $(".dropdown .dropdown__box, .dropdown .dropdown__arrow-down").click(function() {
        $(".dropdown .dropdown__btn").toggleClass('active');
    });

    $(".m-select .mdi-menu-down").click(function() {
        $(".m-select .m-select__wrap").toggleClass('active');
    });

    // question-answer-viz.html выпадающая плашка
    $(".question-title").click(function() {
        $(".all-events-white-top__form").toggleClass('active');
        $(".question-title .icon-doun").toggleClass('active');
    });
});