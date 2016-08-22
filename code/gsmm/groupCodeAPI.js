var url = "http://maps.googleapis.com/maps/api/staticmap?center=601+W.+26th+St.+NY&zoom=16&size=600x300&key=AIzaSyDJXU9P8ieyia_jPLo26RSrj4tx7Kq1rg4";

var markerStart = "&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/025-pikachu-icon.png%7Cshadow:true%7C";

var pikas = ["601 W 26th St. NY","500 W 30th St. NY","500 W 26th St. NYC","700 W 26th St. NYC","600 W 27th St. NYC"]

// 	url = url + markerStart + pik1 + markerStart +pik2;


for (var i=0; i<pikas.length; i++){
	var pika = encodeURI(pikas[i]);
	url = url + markerStart + pika;
}

var htmlIMG = document.createElement("img");
$("body").append(htmlIMG);
$("img").attr("src",url);