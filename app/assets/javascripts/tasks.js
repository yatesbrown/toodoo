// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function ready() {
  $('#new_task').on('ajax:success', function() {
    console.log('the ajax request was successful');
  });  //$('#new_task').on('eventname', newTask);

  function newTask(event, response, status, xhr) {
    $('body').append(data);
  }
}

$(document).on("ready turbolinks:load", ready);
