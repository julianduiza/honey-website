$(window).scroll(function() {
  var isFixed = window.scrollY < $('.pimg1').position().top + $('.pimg1').height()
    - 152 // position of the ptext when it's fixed
    - $('.ptext').height() // height of ptext element
    - 90 // margin to the bottom of the image
    ;
  $('.ptext').toggleClass('ptext-move', !isFixed)
})
