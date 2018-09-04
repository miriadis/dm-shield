jQuery.fn.toggleAttr = function(attr){
  return this.each(function(){
    var $this = $(this);
    $this.attr(attr) ? $this.removeAttr(attr) : $this.attr(attr, attr);
  });
};

$(document).ready(function(){
  $('[data-cr-min], [data-cr-max]').on('change', function(){
    if(!$('[data-cr-split]').prop('checked')){
      $('[data-cr-max], [data-cr-min]').children("option[value='" + $(this).val() + "']").prop('selected', true);
      $('[data-cr-hidden]').val($(this).val());
    };
  });
  $('[data-cr-split]').on('change', function(){
    $('[data-cr-max]').toggle();
    $('[data-cr-hidden]').toggleAttr('disabled');
  });
});
