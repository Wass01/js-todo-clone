// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista

$(document).ready(function() {
  $("#btnAdd").click(function () {
    var lista = $("#list li").clone();
    var inputList = $("#inputList").val();

    lista.prepend(inputList);
    $("#todoList").append(lista);


  });
});
