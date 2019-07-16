// toggleAttr function by @mathiasbynens

jQuery.fn.toggleAttr = function(attr){
  return this.each(function(){
    var $this = $(this);
    $this.attr(attr) ? $this.removeAttr(attr) : $this.attr(attr, attr);
  });
};


$(document).ready(function(){

  // CR search
  // When selects change
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

  // Feet calculator
  // When input changes
  $('[data-feet-ft]').on('change keyup', function(){
    var ft = $('[data-feet-ft]').val();
    var m = (ft*0.3048).toFixed(1);
    var sq = (Math.floor(ft/5)/5)*5;
    $('[data-feet-m]').val(m);
    $('[data-feet-sq]').val(sq);
  });

  // Pound calculator
  // When input changes
  $('[data-pound-lb]').on('change keyup', function(){
    var lb = $('[data-pound-lb]').val();
    var kg = (lb*0.45).toFixed(1);
    $('[data-pound-kg]').val(kg);
  });

  // Hypotenuse calculator
  // When inputs change
  $('[data-hypotenuse-x], [data-hypotenuse-y]').on('change keyup', function(){
    var a = $('[data-hypotenuse-x]').val();
    var b = $('[data-hypotenuse-y]').val();
    // Calculate square root of a^2+b^2, and round to nearest multiple of 5
    var c = Math.round(Math.sqrt(a*a+b*b)/5)*5;
    if($(this).val()){
      $('[data-hypotenuse-result]').val(c);
    };
  });

  // Tooltips
  $('[title]').tooltipster({
    animation: 'grow',
    delay: 100,
    theme: 'tooltipster-shadow'
  });

});
