$(window).scroll(function(){
   var scroll = $(this).scrollTop();
   
   $('.logo').css({
   	'transform' : 'rotate(7deg) translate(0px, '+ scroll/2 +'%)'
   });
   $('.back-bird').css({
   	'transform' : 'translate(0px, '+ scroll/4 +'%)'
   });
   $('.fore-bird').css({
   	'transform' : 'translate(0px, -'+ scroll/50 +'%)'
   });

// When the clothes-pics get to the top of the window
   if(scroll > $('.clothes-pics').offset().top - ($(window).height()/1.2)){
   	 $('.clothes-pics figure').each(function(i){
   	  setTimeout(function(){
   	 	$('.clothes-pics figure').eq(i).addClass('is-showing');
   	 },200*(i+1));
   	 });
   }

   if(scroll > $('.large-window').offset().top - $(window).height()){
   	$('.large-window').css({'background-position':'center 0px'+ (scroll + $('.large-window').offset().top) + 'px'});
   }


});

