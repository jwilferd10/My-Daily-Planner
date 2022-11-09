// timeBlock is an object that contains each hour and associated with it is an empty string. timeID is going to be compared with currentHour and add CSS based on criteria 
let timeBlock = [
    {time: "12 am", text: "", timeID: 0},
    {time: "1 am", text: "", timeID: 1},
    {time: "2 am", text: "", timeID: 2},
    {time: "3 am", text: "", timeID: 3},
    {time: "4 am", text: "", timeID: 4},
    {time: "5 am", text: "", timeID: 5},
    {time: "6 am", text: "", timeID: 6},
    {time: "7 am", text: "", timeID: 7},
    {time: "8 am", text: "", timeID: 8},
    {time: "9 am", text: "", timeID: 9},
    {time: "10 am", text: "", timeID: 10},
    {time: "11 am", text: "", timeID: 11},
    {time: "12 pm", text: "", timeID: 12},
    {time: "1 pm", text: "", timeID: 13},
    {time: "2 pm", text: "", timeID: 14},
    {time: "3 pm", text: "", timeID: 15},
    {time: "4 pm", text: "", timeID: 16},
    {time: "5 pm", text: "", timeID: 17},
    {time: "6 pm", text: "", timeID: 18},
    {time: "7 pm", text: "", timeID: 19},
    {time: "8 pm", text: "", timeID: 20},
    {time: "9 pm", text: "", timeID: 21},
    {time: "10 pm", text: "", timeID: 22},
    {time: "11 pm", text: "", timeID: 23}
]

// START OF CURRENT DATE FOR HEADER DISPLAY //

// using moment.js format todays date
const m = moment();

var currentDate = m.format("dddd, MMMM Do YYYY");

// use the text content from currentDate and set it as currentDays text
$(currentDay).text(currentDate);

// set current time to global & use moment.js to grab the hours of the day  
var currentTime = moment().format("H");
   
// END OF CURRENT DATE FOR HEADER DISPLAY //

// START OF GENERATING APPLICATION TIMEBLOCKS //

// for each timeBlock run a function that uses the objects index and element to generate html for each time block
$.each(timeBlock, function(index, item) {

    // generate a row for every hour NOTE: !!TIMELINE IS USED FOR THE COLOR CODED TIMEBLOCKS!!
    let timeBlockEl = $("<section>").addClass("row mb-4 mb-5-sm timeline");
    
        // start with a div that displays each hour of the day, grabbing that info from the timeBlock object
        let hourEl = $("<div>").text(item.time).addClass("col-1 border border-dark hour text-center h4");
    
        // and then create a textarea for each hour
        let taskEntryEl = $("<textarea>").addClass("border border-dark col-10 text-dark font-weight-bold");

        // finally create a save button at the end of the row
        let saveBtnEl = $("<button>").addClass("col-1 saveBtn").append("<span>").addClass("fas fa-save").attr("id", "btnIcon");

        // append each element to timeBlockEl
        timeBlockEl.append(hourEl, taskEntryEl, saveBtnEl);

    // append the html to timeblockWrapper
    $(".timeblockWrapper").append(timeBlockEl)

    //  run an if statement to determine time of day, depending on criteria taskEntryEl will change colors to indicate deadlines to user
    if (item.timeID === currentTime) {
        taskEntryEl.addClass("present");
    }
    else if (item.timeID < currentTime) {
        taskEntryEl.addClass("past");
    }
    else {
        taskEntryEl.addClass("future");
    }
});

// END OF GENERATING APPLICATION TIMEBLOCKS //

// Connects to the class attribute 'timeline' found in parent div's for each row. The function checks for current time
// var coloredTimeblocks = function() {

// $('.timeline').each(timeBlock, function(index, item) {

//     // Using taskTime and currentHour to determine hour of day

// });

// }

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
