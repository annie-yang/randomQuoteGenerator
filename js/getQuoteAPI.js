// Mashape API
function getQuote() {
	$.ajax({
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
		type: 'POST',
		data: {},
		dataType:'json',
		success: function(data) {
			$("#displayQuote").text(data.quote + " - " + data.author);
		},
		error: function(err) { // error
			alert(err);
		},
		beforeSend: function(xhr) { // calls function first before running send
			// set request header so the called script knows that it's a key
			xhr.setRequestHeader("X-Mashape-Authorization", "vc55Nypybsmsh0QpVjFDuxrYpSymp1usZU7jsnInCVV7XHLcEM");} // Key
	});
}

$(document).ready(function(){
	$('.newQuote').on('click', function(){ // when button clicked
		$("#displayQuote").html(getQuote); // display quote
	});
});

$(function(){
	getQuote(); // call function
});
