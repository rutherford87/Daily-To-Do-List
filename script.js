//Build the elements:
var textArea7AMEl = document.getElementById('7AM')
var textArea8AMEl = document.getElementById('8AM')
var textArea9AMEl = document.getElementById('9AM')
var elementArray = [textArea7AMEl, textArea8AMEl, textArea9AMEl];

//Use moment to establish current time and date
var today = moment();
console.log('today is from moment '+ today);
var input = $(".input");

$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

var currentHour = moment().format("HH");
console.log (currentHour);
//set up function to establish what hour it is currently in the day
//set up loop to set the class for each 'textarea' per row based on comparison to current time

//build an array for number of rows (hours in a day) to show
var hoursPerDay=[7, 8, 9];
//var currentHour =7;
//assign future to all rows intially?

//if the hour assigned a row (how is it assigned --> doesn't need to be assigned, do it this way:
currentHour=8;
function timeCheck(){
for (var i=0; i<=(hoursPerDay.length-1); i++) {
if (hoursPerDay[i] < currentHour) {
    elementArray[i].classList.add('past');
} else if (hoursPerDay[i] == currentHour) {
    elementArray[i].classList.add('present');
} else {
    elementArray[i].classList.add('future');
}
}
console.log(elementArray);
}

//leave timeCheck here to run whenever the page is loaded. will it reload after a button click? 
timeCheck();
// might have to add in textArea7AMEl.classList.remove('past')
//textArea7AMEl.classList.remove('future') in order to override pre-added classes


//to revisit the class add function:
// console.log('this is element array');
// console.log(elementArray);
// elementArray[1].classList.add('past');
// console.log(elementArray);
// textArea7AMEl.classList.add('present');
// console.log(elementArray);
// textArea7AMEl.classList.remove('present');
// console.log(elementArray);