$(document).on('ready', function() {
  
  $('.textbox').on('click', function() {
  	$(this).toggleClass("is-hidden");
  	$(this).next().toggleClass("is-hidden");
  	$(this).next().off('click');
  })

  $('.save-button').on('click', function() {
  	var movieInput = $(this).siblings('input').val();
  	console.log(movieInput);
  	$(this).parent().toggleClass("is-hidden");
  	$(this).parent().prev().toggleClass("is-hidden");
  	$(this).parent().prev().html("<p>" + movieInput + "</p>");
  })

});