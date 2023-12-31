// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let notes = JSON.parse(localStorage.getItem('notes'))||{}
let today = dayjs();
$('.leads').text(today.format('MMM D, YYYY---hh:mm A'));


$(function () {

    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    $('.saveBtn').click(function(event){
        let container = $(event.target).parents()
        let id=$(container).attr('id')

        notes[id]=$(container).children('textarea').val()
        localStorage.setItem('notes', JSON.stringify(notes)) 
    })
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    
        let hour= today.hour()
        console.log($('.time-block'))
        $('.time-block').each(function(_,el){
            let id=$(el).attr('id')
            let note = notes[id]
            $(el).children('textarea').val(note)
        if($(el).attr('id').slice(5) > hour){
            $(el).addClass('future')
        }
        if($(el).attr('id').slice(5) == hour){
            $(el).addClass('present')
        }
        if($(el).attr('id').slice(5) < hour){
            $(el).addClass('past')
        }
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    
})
});
