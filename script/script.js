if($(window).width() > 480) {
$(function() {

 $(window).scroll(function() {

 	if($(this).scrollTop() != 0) 
 	{
 		$('#toTop').fadeIn();
 	} 
 	else 
 	{
 		$('#toTop').fadeOut();
 	}
 });
 
 $('#toTop').click(function() 
 {
 	$('body,html').animate({scrollTop:0},800);
 });
 
});

$(function() {

$('#arrow-down').click(function() {
	$('#top-bar').slideDown(200);
	$('#arrow-down').hide();
	$('#arrow-up').slideToggle(200);
});

$('#arrow-up').click(function() {
	$('#top-bar').slideUp(200);
	$('#arrow-down').slideToggle(200);
	$('#arrow-up').hide();
});

$(window).scroll(function(){
if($(window).scrollTop()>150){
$('.about').fadeIn(600);
} 
else if($(window).scrollTop()<150){
	$('.about').fadeOut();
}

});

$(window).scroll(function(){
if($(window).scrollTop()>850){
$('.services-block').fadeIn(600);
} 
else if($(window).scrollTop()<850){
	$('.services-block').fadeOut();
}

});

$(window).scroll(function(){
if($(window).scrollTop()>1700){
$('.skills-block').fadeIn(600);
} 
else if($(window).scrollTop()<1700){
	$('.skills-block').fadeOut();
}

});

$(window).scroll(function(){
if($(window).scrollTop()>2410){
$('.works-block').fadeIn(600);
} 
else if($(window).scrollTop()<2410){
	$('.works-block').fadeOut();
}

});

});

$(function() {
	$('#about').click(function() 
 {
 	$('body,html').animate({scrollTop: $('.about').height()},800);
 });

	$('#services').click(function() 
 {
 	$('body,html').animate({scrollTop:1500},800);
 });

	$('#skills').click(function() 
 {
 	$('body,html').animate({scrollTop:2300},800);
 });

	$('#projects').click(function() 
 {
 	$('body,html').animate({scrollTop:3100},800);
 });
});

$(function() {
	$('.img-main img').mouseover(function() 
	{
		$('.lent').fadeIn(300);
		$('.lent').animate({top: -350},300);
		$('.award').fadeIn(300);
	});

	$('.img-main img').mouseout(function() 
	{
		$('.lent').fadeOut(300);
		$('.lent').animate({top: -430});
		$('.award').fadeOut(300);
	});
});

$(function() {
	$('#prog-1').mouseover(function() 
	{
		$('#prog-1-1').fadeIn(300);
	});

	$('#prog-1').mouseout(function() 
	{
		$('#prog-1-1').fadeOut(1);
	});

	$('#prog-2').mouseover(function() 
	{
		$('#prog-1-2').fadeIn(300);
	});

	$('#prog-2').mouseout(function() 
	{
		$('#prog-1-2').fadeOut(1);
	});

	$('#prog-3').mouseover(function() 
	{
		$('#prog-1-3').fadeIn(300);
	});

	$('#prog-3').mouseout(function() 
	{
		$('#prog-1-3').fadeOut(1);
	});

	$('#prog-4').mouseover(function() 
	{
		$('#prog-1-4').fadeIn(300);
	});

	$('#prog-4').mouseout(function() 
	{
		$('#prog-1-4').fadeOut(1);
	});

	$('#prog-5').mouseover(function() 
	{
		$('#prog-1-5').fadeIn(300);
	});

	$('#prog-5').mouseout(function() 
	{
		$('#prog-1-5').fadeOut(1);
	});

	$('#prog-6').mouseover(function() 
	{
		$('#prog-1-6').fadeIn(300);
	});

	$('#prog-6').mouseout(function() 
	{
		$('#prog-1-6').fadeOut(1);
	});

	$('#prog-7').mouseover(function() 
	{
		$('#prog-1-7').fadeIn(300);
	});

	$('#prog-7').mouseout(function() 
	{
		$('#prog-1-7').fadeOut(1);
	});

	$('#prog-8').mouseover(function() 
	{
		$('#prog-1-8').fadeIn(300);
	});

	$('#prog-8').mouseout(function() 
	{
		$('#prog-1-8').fadeOut(1);
	});

});

}
else {

}
