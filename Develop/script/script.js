// timeBlock is an object that contains each hour and associated with it is an empty string
let timeBlock = [
    {time: "12 am", text: ""},
    {time: "1 am", text: ""},
    {time: "2 am", text: ""},
    {time: "3 am", text: ""},
    {time: "4 am", text: ""},
    {time: "5 am", text: ""},
    {time: "6 am", text: ""},
    {time: "7 am", text: ""},
    {time: "8 am", text: ""},
    {time: "9 am", text: ""},
    {time: "10 am", text: ""},
    {time: "11 am", text: ""},
    {time: "12 pm", text: ""},
    {time: "1 pm", text: ""},
    {time: "2 pm", text: ""},
    {time: "3 pm", text: ""},
    {time: "4 pm", text: ""},
    {time: "5 pm", text: ""},
    {time: "6 pm", text: ""},
    {time: "7 pm", text: ""},
    {time: "8 pm", text: ""},
    {time: "9 pm", text: ""},
    {time: "10 pm", text: ""},
    {time: "11 pm", text: ""},
]

// using bootstrap, generate html for each timeBlock object 

    // generate a row for every hour

    // start with a div that displays each hour of the day, grabbing that info from the timeBlock object

    // and then create a textarea for each hour

    // finally create a save button at the end of the row

    // append the html to the page


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

$('.saveBtn').on('click', function() {
    // grab the value of the taskText
    let taskText = $(this).parent('.timeline').children('textarea')
    let textId = taskText.attr('id');

    // testing for values
    // console.log(taskText.val());
    // console.log(textId);

    // save the data to localStorage
    // localStorage.setItem("")
    localStorage.setItem("task-" + textId, taskText.val());
});
