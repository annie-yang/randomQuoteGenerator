$(document).ready(function(){
	$(".newQuote").on("click", function(){
		$("#displayQuote").html(randomQuote);
	});
});

function randomQuote() {
	$.ajax({
		url: "http://api.forismatic.com/api/1.0/?",
		dataType: "jsonp",
		data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
		success: function(res) {
			$("#displayQuote").html("<p id='random_quote' class='lead text-center'>" + res.quoteText + " &dash; " + res.quoteAuthor + "</p>");
		}
	});
}

$(function() {
	randomQuote();
});

$("button").click(function(){
	randomQuote();
});
