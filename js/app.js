$(document).ready(function(){
	// When the users' cursor enters .ryu, an animation of ryu will be displayed. //
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	// When the mouse is clicked, ryu is shown throwing his Hadouken attack //
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1100px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '569px', 'opacity', '0.1');
			}
		);
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	// When X is held down, Ryu strikes a cool pose//
	$('body').keydown(function(event){
		if (event.which == 88){
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(event) {
		if (event.which == 88){
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
		}
	});
});
// Plays the audio clips of Ryu//
function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}