$(function() {

	console.log("I work");

	var value;
	var timer;

	//on click start display, count up every 1 second
	$("#start").click(function(){
		console.log("start button clicked");

		// every second call updateDisplay
		timer = setInterval(updateDisplay, 1000);
	});

	//clearInterval for test (=setInterval)
	$("#stop").click(function(event){
		console.log("stop button clicked");
		clearInterval(timer);
	});

	//set value back to 0
	$("#reset").click(function(event){
		console.log("rest button clicked");
		value = 0;
		$('#stopwatch').find('.value').text(value);
	});

	//on click, countDown 1 second
	$("#countdown").click(function(event){
		console.log("countdown button clicked");
		timer = setInterval(countDown, 1000);
	});

	function updateDisplay() {
	    var value = parseInt($('#stopwatch').find('.value').text(), 10);
	    value++;
	    $('#stopwatch').find('.value').text(value); }

	function countDown() {
	    var value = parseInt($('#stopwatch').find('.value').text(), 10);
	    value--;
	    $('#stopwatch').find('.value').text(value); }
});
