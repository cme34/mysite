function slideShow() {
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
		curr++;
		setTimeout(stay, 1000);
	}
}