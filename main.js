$(document).on('ready', function() {
  
  $('.textbox').on('click', function() {
  	$(this).toggleClass("is-hidden");
  	$(this).next().toggleClass("is-hidden");
  	$(this).next().off('click');
  })

  $('.save-button').on('click', function() {
  	var movieInput = $(this).prev('input').val();
  	$(this).parent().toggleClass("is-hidden");
  	$(this).parent().prev().toggleClass("is-hidden");
  	$(this).parent().prev().html("<p>" + movieInput + "</p>");
  	$(this).parent().prev().css('color', 'blue');
  })
// This selects whole document and any element that has 
// a 'contentEditable' attribute will be editable
/*  	$(document).on('click', function(e) {
  		$(e.target).attr('contentEditable', true);
  	});*/

// This uses x-editable 
  	$.fn.editable.defaults.mode = 'inline';
  	$('#x-editable').editable( {
  			type: 'textarea',
  			pk: 1,
  			url: '',
  			title: 'Enter Comments',
  			rows: 10,
  			inputclass: 'textbox',
  		});
});