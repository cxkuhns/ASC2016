var database = firebase.database().ref();
var storage = firebase.storage();
var storageRef = storage.ref();
var imagesRef = storageRef.child('images');
var filename;
var ftype;
var fsize;
var submit = false; //flag var to make sure user has chosen a photo
var count = 0; //number of entries in database
var levelsum = 0; //sum of water levels in database. divided by count to estimate current water level.
var today = new Date();
var thismonth = (today.getMonth()+1);

//Goes thru everything in the database rn.
database.once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {

    var childData = childSnapshot.val();
    
     //check if the info was added recently
    if ((childData.month==thismonth)|| //if it was taken this month
    	((today.getDate()<7)&&(childData.month==(thismonth-1))&&(childData.day>21))  || //or its early in the month
    																// and the photo was taken late last month
    	((today.getDate()<7)&&(thismonth==1)&&(childData.year==(today.getFullYear()-1))&&(childData.month==12)&&(childData.day>21)) //or its early jan and the pic was taken late last year
    	){

    	//makes the background
    	$('#bgGrid').append("<div class='col-lg-4 col-md-4 col-xs-4 mySquare' style='background-image: url(" + childData.pic + ")'><h2>" + childData.name + "</h2><h3>" + childData.month +"/"+ childData.day + "/" + childData.year + "</h3></div>");
        count+=1;
        levelsum+=childData.level;
    }

    if (count>0){ //don't divide by 0
	    if ((levelsum/count) >= 3){
	    	document.getElementById('ans').innerHTML = "Yes";
	    }
	    else{
	    	document.getElementById('ans').innerHTML = "No";
	    }
	}

  }); //snapshot.forEach()
}); //database.once()


//event listener for file upload
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
    //sets flag var to true
    submit = true;

}, false);


//function when button is clicked - sends all info to firebase
function sendMessage(){
	if (submit){
		var uname = $('#name').val();
		var fextens;

		//check that upload is valid image format
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
			database.push({
				'name': uname,
				'month': (d.getMonth()+1),
				'day': d.getDate(),
				'year': d.getFullYear(),
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