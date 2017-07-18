// Рейтинг со звездами

// $(function(){
	
// 	$('#rating_2').rating({
// 		fx: 'half',
//         image: '../img/stars.png',
//         loader: '../img/ajax-loader.gif',
// 		url: 'rating.php',
//         callback: function(responce){
            
//             this.vote_success.fadeOut(2000);
            
//             alert('Общий бал: '+this._data.val);
//         }
// 	});
	
// })
// --/Рейтинг со звездами


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

    })
}); 


