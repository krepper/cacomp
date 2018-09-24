// Preloader //
function verifica_data(data_i, data_f){
  var x = data_f.getTime() - data_i.getTime();
  return 100-(Math.round((x/86400)/1000));
}

function eventos_hoje(dia){
  var borda = "5px solid #86FE00";
  $("#d"+dia).css({'border-bottom': borda, 'border-top': borda, 'border-radius': '0'});
  $("#d"+dia+"x").css({'border-bottom': borda, 'border-top': borda, 'border-radius': '0'});

}

jQuery(document).ready(function($) {
  //BARRA
  // (2018, 10-1[Outubro], 29) até (2018, 11-1[Novembro], 1)
  var porcentagem = verifica_data(new Date(), new Date(2018, 10-1, 29)); // 0
  //var porcentagem = verifica_data(new Date(2018, 11-1, 1), new Date(2018, 10-1, 29)); // 1
  //var porcentagem = verifica_data(new Date(2018, 11-1, 2), new Date(2018, 10-1, 29)); // 2

  $('#barra')[0].style.width = porcentagem+"%";

  if(porcentagem >= 100 && porcentagem <= 103){ // IF -> 100% -> BG VERDE
    $('#barra').addClass('bg-success');
    var x = new Date();
    eventos_hoje(x.getDate());
    //$('#inscreverse').addClass('invisible');
    var msg = "<a href='#programacaoo' class='btn btn-outline-light btn-block btn-lg btn-topo' style='max-width: 50%; margin-bottom: 1%'>PROGRAMAÇÃO</a>";
    $('#inscreverse').html(msg);

  } else if(porcentagem > 103){
    // NOVO BOTÃO
    var botaoCertificados = "<button type='button' class='btn btn-outline-light btn-block btn-lg btn-topo' style='max-width: 50%'>CERTIFICADOS</button>";
    $('#barra').addClass('bg-danger');
    $('#inscreverse').html(botaoCertificados);
  }

  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });

});


// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// wow

new WOW().init();

// carousel

$(document).ready(function() {

  var owl = $("#screenshots");

  owl.owlCarousel({
    autoPlay: false,
    pagination: false,
    stopOnHover: true,
  });

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })

});

// Testimonial

$(document).ready(function() {

  $("#review").owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,


      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});

// Set Header Background

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

// Team overlay

// $(document).ready(function(){
//   $(".img-overlay").hover(function(){
//     $(".overlay").toggleClass("overlay_hover");
//   });

// });
