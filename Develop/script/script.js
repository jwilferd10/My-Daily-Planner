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
        let hourEl = $("<div>").text(item.time).addClass("col-1 border border-dark hour text-center h4").attr("id", item.time);
    
        // and then create a textarea for each hour
        let taskEntryEl = $("<textarea>").addClass("border border-dark col-10 text-dark font-weight-bold");

        // finally create a save button at the end of the row
        let saveBtnEl = $("<button>").addClass("col-1 saveBtn")

        // create a span element with an emoji as a class
        let btnIconEl = $("<span>").addClass("fas fa-save").attr("id", "btnIcon");

        // append the span element to saveBtnEl
        saveBtnEl.append(btnIconEl);

        // append each element to timeBlockEl
        timeBlockEl.append(hourEl, taskEntryEl, saveBtnEl);

    // append the html to timeblockWrapper
    $(".timeblockWrapper").append(timeBlockEl)

    //  run an if statement to determine time of day, depending on criteria taskEntryEl will change colors to indicate deadlines to user
    if (item.timeID == currentTime) {
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

// START OF SAVE BUTTON FUNCTION 

// when the save button is clicked run a function for each button that collects the data into localstorage
$('.saveBtn').each(function(index, item) {

    // add an onclick event that obtains 
    $(this).on("click", function() {

        // test if onclick works
        // window.alert("I've been clicked!");

        // define textId to grab the id of textarea div
        let textId = $(this).siblings("div").attr("id");

        // check textId value
        // console.log(textId);

        // grab the value of taskText from textarea
        let taskText = $(this).siblings('textarea').val();
        
        // check taskText value 
        // console.log(taskText);

        // save data to localstorage
        localStorage.setItem(textId, JSON.stringify(taskText));
    });
});

// END OF SAVE BUTTON FUNCTION 

// START OF LOCALSTORAGE LOADUP

// Create a function that activates on page loadup, using .ready should load the saved data before users interact with the page
$(function() {

    // check to see if this works 
    // console.log("Ready to go!");

    // Create a loop that cycles through information saved to localstorage. Call it on textarea since we're passing data into it
    $("textarea").each(function () {
        // Thank you mdn web docs for providing insight
        // iterate over localstorage keys
        for (let i = 0; i < localStorage.length; i++) {
            // get the value set over each key, save it to taskData
            let taskData = localStorage.key(i);
            // grab the time slot, this will be compared with the the key saved in localStorage 
            savedTimeBlock = $(this).siblings("div").attr("id");

            console.log(savedTimeBlock);
            // And when compared if they match, load the value of the localstorage object into the associated timeblock.

            
        }
    })

    // grab the index of the array, this will be our key 
    // and grab the value of time within timeBlocks object

    // compare if array index is same to time and print the value of whats inside either the time object or the index of array
    // Likely done??
});

// END OF LOCALSTORAGE LOADUP