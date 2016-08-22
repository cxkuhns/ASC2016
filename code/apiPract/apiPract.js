$('#submit').click(
	function(){
		grabData();
	}
)

function grabData(){
	//grab value from input field
	var name = $('#name').val();

	$.ajax({
		url: 'http://www.omdbapi.com/?t='+name,
		success: function(result){
			print(result);
		}
	})

}

function print(obj){
	//reset title field
	$('#content').text('');
	for (var prop in obj){
		$('#content').append('<p>' + prop  + ': ' + obj[prop] + '</p>' );
	}

}