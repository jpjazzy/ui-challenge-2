//JAVASTUFFZ
'use strict';

//Icon class changes to change sprite position
$('.icons').on('click', function() {
  if ($(this).hasClass('inactive')){
    $(this).addClass('active');
    $(this).removeClass('inactive');
  } else {
    $(this).addClass('inactive');
    $(this).removeClass('active');
  }
});

//Selectbox functionality
$('#select-box').on('focus', function(){
  $('ol').removeClass('inactive');
  $('ol').addClass('active');
  $('#select-box-arrow').removeClass('inactive');
  $('#select-box-arrow').addClass('active');
});
$('#select-box').on('blur', function(){
  $('ol').addClass('inactive');
  $('ol').removeClass('active');
  $('#select-box-arrow').addClass('inactive');
  $('#select-box-arrow').removeClass('active');
});
