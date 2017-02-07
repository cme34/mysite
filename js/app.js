(function() {
	$(document).foundation();
	
	function slideShow(slideShowID, holdTime, transitionTime) {
		var curr = 0;
		var slides = $('#' + slideShowID).find(".slide");
		
		$('#' + slides[0].id).show();
		stay();
		
		function stay() {
			setTimeout(fade, holdTime);
		}
		
		function fade() {
			next = curr + 1;
			if (next >= slides.length) {
				next = 0;
			}
			$('#' + slides[curr].id).fadeOut('slow');
			$('#' + slides[next].id).fadeIn('slow');
			curr = next;
			setTimeout(stay, transitionTime);
		}
	}
	
	slideShow('slideShow1', 4000, 1000);
	
	function setCurrPage() {
		var loc = $(window).scrollTop();
		var pointAbout = $('#about').position().top - $('#nav').height();
		var pointProgramming = $('#programming').position().top - $('#nav').height();
		var pointMusic = $('#music').position().top - $('#nav').height();
		var pointGameDev = $('#gameDev').position().top - $('#nav').height();
		var pointGaming = $('#gaming').position().top - $('#nav').height();
		$('#buttonHome').css('border-bottom-color', 'rgba(128, 256, 128, 0)');
		$('#buttonAbout').css('border-bottom-color', 'rgba(128, 256, 128, 0)');
		$('#buttonProgramming').css('border-bottom-color', 'rgba(128, 256, 128, 0)');
		$('#buttonMusic').css('border-bottom-color', 'rgba(128, 256, 128, 0)');
		$('#buttonGameDev').css('border-bottom-color', 'rgba(128, 256, 128, 0)');
		$('#buttonGaming').css('border-bottom-color', 'rgba(128, 256, 128, 0)');
		if (loc < pointAbout) {
			$('#buttonHome').css('border-bottom-color', 'rgba(128, 256, 128, 1)');
		} else if (loc < pointProgramming && loc >= pointAbout) {
			$('#buttonAbout').css('border-bottom-color', 'rgba(128, 256, 128, 1)');
		} else if (loc < pointMusic && loc >= pointProgramming) {
			$('#buttonProgramming').css('border-bottom-color', 'rgba(128, 256, 128, 1)');
		} else if (loc < pointGameDev && loc >= pointMusic) {
			$('#buttonMusic').css('border-bottom-color', 'rgba(128, 256, 128, 1)');
		} else if (loc < pointGaming && loc >= pointGameDev) {
			$('#buttonGameDev').css('border-bottom-color', 'rgba(128, 256, 128, 1)');
		} else {
			$('#buttonGaming').css('border-bottom-color', 'rgba(128, 256, 128, 1)');
		}
	}
	
	$(window).scroll(function() {
		setCurrPage()
	});
	
	$(window).resize(function() {
		setCurrPage()
	});
	
	setCurrPage();
	
	$('#buttonHome').click(function() {
		$('html, body').finish();
		$('html, body').animate({scrollTop: $('#home').offset().top}, 500);
	});
	
	$('#buttonAbout').click(function() {
		$('html, body').finish();
		$('html, body').animate({scrollTop: $('#about').offset().top}, 500);
	});
	
	$('#buttonProgramming').click(function() {
		$('html, body').finish();
		$('html, body').animate({scrollTop: $('#programming').offset().top}, 500);
	});
	
	$('#buttonMusic').click(function() {
		$('html, body').finish();
		$('html, body').animate({scrollTop: $('#music').offset().top}, 500);
	});
	
	$('#buttonGameDev').click(function() {
		$('html, body').finish();
		$('html, body').animate({scrollTop: $('#gameDev').offset().top}, 500);
	});
	
	$('#buttonGaming').click(function() {
		$('html, body').finish();
		$('html, body').animate({scrollTop: $('#gaming').offset().top}, 500);
	});
	
	$('.myHeader').css('padding-top', $('#nav').height());
	$('.myHeader').css('padding-bottom', $('#nav').height());
})();