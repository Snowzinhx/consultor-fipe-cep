//Método 1

// $(document).ready(function (){
//   $("#cep").blur(function() {
//     var valor = $(this).val();
//     $.get("https://viacep.com.br/ws/" + valor + "/json/", function(dados, status) {
//       $('#cidade').val(dados.localidade)
//       $('#uf').val(dados.uf)
//     });
//   });
// });

//método 2

// $(document).ready(function (){
//   $("#cep").blur(function() {
//     var valor = $(this).val();
//     $.get("https://viacep.com.br/ws/" + valor + "/json/", function(dados, status) {
//       $('#cidade').attr('value', dados.localidade)
//       $('#uf').attr('value', dados.uf)
//     });
//   });
// });

//Método Ajax

$(document).ready(function () {
  $("#search-button").on('click', function () {
    var cep = $('#cep').val();
    $.ajax({
      url: "https://viacep.com.br/ws/" + cep + "/json/",
      type: "GET",
      success: function (dados, status) {
        $("#cidade").val(dados.localidade);
        $("#uf").val(dados.uf);
        $("#ddd").val(`(${dados.ddd})` );
        $("#logradouro").val(dados.logradouro);
        $("#complemento").val(dados.complemento);
      },
      error: function () {
        alert("Sua requisição falhou!");
      },
    });
  });
  $("#search-fipe").on('click',function () {
    var placa = $("#placa").val();
    $.ajax({
      url: 'https://placa-fipe.apibrasil.com.br/placa/'+placa,
      type: "GET",
      success: function (dados, status) {
        $('#marca').val(dados.Marca)
        $('#modelo').val(dados.Modelo +' '+ dados.AnoModelo)
        $("#valor").val(dados.Valor);
        $('#municipio').val(dados.municipio)
        $("#UF").val(dados.uf);
        $('.mostrar-data').html(dados.DataConsulta)
      },
      error: function () {
        alert("Sua requisição falhou!");
      },
    });
  });
});

$( function() {
  $( "#tabs" ).tabs();
} );