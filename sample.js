let mainContainer = $(".container-lg");
let currentTime = dayjs().format("H");
let Day = dayjs().format('dddd, MMMM DD');
// Add code to display the current date in the header of the page.
$('#currentDay').text(Day);

// Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// Event listener for container
mainContainer.on('click', 'button', function (event) {
  //set text and time values
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("data-time")
  // Save text in local storage
  localStorage.setItem(time, text);
}
)


// Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

//call function
timeFrame()
//function for looping over time blocks, using if/else statements to add and remove classes
function timeFrame() {
  $(".time-block").each(function () {
    let sectionTime = parseInt($(this).attr("data-time"));

    if (sectionTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (sectionTime === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  }
  )
}


//Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

//target description attribute under ID and use getItem to set value using data
$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-1 .description").val(localStorage.getItem("13"));
$("#hour-2 .description").val(localStorage.getItem("14"));
$("#hour-3 .description").val(localStorage.getItem("15"));
$("#hour-4 .description").val(localStorage.getItem("16"));
$("#hour-5 .description").val(localStorage.getItem("17"));