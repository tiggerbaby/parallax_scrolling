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
   if(scroll > $('.clothes-pics').offset().top){
   	 $('.clothes-pics figure').each(function(i){
   	  setTimeout(function(){
   	 	$('.clothes-pics figure').eq(i).addClass('is-showing');
   	 },150*(i+1));
   	 });
   }
});