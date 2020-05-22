$(function(){

$('.header__menu-btn').on('click', function(){
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
});
$('.header__menu a').on('click', function(){
    $('.header__menu').toggleClass('active');
    $('.header__menu-btn').remove('active');
});

$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        bl_top = $(target).offset().top -80;
    $('body, html').animate({scrollTop: bl_top}, 700);
    return false;
  });

  
var fbtn = $('.services__item-box a'),
    hbtn = $('a.logo'),
    gbtn = $('.header__menu a[href="#"]')
    fbtn.on('click',function(){
        $(location).attr('href','website.html');
    });
    hbtn.on('click',function(){
        $(location).attr('href','index.html');
    });
    gbtn.on('click',function(){
        $(location).attr('href','index.html');
    });

    window.onscroll = function showHeader(){
        var header = this.document.querySelector('.header');
        if(window.pageYOffset > 1){
          header.classList.add('header__fixed');
        } 
    if(window.pageYOffset < 35){
          header.classList.remove('header__fixed');
        }
      }

});