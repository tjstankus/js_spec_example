$(document).ready(function() {
    
  // show textarea for entering further info
  showFurtherInfo = function(el) {
    var $further_info_input = $(el).parent('.question').children('.further_info');
    $further_info_input.show();
    $further_info_input.attr({'display':'block'})
    $further_info_input.focus();
  };
  
  // hide textarea for entering further info
  hideFurtherInfo = function(el) {
    $(el).parent('.question').children('.further_info').hide();
  }
  
  // enable 'Continue' button if form complete, else disable it
  continueOnComplete = function() {
    var all_answered = $('.question:not(:has(:input:radio:checked))').length == 0;
    var further_info_complete = $('textarea:visible[value=]').length == 0;
    
    if (all_answered && further_info_complete) {
      $('input.continue').removeAttr('disabled');
    } else {
      $('input.continue').attr({'disabled':'disabled'});
    }
  };
  
  // bind click events to show/hide further info text areas
  $('.requires_further_info_on').click(function() { showFurtherInfo(this); });
  $('.requires_further_info_off').click(function() { hideFurtherInfo(this); });
  
  // bind click events to the #questions container
  $('#questions').click(function() { continueOnComplete(); });
  
  // bind keyup events to textareas for entering further info
  $('.further_info').keyup(function() { continueOnComplete(); });
  
  // check if form is complete onload
  continueOnComplete();

});
