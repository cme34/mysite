function slideShowOld() {
	var curr = 1;
	$('#slideShowImage' + curr).show();
	stay();
	
	function stay() {
		setTimeout(fade, 4000);
	}
	
	function fade() {
		next = curr + 1;
		if (next > document.getElementsByClassName("slideShowImages").length) {
			next = 1;
		}
		$("#slideShowImage" + curr).fadeOut("slow");
		$("#slideShowImage" + next).fadeIn("slow");
		curr = next;
		setTimeout(stay, 1000);
	}
}

function slideShow(slideShowID) {
	var curr = 0;
	var slides = $('#' + slideShowID).find(".slide");
	
	$('#' + slides[0].id).show();
	stay();
	
	function stay() {
		setTimeout(fade, 4000);
	}
	
	function fade() {
		next = curr + 1;
		if (next >= slides.length) {
			next = 0;
		}
		$('#' + slides[curr].id).fadeOut('slow');
		$('#' + slides[next].id).fadeIn('slow');
		curr = next;
		setTimeout(stay, 1000);
	}
}