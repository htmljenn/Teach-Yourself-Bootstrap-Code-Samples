$(function(){
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('#myTab a').click(function (e) {
    $(this).tab('show');
  });
});
