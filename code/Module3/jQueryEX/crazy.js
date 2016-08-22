var H = $("h1");
H.click(function(){
	var num = Math.random();
	$("p").text("your number is " + num );
	if (num > .5){
		var HT = "H";
	}
	else{
		var HT = "T";
	}
	$("body").append(HT);
});