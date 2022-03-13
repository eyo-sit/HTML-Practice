function countDown(){// Set the date we're counting down to
    var minutes = window. prompt("Enter how many minutes you would like to spend: ");
    while(minutes > 120){
        minutes = window. prompt("Please enter a value less than 120: ");
    }
    var hoursToAdd = 0;
    if(minutes >= 60) {
        hoursToAdd = 1;
        minutes -= 60;
    }
    var minutesToAdd=minutes;
    var currentDate = new Date();
    var countDownDate = new Date(currentDate.getTime() + minutesToAdd*60000);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    alert("TIME'S UP");
  }
}, 1000); 
alert("Starting timer for "+ hoursToAdd + " hours and " + minutesToAdd + " minutes");
}

function newApp(){

}