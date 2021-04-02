//Build the elements:
var textArea7AMEl = document.getElementById('7AM')
var textArea8AMEl = document.getElementById('8AM')
var textArea9AMEl = document.getElementById('9AM')
var textArea10AMEl = document.getElementById('10AM')
var textArea11AMEl = document.getElementById('11AM')
var textArea12PMEl = document.getElementById('12PM')
var textArea1PMEl = document.getElementById('1PM')
var textArea2PMEl = document.getElementById('2PM')
var textArea3PMEl = document.getElementById('3PM')
var textArea4PMEl = document.getElementById('4PM')


var elementArray = [textArea7AMEl, 
    textArea8AMEl, 
    textArea9AMEl, 
    textArea10AMEl,
    textArea11AMEl,
    textArea12PMEl,
    textArea1PMEl,
    textArea2PMEl,
    textArea3PMEl,
    textArea4PMEl,
    ];
var saveBtn = document.getElementsByClassName('saveBtn');

//Use moment to establish current time and date
var today = moment();

//Use JQuery to display date at top of form
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

var currentHour = moment().format("HH");

//set up loop to set the class for each 'textarea' per row based on comparison to current time
//build an array for number of rows (hours in a day) to show
var hoursPerDay=[7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//use to check:
//currentHour=11;
function timeCheck(){
for (var i=0; i<=(hoursPerDay.length-1); i++) {
if (hoursPerDay[i] < currentHour) {
    elementArray[i].classList.add('past');
} else if (hoursPerDay[i] == currentHour) {
    elementArray[i].classList.add('present');
} else {
    elementArray[i].classList.add('future');
}}}
//leave timeCheck here to run whenever the page is loaded. will it reload after a button click? 
timeCheck();

//build a function to save the text in the text area to local storage
//function will execute when clicking save button
//use recall function at end of click function to paste the local storage back to the text area

for (var z=0; z< hoursPerDay.length; z++){
    saveBtn[z].addEventListener("click", function (event){
event.preventDefault();

var toDo =[];
for (var j=0; j<=(hoursPerDay.length-1); j++){
    toDo[j] = elementArray[j].value;
console.log('on click' +toDo);
localStorage.setItem('toDoArray', JSON.stringify(toDo));
//recallToDo();
}})

//function to call toDo text out of local storage and keep it displayed in the textArea after refreshing
function recallToDo(){
    var toDoRecall = JSON.parse(localStorage.getItem("toDoArray"));
    console.log(toDoRecall);
    if(toDoRecall !== null){
    for(k=0; k<=(hoursPerDay.length-1); k++) {
    elementArray[k].textContent = toDoRecall[k];
}}}};

recallToDo();

