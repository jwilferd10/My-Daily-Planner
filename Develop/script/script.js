// START OF TIMEBLOCK OBJECT //

// timeBlock is an object that contains each hour and associated with it is an empty string. timeID is going to be compared with currentHour and add CSS based on criteria 
let timeBlock = [
    {time: "12 AM", text: "", timeID: 0},
    {time: "1 AM", text: "", timeID: 1},
    {time: "2 AM", text: "", timeID: 2},
    {time: "3 AM", text: "", timeID: 3},
    {time: "4 AM", text: "", timeID: 4},
    {time: "5 AM", text: "", timeID: 5},
    {time: "6 AM", text: "", timeID: 6},
    {time: "7 AM", text: "", timeID: 7},
    {time: "8 AM", text: "", timeID: 8},
    {time: "9 AM", text: "", timeID: 9},
    {time: "10 AM", text: "", timeID: 10},
    {time: "11 AM", text: "", timeID: 11},
    {time: "12 PM", text: "", timeID: 12},
    {time: "1 PM", text: "", timeID: 13},
    {time: "2 PM", text: "", timeID: 14},
    {time: "3 PM", text: "", timeID: 15},
    {time: "4 PM", text: "", timeID: 16},
    {time: "5 PM", text: "", timeID: 17},
    {time: "6 PM", text: "", timeID: 18},
    {time: "7 PM", text: "", timeID: 19},
    {time: "8 PM", text: "", timeID: 20},
    {time: "9 PM", text: "", timeID: 21},
    {time: "10 PM", text: "", timeID: 22},
    {time: "11 PM", text: "", timeID: 23}
]

// END OF TIMEBLOCK OBJECT //

// START OF CURRENT DATE FOR HEADER DISPLAY //

// using moment.js format todays date
const m = moment();
var currentDate = m.format("dddd, MMMM Do YYYY");

// use the text content from currentDate and set it as currentDays text
$(currentDay).text(currentDate);

// set current time to global & use moment.js to grab the hours of the day  
var currentTime = moment().format("H");
   
// END OF CURRENT DATE FOR HEADER DISPLAY //

// START OF DELETE ALL //

// event listerner for delete all button
$(".deleteAllBtn").on("click", function(){
    // alert user tasks have been deleted
    
    // Set the string value for every textarea to be an empty string
    $("textarea").val('');

    // Clear the data from localstorage 
    localStorage.clear();
});

// END OF DELETE ALL //

// START OF GENERATING APPLICATION TIMEBLOCKS //

// for each timeBlock run a function that uses the objects index and element to generate html for each time block
$.each(timeBlock, function(index, item) {

    // generate a row for every hour NOTE: !!TIMELINE IS USED FOR THE COLOR CODED TIMEBLOCKS!!
    let timeBlockEl = $("<section>").addClass("container");

        // create a div that holds row
        let containerEl = $("<div>").addClass("row mb-1 mb-5-sm timeline")

            // start with a div that displays each hour of the day, grabbing that info from the timeBlock object
            const hourEl = $("<div>").addClass("col-2 border border-dark d-flex justify-content-center").attr("id", item.time);
    
            // seperate the time itself from parent div
            const hourText = $("<div>").text(item.time).addClass("mt-4 h5")

            // append hourText to hourEl
            hourEl.append(hourText)

            // and then create a textarea for each hour
            const taskEntryEl = $("<textarea>").addClass("border border-dark col-8 text-dark font-weight-bold");

            // finally create a save button at the end of the row
            const saveBtnEl = $("<button>").addClass("col-1 saveBtn blockBtn")

            // create a span element with an emoji as a class
            const btnIconEl = $("<span>").addClass("fas fa-save").attr("id", "btnIcon");

            // append the span element to saveBtnEl
            saveBtnEl.append(btnIconEl);

            // button to delete individual tasks
            const delEntryBtn = $("<button>").addClass("col-1 deleteBtn deleteStyle blockBtn");

            // icon of the delete button
            const delBtnIcon = $("<span>").addClass("fas fa-trash").attr("id", "delBtnIcon");

            // append delete button
            delEntryBtn.append(delBtnIcon);
            
        // append everything to this row
        containerEl.append(hourEl, taskEntryEl, saveBtnEl, delEntryBtn)

    // append the containerEl to timeBlockEl
    timeBlockEl.append(containerEl);

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
$('.saveBtn').each(function() {

    // add an onclick event that obtains 
    $(this).on("click", function() {

        // test if onclick works
        // window.alert("I've been clicked!");

        // Alert user task has been saved
        window.alert("Your entry has been saved!");

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

// START OF DELETE BUTTON
$(".deleteBtn").each(function() {
    $(this).on("click", function() {
        // Showcase modal
        $('#deleteEntryModal').modal('show');

        // confirm button clicked
        $(".deleteConfirmBtn").on("click", function() {
            // grabbing the id of the timeblock
            let textId = $(".deleteBtn").siblings("div").attr("id");

            // Set the string value for every textarea to be an empty string
            let deleteText = $(".deleteBtn").siblings("textarea").val('');

            // remove the data from localstorage 
            localStorage.removeItem(textId, JSON.stringify(deleteText));
        });
    })
});
// END OF DELETE BUTTON 

// START OF LOCALSTORAGE LOADUP

// Create a function that activates on page loadup, using .ready should load the saved data before users interact with the page
$(function() {

    // check to see if this works 
    // console.log("Ready to go!");

    // Create a loop that cycles through information saved to localstorage. Call it on textarea since we're passing data into it
    $("textarea").each(function () {
        // reference the textarea, localStorage value will be passed into this. This is the targeted area where 
        let savedTaskEntry = $(this);

        // Thank you mdn web docs for providing insight
        // iterate over localstorage keys
        for (let i = 0; i < localStorage.length; i++) {

            // get the value set over each key, save it to taskData
            let taskData = localStorage.key(i);

            // savedTextId grabs the id of hourEl. It will be compared with the the key saved in localstorage. 
            savedTextId = $(this).siblings("div").attr("id");

            // and if the ID's match, the value of the localstorage object will load into savedTaskEntry.
            if (taskData == savedTextId) {
                // savedTaskEntry's value is the JSON object
                savedTaskEntry.val(JSON.parse(localStorage.getItem(taskData)));
            }  
        }
    })
});

// END OF LOCALSTORAGE LOADUP

// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })