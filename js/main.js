$(function(){

    $('.reviews__slider').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '22%',
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 1800,
              settings: {
                centerMode: true,
                centerPadding: '320px',
                slidesToShow: 1
              }
            },
            {
                breakpoint: 1660,
                settings: {
                  centerMode: true,
                  centerPadding: '250px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 1515,
                settings: {
                  centerMode: true,
                  centerPadding: '190px',
                  slidesToShow: 1
                }
              },

              {
                breakpoint: 1400,
                settings: {
                  centerMode: false,
                  slidesToShow: 1
                }
              },
          ]
      });

      $('.order__link').magnificPopup({
        type: 'inline'
    });

    $('.about__link').magnificPopup({
        type: 'inline'
    });


      $('.reviews__item-link').click(function(){
        $(this).siblings('.reviews__hide-block').toggleClass('hide');	
		if ($(this).siblings('.reviews__hide-block').hasClass('hide')) {
			$(this).html('Читать отзыв полностью');
		} else {
			$(this).html('Скрыть отзыв');
		}		
		return false;
	});


        $('.slick-arrow').click(function(){
            $('.reviews__item-link').html('Читать отзыв полностью'); 
            $('.reviews__hide-block').addClass('hide');	    
            return false;
        });
    


});

