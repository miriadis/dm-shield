$('document').on('ready', function() {

  $('#converter-ft').on('change, keyup', function(){
    $('#converter-cm').val($(this).val * 30.48);
  });

  $('#converter-cm').on('change, keyup', function(){
    $('#converter-ft').val($(this).val / 30.48);
  });

});
