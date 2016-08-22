
var url="http://maps.googleapis.com/maps/api/staticmap?center=601+26th+St.+NYC&zoom=16&size=600x300";

var markerStart="&markers=icon:http://orig05.deviantart.net/4dcb/f/2012/302/8/6/pikachu_sprite_by_pokedan1-d5j3am9.png%7Cshadow:true%7C";

var pikas=["1000 26th St. NYC","500 26th St. NYC", "500 30th St. NYC"];

for (var i = 0; i < pikas.length; i++){
	url = url + markerStart + encodeURI(pikas[i]);
}

var htmlIMG=document.createElement("img");
$("body").append(htmlIMG);
$("img").attr("src",url);

