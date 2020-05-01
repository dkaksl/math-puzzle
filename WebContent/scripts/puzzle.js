$(document).ready(function () {
	$(".answer").text(function () {
		return "4";
	});
	$(".number:not(#hardCoded)").text(function () {
		return " ";
	});
	$("#hardCoded").text(function () {
		return 9;
	});
	$("#clearButton").click(function () {
		$(".number:not(#hardCoded)").text(function () {
			return "";
		});
	});
	$("#randomButton").click(function () {
		$(".number:not(#hardCoded)").text(function () {
			return Math.floor(Math.random() * 10) + 1;
		});
	});
	$("#evaluateButton").click(function () {
		alert('you pressed the evaluate button');
	});

});