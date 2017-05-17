// Рейтинг со звездами

$(function(){
	
	$('#rating_2').rating({
		fx: 'half',
        image: '../img/stars.png',
        loader: '../img/ajax-loader.gif',
		url: 'rating.php',
        callback: function(responce){
            
            this.vote_success.fadeOut(2000);
            
            alert('Общий бал: '+this._data.val);
        }
	});
	
})
// --/Рейтинг со звездами


$(document).ready(function() {
    $('.teatcher__title').click(function() {
        $(this).addClass('active')
        $('.infoblock').addClass('active')
    });
}); 





