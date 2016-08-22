//called on button click
function grabData(){
	//takes value in the input field 
	var name = $("#name").val();
	//$.ajax makes a query to a website using one parameter, an object (notice the JSON format of this object)
	$.ajax({
		url:'http://www.omdbapi.com/?t=' + name, //the key:value pairing is constructed from our understanding of what parameters are needed
		success:function(result){
			//when the query is successful, the results are given back in the form on a JSON object "result"
			print(result);
		}
	})
}

//called on a successful .ajax query
function print(obj){
	//resets the HTML content before filling it in
	$('#content').text('');
  	//for loop written in shorthand for looping through each key:value item provided by "obj", which is the "result" from the ajax query
  	for(var prop in obj){
  		$('#content').append('<p>' + prop + ': ' + obj[prop] +'</p>');
  	}
}

$('#submit').click(function(){
	grabData();
})

