var imgPos = {},
    $img = $("img"),
    offset = $img.offset(),
    maxWidth = 600,
    maxHeight = 600,
    img = document.querySelector(".map");

$img.mousemove(function(e){
  imgPos = {
    left: e.pageX - offset.left,
    top: e.pageY - offset.top
  };
  
  var resultTop = ((Math.round(imgPos.top) / maxHeight) * 100) + "%";
  
  var resultLeft = ((Math.round(imgPos.left) / maxWidth) * 100) + "%";
  
  var result = resultTop + ", " + resultLeft;
  
  img.style.objectPosition = resultLeft + resultTop;
  setTimeout(function(){
      img.style.transition = "object-position .1s ease";
  }, 1000);
  console.log(img.style.objectPosition);
});

$img.mouseout(function(e) {
  img.style.objectPosition = "";
  img.style.transition = "";
});


/*MENU*/

$('.menu, nav').click(function(){
if ($('.menu').hasClass('active')) {
  $('nav ul').removeClass('active');
  $('nav').delay(800).fadeOut('slow');
  setTimeout(function() {
    $('.menu').removeClass('active');
    $('.section-wrap').removeClass('active');
   }, 800);
} else {
	$('.menu').addClass('active');
  $('nav').fadeIn('slow');
  $('nav').addClass('active');
  $('nav ul').addClass('active');
  $('.section-wrap').addClass('active');
}
});

/*MOUSEMOVE TRANSFORM 3D*/

!(function ($doc, $win) {
	var screenWidth = $win.screen.width / 2,
		screenHeight = $win.screen.height / 2,
		$elems = $doc.getElementsByClassName("elem"),
		validPropertyPrefix = '',
		otherProperty = 'perspective(1000px)',
		elemStyle = $elems[0].style;

	if(typeof elemStyle.webkitTransform == 'string') {
		validPropertyPrefix = 'webkitTransform';
	} else if (typeof elemStyle.MozTransform == 'string') {
		validPropertyPrefix = 'MozTransform';
	}


	$doc.addEventListener('mousemove', function (e) {
		var centroX = e.clientX - screenWidth,
			centroY = screenHeight - (e.clientY + 13),
			degX = centroX * 0.04,
			degY = centroY * 0.01,
			$elem

		for (var i = 0; i < $elems.length; i++) {
   			$elem = $elems[i];
			$elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
		};
	});
})(document, window);




$('nav ul li').on('click', function(){
	/*here we make a variable to get the name of the clicked li*/
	var elementName = $(this).attr('name');
	$('.page.active').fadeOut(800).removeClass('active');
	$('.page.'+elementName).delay(1000).fadeIn(1000).addClass('active');
});