$(document).on('click', '#submit' , function (){
	$.ajax({
		type: 'POST',
		data: '',
		url: 'ajax.php',
		success:
		function(response){
			$('#content').html(response);
		}
	})
})
$(document).on('click', '#submit' , function (){
	$.ajax({
		type: 'POST',
		data: '',
		url: 'style.php',
		success:
		function(response){
			$('head').html(response);
		}
	})
})
