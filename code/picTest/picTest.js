var database = firebase.database().ref();
var storage = firebase.storage();
var storageRef = storage.ref();
var imagesRef = storageRef.child('images');
var filename;
var ftype;
var fsize;
var submit = false;

var control = document.getElementById("file");
control.addEventListener("change", function(event) {
    // When the control has changed, there are new files

    var i = 0,
        files = control.files,
        len = files.length;

    for (; i < len; i++) {
        /*console.log("Filename: " + files[i].name);
        console.log("Type: " + files[i].type);
        console.log("Size: " + files[i].size + " bytes");*/
        filename = files[i].name;
        ftype = files[i].type;
        fsize = files[i].size;
    }

    submit = true;

}, false);

function sendMessage(){
	if (submit){
		var uname = $('#name').val();
		var fextens;

		if (ftype.includes("png")){
			fextens = ".png";
		} 
		else if (ftype.includes("jpg") || ftype.includes("jpeg")){
			fextens = ".jpg";
		} 
		else {
			alert("Please upload a png or jpg file.");
			submit = false;
			return -1;
		}

		var level;
		if(document.getElementById('water1').checked) {
  			level=1;
		}else if(document.getElementById('water2').checked) {
  			level=2;
		}else if(document.getElementById('water3').checked) {
  			level=3;
		}else if(document.getElementById('water4').checked) {
  			level=4;
		}else if(document.getElementById('water5').checked) {
  			level=5;
		}else{
			alert("Please select current water level.");
			return -1;
		}

		var fname = Math.floor(Math.random()*(10**10));

		var uploadTask = storageRef.child('images/' + fname+fextens).put(control.files[0]);

		uploadTask.on('state_changed', function(snapshot){
		  // Observe state change events such as progress, pause, and resume
		  // See below for more detail
		}, function(error) {
		  // Handle unsuccessful uploads
			alert("Error! Code: "+error);
		}, function() {
		  // Handle successful uploads on complete
		  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
			var downloadURL = uploadTask.snapshot.downloadURL;
			var d = new Date();
			var date = (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear();
			database.push({
				'name': uname,
				'date': date,
				'level': level,
				'pic': downloadURL
			});
		});

		submit = false;
		document.getElementById('water1').checked = false;
		document.getElementById('water2').checked = false;
		document.getElementById('water3').checked = false;
		document.getElementById('water4').checked = false;
		document.getElementById('water5').checked = false;
		$('#name').val("");
		$('#file').val("");
	}
	else {
		alert("Please upload a file");
	}
}
