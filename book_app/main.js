$(document).ready(function(){

  //Mobile Nav
  $(".open-panel").click(function(){

    $("html").toggleClass("openNav");

  });


  $('.main-nav a').click(function(event){
    event.preventDefault();
    var $cur = $(this);
    $('html').removeClass("openNav");
    location.href= $cur.attr('href');
  }) ;

  $("#book-content").click(function(){
    $("html").removeClass("openNav");
  });


  $(".close-panel").click(function(){
    $("html").removeClass("openNav");
  });

  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('#slider').css({ width: slideWidth, height: slideHeight });

  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

  $('#slider ul li:last-child').prependTo('#slider ul');

  function moveLeft() {
    $('#slider ul').animate({
      left: + slideWidth
    }, 500, function () {
      $('#slider ul li:last-child').prependTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

  function moveRight() {
    $('#slider ul').animate({
      left: - slideWidth
    }, 500, function () {
      $('#slider ul li:first-child').appendTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

  $('a.control_prev').click(function () {
    moveLeft();
  });

  $('a.control_next').click(function () {
    moveRight();
  });

  // $('button.skins').click(function(){
  //   //get background color of container and change it, as well text color
  //   $('.book-cover').addClass('night');
  // });


});


$(window).resize(function(){
  $('html').removeClass("openNav");
});
