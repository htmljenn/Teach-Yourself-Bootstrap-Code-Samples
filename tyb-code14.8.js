// return $.fn.button to previously assigned value
var bootstrapButton = $.fn.button.noConflict();
// give $().bootstrapBtn the Bootstrap functionality
$.fn.bootstrapBtn = bootstrapButton;