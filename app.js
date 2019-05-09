var upper = 1000000000;
var randomNumber = getRandomNumber(upper);
var guess;
var counter = 0;
var secOrMillisec = 'milliseconds';

// Used for showing comma separated numbers, i.e., thousands, millions, billions.
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// This is the random number generator
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// Prints out the result of random number generator
document.write("This is computer's random number: <span class=\"numeric-box\">" + numberWithCommas(randomNumber) + "</span></p>");

// This stores the time start of the guesser loop
var timeStart = performance.now();
// This calls the getRandomNumber function to generate random numbers until it finds a match with the original random number
while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  counter++;
}
// This stores the time ended of the guesser loop
var timeEnded = performance.now();

// If guesser loop takes more than 1000 milliseconds change the output to seconds instead of milliseconds 
function milliSecChanger(upper) {
  if ((timeEnded - timeStart) > 1000) {
    secOrMillisec = 'seconds';
    return ((timeEnded - timeStart)/1000).toFixed(2);
  } else { 
    return timeEnded - timeStart
  }
}

// Prints out the results
document.write("<p>The script found computer's random number: <span class=\"numeric-box\">" + numberWithCommas(guess) + "</span></p>");
// document.write("<p>The script took " + numberWithCommas(counter) + " tries to guess correctly.");
document.write("<p>The script took <span class=\"numeric-box\">" + milliSecChanger() + "</span> " + secOrMillisec + " and <span class=\"numeric-box\">" + numberWithCommas(counter) + "</span> tries to guess correctly.</p>");