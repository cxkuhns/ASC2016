var database = firebase.database().ref();

//The callback function defined will happen one time
//"snapshot" is a snapshot of EVERYTHING in the database at the time the function's called
database.once("value", function(snapshot) {
  
  //for each row in the snapshot of the database, do this inner callback function.
  snapshot.forEach(function(childSnapshot) {
    //get the value of one row of the database
    var childData = childSnapshot.val();

    //do stuff with that row
    $('#messageBoard').append("<p> <b>"+childData.name+"</b> "+childData.date+"<br> <img src= '"+childData.pic+"'> </p>");
	console.log(childData.name+", "+childData.date+", "+childData.pic);

  });//end of inner function

});//end of outer function