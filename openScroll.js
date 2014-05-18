// craig kahle 1/26/14
// simple paralax implementation



$(document).ready(function(){
	$('.fullwidth').animate({'margin-top': '0px'}, 1000);

});

// scroll opactiy for all


$(window).scroll(function(){
	var top =  $(window).scrollTop() * .01 / 10 ;
	var state = false;
	if ( top <= 1 ) {
		$('.fullwidth').css( 'opacity' , 1 - top );
		//$('.fullwidth2').css( 'opacity' , 1 - top );


		//.css('opacity', '0');
		//.animate({ 'background-color' : 'rgb(255, 255, 255)' }, 100);
		state = true;
	}
});

//margin-left fake

$(window).scroll(function(){
	var top =  $(window).scrollTop();
	var state = false;
	if ( top > 0 ) {
		$('.fullwidth').css( 'margin-left' , -top);

		//.css('opacity', '0');
		//.animate({ 'background-color' : 'rgb(255, 255, 255)' }, 100);
		state = true;
	} else {
		$('.fullwidth').css( 'margin-left' , 0);

	}
});

$(window).scroll(function(){
	var top =  $(window).scrollTop();
	var fullwidth2 = $('.fullwidth2').height();
	var fullwidth = $('.fullwidth').height();
	var newHeight = $(window).height();
	if ( top > fullwidth ) {
		$('.fullwidth2').animate( {height: newHeight} ), 1000;

	}
});

// margin-left

$(window).scroll(function(){
	var top =  $(window).scrollTop();
	var state = false;
	var fullwidth2 = $('.fullwidth2').height();

	if ( top > fullwidth2 ) {
		$('.fullwidth2').css( 'margin-left' , top - fullwidth2); // use div height instead of explicit

		//.css('opacity', '0');
		//.animate({ 'background-color' : 'rgb(255, 255, 255)' }, 100);
		state = true;
	} else {
		$('.fullwidth2').css( 'margin-left' , 0);

	}
});

// margin-right

$(window).scroll(function(){
	var top =  $(window).scrollTop();
	var state = false;
	var fullwidth2 = $('.fullwidth2').height();
	var fullwidth3 = $('.fullwidth3').height();

	if ( top > (fullwidth2 + fullwidth3) ) {
		$('.fullwidth3').css( 'margin-left' , -top + (fullwidth2+fullwidth3));

		//.css('opacity', '0');
		//.animate({ 'background-color' : 'rgb(255, 255, 255)' }, 100);
		state = true;
	} else {
		$('.fullwidth3').css( 'margin-left' , 0);

	}
});
