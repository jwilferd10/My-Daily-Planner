// timeBlock is an object that contains each hour and associated with it is an empty string. timeID is going to be compared with currentHour and add CSS based on criteria 
let timeBlock = [
    {time: "12 am", text: "", timeID: 1},
    {time: "1 am", text: "", timeID: 2},
    {time: "2 am", text: "", timeID: 3},
    {time: "3 am", text: "", timeID: 4},
    {time: "4 am", text: "", timeID: 5},
    {time: "5 am", text: "", timeID: 6},
    {time: "6 am", text: "", timeID: 7},
    {time: "7 am", text: "", timeID: 8},
    {time: "8 am", text: "", timeID: 9},
    {time: "9 am", text: "", timeID: 10},
    {time: "10 am", text: "", timeID: 11},
    {time: "11 am", text: "", timeID: 12},
    {time: "12 pm", text: "", timeID: 13},
    {time: "1 pm", text: "", timeID: 14},
    {time: "2 pm", text: "", timeID: 15},
    {time: "3 pm", text: "", timeID: 16},
    {time: "4 pm", text: "", timeID: 17},
    {time: "5 pm", text: "", timeID: 18},
    {time: "6 pm", text: "", timeID: 19},
    {time: "7 pm", text: "", timeID: 20},
    {time: "8 pm", text: "", timeID: 21},
    {time: "9 pm", text: "", timeID: 22},
    {time: "10 pm", text: "", timeID: 23},
    {time: "11 pm", text: "", timeID: 24}
]

// START OF CURRENT DATE FOR HEADER DISPLAY //

// using moment.js format todays date
const m = moment();
var currentDate = m.format("dddd, MMMM Do YYYY");
// use the text content from currentDate and set it as currentDays text
$(currentDay).text(currentDate);

// END OF CURRENT DATE FOR HEADER DISPLAY //

// START OF GENERATING APPLICATION TIMEBLOCKS //

// using bootstrap, generate html for each timeBlock object 

    // generate a row for every hour

    // start with a div that displays each hour of the day, grabbing that info from the timeBlock object

    // and then create a textarea for each hour

    // finally create a save button at the end of the row

    // append the html to the page

// END OF GENERATING APPLICATION TIMEBLOCKS //

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
