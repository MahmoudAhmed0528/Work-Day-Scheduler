$(function () {
  // Display the current date in the header
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);

  // Get the current hour
  var currentHour = dayjs().hour();

  // Loop through each time block to set the class
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    // console.log(timeBlockHour);

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Load saved events from local storage

  $(".time-block").each(function () {
    var hour = $(this).attr("id").split("-")[1];
    // console.log(hour);
    var savedEvent = localStorage.getItem("hour-" + hour);
    $(this).find(".description").val(savedEvent);
    // console.log(savedEvent);
  });

  // Save events to local storage
  $(".saveBtn").on("click", function () {
    var hour = $(this).closest(".time-block").attr("id").split("-")[1];
    var eventText = $(this).siblings(".description").val();
    localStorage.setItem("hour-" + hour, eventText);
  });
});
