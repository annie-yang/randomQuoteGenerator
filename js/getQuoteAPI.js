// if button clicked, generate quote from API
$(document).ready(function(){
	$(".newQuote").on("click", function(){
		$("#displayQuote").html(generateQuote);
	});
});


// API from Forismatic
function generateQuote() {
	$.ajax({
		url: "http://api.forismatic.com/api/1.0/?",
		dataType: "jsonp",
		data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
		success: function(res) { // displaying quote generated from API
			$("#displayQuote").html("<p id='quote' class='text-center'>" + res.quoteText + " &dash; " + res.quoteAuthor + "</p>");
		}
	});
}

$(function() {
	generateQuote(); // call function
});

$("button").click(function(){
	generateQuote(); // generate another new quote when button clicked
});
