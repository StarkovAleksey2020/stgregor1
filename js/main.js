$(document).ready(function () {
  var menuButton = $(".menu-button");
  var menuButtonClose = $(".menu-close");
  var goTopButton = $("#button");
  var navbarMenuItem = $(".navbar-menu__link");

  navbarMenuItem.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    menuButton.toggleClass("hiden");
    menuButtonClose.toggleClass("hiden");
    goTopButton.toggleClass("hiden");
  })
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    menuButton.toggleClass("hiden");
    menuButtonClose.toggleClass("hiden");
    goTopButton.toggleClass("hiden");
  })
  menuButtonClose.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    menuButton.toggleClass("hiden");
    menuButtonClose.toggleClass("hiden");
    goTopButton.toggleClass("hiden");
  })


  var btn = $('#button');

  $(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

  var certificatesSlider = new Swiper('.certificates-slider', {
    // Optional parameters
    loop: true,
  
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: '.certificates-buttons__left',
      nextEl: '.certificates-buttons__right',
    },
  });
  var certificatesSlider = new Swiper('.portfolio-slider', {
    // Optional parameters
    loop: true,
  
    navigation: {
      prevEl: '.portfolio-buttons__left',
      nextEl: '.portfolio-buttons__right',
    },
  });


    $(window).scroll(function(){
      $('.skills').bgscroll({
        direction: 'bottom', // направление bottom или top
        bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
        debug: false, // Режим отладки
        min:0, // минимальное положение (в %) на которое может смещаться фон
        max:100 // максимальное положение (в %) на которое может смещаться фон
      });
    })
    $(window).scroll(function(){
      $('.works').bgscroll({
        direction: 'bottom', // направление bottom или top
        bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
        debug: false, // Режим отладки
        min:0, // минимальное положение (в %) на которое может смещаться фон
        max:100 // максимальное положение (в %) на которое может смещаться фон
      });
    })

     jQuery.validator.addMethod("emailfull", function(value, element) {
 return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
    }, "Please enter valid email address!");
  
  // Обработка форм
  $('.form').each(function () {
    $(this).validate({
      rules: {
        email: {
          required: true,
          email: true,
          emailfull: true
        },
        phone: {
          required: true,
          minlength:18
        }

      },
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста укажите ваше имя",
          minlength: "Минимальная длина поля 2 символа",
        },
        phone: {
          required: "Пожалуйста укажите ваш номер телефона",
          minlength: "Минимальная длина поля 10 символов",
        },
        email: {
          required: "Пожалуйста укажите ваш email",
          email: "Формат email - name@domain.com",
        },
      },
    });
  });
    $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      closeModal(e);
    }
  });

  function openModal() {
    //var modalOverlay = $(".modal__overlay");
    //var modalDialog = $(".modal__dialog");
    //modalOverlay.addClass("modal__overlay--visible");
    //modalDialog.addClass("modal__dialog--visible");
    $('input').val('');
    $('textarea').val('');
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
    //modalDialog.scrollTop(0);
  }
  function closeModal(event) {
    event.preventDefault();
    //var modalOverlay = $(".modal__overlay");
    //var modalDialog = $(".modal__dialog");
    //modalOverlay.removeClass("modal__overlay--visible");
    //modalDialog.removeClass("modal__dialog--visible");
    $('input').val('');
    $('textarea').val('');
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
}

// Маска номера телефона
  $(".phoneInput").mask("+7 (999) 999-99-99");

});