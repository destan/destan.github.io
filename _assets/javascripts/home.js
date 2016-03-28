$(function() {
  $('.timeline-desc, .for-tooltip, .timeline-date').each(function(i, e) {
    var $element = $(this);
    if($element.attr('data-original-title')){
      $element.tooltip();
    }
  });
});
