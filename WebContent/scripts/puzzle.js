$(document).ready(function() {
	$(".answer").text(function() {
		return "4";
	});
	$(".number:not(#hardCoded)").text(function() {
		return " ";
	});
	$("#hardCoded").text(function() {
		return 9;
	});
	$("#clearButton").click(function() {
		$(".number:not(#hardCoded)").text(function() {
			return "";
		});
	});
	$("#randomButton").click(function() {
		$(".number:not(#hardCoded)").text(function() {
			return Math.floor(Math.random() * 10) + 1;
		});
	});
	/*
	 * $("#puzzle").width(function() { var parentWidth =
	 * $("#puzzleContainer").width(); var puzzleWidth = (parentWidth * 0.7);
	 * return puzzleWidth + "%"; });
	 */

});