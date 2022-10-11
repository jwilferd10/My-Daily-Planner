let saveBtnEl = document.getElementsByClassName("saveBtn");
let testValue = document.getElementById("1").value;

// Using moment.js for calender display 
// Grabbing header using DOM & setting up moment.js 
var header = document.header;
const m = moment();
var currentDate = m.format("dddd, MMMM Do YYYY");
$(currentDay).text(currentDate);

// Connects to the class attribute 'timeline' found in parent div's for each row. The function checks for current time
$('.timeline').each(function() {
    // Uses moment.js to grab the hours of the day  
    var currentTime = moment().hours();
   
    // Converts currentTime to a number value 
    var currentHour = Number(currentTime);

    // Checks the id number associated with the p 
    var pId = $(this).children('div').children("p").attr("id");
        
    // taskTime converts pId into a useable number
    var taskTime = Number(pId);

    // Using taskTime and currentHour to determine hour of day
    // If time is no longer present, apply 'past' style from CSS
    if(taskTime < currentHour) {
        $(this).children("textarea").addClass('past')
    }
    // If task is currently within present hour, apply 'present' style from CSS
    else if(taskTime === currentHour) {
        $(this).children("textarea").addClass('present')
    }
    // If time is ahead of present hour, apply 'future' style from CSS
    else {
        $(this).children("textarea").addClass('future')
    }
});

// Add the ability to have an eventListener for all the save buttons
// saveBtn has been clicked
for (let i = 0; i < saveBtnEl.length; i++) {
    saveBtnEl[i].addEventListener("click", function() {
        // indicates buttons work
        console.log("I've been clicked!");

        // save the .val of taskEntry
        saveTask();

        // alert the user the entry has been saved
        window.alert("Your entry has been saved!");

        // save the id from the task 
        
        // save both taskEntry and taskID into localStorage setItem
    });
}

// create a function that saves the task of each of the text fields
let saveTask = function() {
    // let task = dgdfg;
    // let hour = dgdfg;
    console.log(testValue);
}

// retrieve from localStorage using getItem 