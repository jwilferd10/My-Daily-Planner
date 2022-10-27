// If nothning is in localStorage, set list into an empty array
let savedUserEntry = JSON.parse(localStorage.getItem('savedEntry')) || [];

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

$('.saveBtn').on('click', function(event) {
    // grab the value of the taskText
    let taskText = $(this).parent('.timeline').children('textarea')
    console.log(taskText.val());


    let textId = taskText.attr('id');

    console.log(textId);

    // let taskText = $(this).siblings('.taskEntry').val();
    // let timeBlock = taskText.attr('id');

    // console.log(timeBlock);
    // console.log(taskText);

    // Add the new entry to local 'savedUserEntry' variable
    // savedUserEntry.push(userEntry);
})

