$(function(){
    const header = document.getElementById('header');
    const headroom = new Headroom(header);
    headroom.init();
 
    // Menu Responsive
    //calculo de width de la pag
    const ancho = $(window).width(),
          enlaces = $('#enlaces'),
          btnMenu = $('#btnMenu'),
          icono = $('#btnMenu .icono');

          if (ancho < 700){
              enlaces.hide();
              icono.addClass('fa-bars');
          }

          btnMenu.on('click', function(e){
            enlaces.slideToggle();
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');
          });

          $(window).on('resize', function(){
              if($(this).width() > 700){
                  enlaces.show();
                  icono.addClass('fa-times');
                  icono.removeClass('fa-bars');
              } else {
                  enlaces.hide();
                  icono.toggleClass('fa-bars');
                  icono.toggleClass('fa-times');                  
              }
          });
});