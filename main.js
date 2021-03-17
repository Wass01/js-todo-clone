// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista

$(document).ready(function() {
  $("#btnAdd").click(function () {

    // aggiungo gli elementi alla lista con input e button
    var lista = $("#list li").clone();
    var inputList = $("#inputList").val();

    lista.prepend(inputList);
    $("#todoList").append(lista);

    // rimuovo gli elementi della lista
    $(lista).click(function () {
      $(this).remove();
    });

    // aggiungo elementi anche al tasto invio
    lista.keyup(function(e){
      var lista = $("#list li").clone();
      var inputList = $("#inputList").val();
      if (e.which == 13) {
        lista.prepend(inputList);
        $("#todoList").append(lista);
      }
    });
  });
});
