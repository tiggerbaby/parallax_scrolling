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
});