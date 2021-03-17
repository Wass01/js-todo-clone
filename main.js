// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista

$(document).ready(function() {
  var addList = $("#list li").clone();
  $("#todoList").append(addList);


});
