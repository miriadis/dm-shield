/* toggleAttr function by @mathiasbynens */
jQuery.fn.toggleAttr = function(attr){
  return this.each(function(){
    var $this = $(this);
    $this.attr(attr) ? $this.removeAttr(attr) : $this.attr(attr, attr);
  });
};

// CR Search
$(document).ready(function(){
  // When selects change */
  $('[data-cr-min], [data-cr-max]').on('change', function(){
    // If the split CR checkbox isn't checked
    if(!$('[data-cr-split]').prop('checked')){
      // Set max CR value to the same as the min CR, for consistency's sake
      $('[data-cr-max], [data-cr-min]').children("option[value='" + $(this).val() + "']").prop('selected', true);
      // Set hidden field value to the same as the min CR
      $('[data-cr-hidden]').val($(this).val());
    };
  });
  // Toggle stuff when split CR checkbox is checked, so you can select min and max
  $('[data-cr-split]').on('change', function(){
    $('[data-cr-max]').toggle();
    $('[data-cr-hidden]').toggleAttr('disabled');
  });

});
