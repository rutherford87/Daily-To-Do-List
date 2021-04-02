//Build the elements:
var textArea7AMEl = document.getElementById('7AM')
var textArea8AMEl = document.getElementById('8AM')
var textArea9AMEl = document.getElementById('9AM')
var elementArray = [textArea7AMEl, textArea8AMEl, textArea9AMEl];
var saveBtn8 = document.getElementById('saveBtn8');

//Use moment to establish current time and date
var today = moment();
var input = $(".input");

//Use JQuery to display date at top of form
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

var currentHour = moment().format("HH");

//set up loop to set the class for each 'textarea' per row based on comparison to current time
//build an array for number of rows (hours in a day) to show
var hoursPerDay=[7, 8, 9];
//use to check:
//currentHour=8;
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
}

//leave timeCheck here to run whenever the page is loaded. will it reload after a button click? 
timeCheck();

//build a function to save the text in the text area to local storage
//function will execute when clicking save button
//use recall function at end of click function to paste the local storage back to the text area

saveBtn8.addEventListener("click", function(event) {
event.preventDefault();

var toDo8 = textArea8AMEl.value
console.log(toDo8);
localStorage.setItem('to do at 8AM', JSON.stringify(toDo8));
recallToDo();
})

//function to call toDo text out of local storage and keep it displayed in the textArea after refreshing
function recallToDo(){
    var toDo8Loc = JSON.parse(localStorage.getItem("to do at 8AM"));
    console.log(toDo8Loc);
    textArea8AMEl.textContent = toDo8Loc;
}


//to revisit the class add function:
// console.log('this is element array');
// console.log(elementArray);
// elementArray[1].classList.add('past');
// console.log(elementArray);
// textArea7AMEl.classList.add('present');
// console.log(elementArray);
// textArea7AMEl.classList.remove('present');
// console.log(elementArray);