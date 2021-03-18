// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista

$(document).ready(function() {

  // si può migliorare la scrittura del codice richiamando gli elementi uguali in una funzione
  $("#btnAdd").click(function () {
    // aggiungo gli elementi alla lista con input e button
    var lista = $("#list li").clone();
    var inputList = $("#inputList").val();

    if (inputList) {
      $("#inputList").val(" ");
      lista.children("li span").text(inputList);
    }

    lista.prepend(inputList);
    $("#todoList").append(lista);

    // rimuovo gli elementi della lista
    $(lista).click(function () {
      $(this).remove();
    });

  });
  // aggiungo elementi anche al tasto invio
  $("#inputList").keyup(function(e){
    var lista = $("#list li").clone();
    var inputList = $("#inputList").val();


    if (e.which == 13) {
      lista.prepend(inputList);
      $("#todoList").append(lista);

      if (inputList) {
        $("#inputList").val(" ");
        lista.children("li span").text(inputList);
      }
    }


    // rimuovo gli elementi della lista
    $(lista).click(function () {
      $(this).remove();
    });
  });
});
