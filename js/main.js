$(function(){

  // Fit the svgs
  $('.subhead-45').height($('.subhead').height());
  $('.subhead-45').width($('.subhead').height());

  $('.subhead-link').click(function(elem){
    $(this).siblings().animate(
      {'color': 'black'},
      200);
    $(this).animate(
      {'color': 'white'},
      200);
  });
});


function subheadLinks(){
}
