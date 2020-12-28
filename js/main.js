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

// Модальное окно с сертификатами - one
  var modalSertificateButtonOne = $('[data-toggle=modal-certificate-one]');
  var closeModalButtonOne = $(".menu-close-certificate--one");
  var modalOverlayOne = $(".modal-certificate__overlay--one");

  modalSertificateButtonOne.on('click', openModalSertificateOne);
  closeModalButtonOne.on('click', closeModalSertificateOne);
  modalOverlayOne.on('click', closeModalSertificateOne);

  function openModalSertificateOne() {
    var modalOverlay = $(".modal-certificate__overlay--one");
    var modalDialog = $(".modal-certificate__dialog--one");
    var closeModalButton = $(".menu-close-certificate--one");
    closeModalButton.addClass("menu-close-certificate--visible");
    modalOverlay.addClass("modal-certificate__overlay--visible");
    modalDialog.addClass("modal-certificate__dialog--visible");
    //modalDialog.scrollTop(0);
  }
  function closeModalSertificateOne(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-certificate__overlay--one");
    var modalDialog = $(".modal-certificate__dialog--one");
    var closeModalButton = $(".menu-close-certificate--one");
    closeModalButton.removeClass("menu-close-certificate--visible");
    modalOverlay.removeClass("modal-certificate__overlay--visible");
    modalDialog.removeClass("modal-certificate__dialog--visible");
  }
// Модальное окно с сертификатами - two
  var modalSertificateButtonTwo = $('[data-toggle=modal-certificate-two]');
  var closeModalButtonTwo = $(".menu-close-certificate--two");
  var modalOverlayTwo = $(".modal-certificate__overlay--two");

  modalSertificateButtonTwo.on('click', openModalSertificateTwo);
  closeModalButtonTwo.on('click', closeModalSertificateTwo);
  modalOverlayTwo.on('click', closeModalSertificateTwo);

  function openModalSertificateTwo() {
    var modalOverlay = $(".modal-certificate__overlay--two");
    var modalDialog = $(".modal-certificate__dialog--two");
    var closeModalButton = $(".menu-close-certificate--two");
    closeModalButton.addClass("menu-close-certificate--visible");
    modalOverlay.addClass("modal-certificate__overlay--visible");
    modalDialog.addClass("modal-certificate__dialog--visible");
    //modalDialog.scrollTop(0);
  }
  function closeModalSertificateTwo(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-certificate__overlay--two");
    var modalDialog = $(".modal-certificate__dialog--two");
    var closeModalButton = $(".menu-close-certificate--two");
    closeModalButton.removeClass("menu-close-certificate--visible");
    modalOverlay.removeClass("modal-certificate__overlay--visible");
    modalDialog.removeClass("modal-certificate__dialog--visible");
  }
// Модальное окно с сертификатами - three
  var modalSertificateButtonThree = $('[data-toggle=modal-certificate-three]');
  var closeModalButtonThree = $(".menu-close-certificate--three");
  var modalOverlayThree = $(".modal-certificate__overlay--three");

  modalSertificateButtonThree.on('click', openModalSertificateThree);
  closeModalButtonThree.on('click', closeModalSertificateThree);
  modalOverlayThree.on('click', closeModalSertificateThree);

  function openModalSertificateThree() {
    var modalOverlay = $(".modal-certificate__overlay--three");
    var modalDialog = $(".modal-certificate__dialog--three");
    var closeModalButton = $(".menu-close-certificate--three");
    closeModalButton.addClass("menu-close-certificate--visible");
    modalOverlay.addClass("modal-certificate__overlay--visible");
    modalDialog.addClass("modal-certificate__dialog--visible");
    //modalDialog.scrollTop(0);
  }
  function closeModalSertificateThree(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-certificate__overlay--three");
    var modalDialog = $(".modal-certificate__dialog--three");
    var closeModalButton = $(".menu-close-certificate--three");
    closeModalButton.removeClass("menu-close-certificate--visible");
    modalOverlay.removeClass("modal-certificate__overlay--visible");
    modalDialog.removeClass("modal-certificate__dialog--visible");
  }
// Модальное окно со скриншотом Моя Слата - one
  var modalPortfolioButtonOne = $('[data-toggle=portfolio-screen-one]');
  var closeModalButtonPortfolioOne = $(".menu-close-portfolio--one");
  var modalOverlayPortfolioOne = $(".modal-portfolio__overlay--one");

  modalPortfolioButtonOne.on('click', openModalPortfolioOne);
  closeModalButtonPortfolioOne.on('click', closeModalPortfolioOne);
  modalOverlayPortfolioOne.on('click', closeModalPortfolioOne);

  function openModalPortfolioOne() {
    var modalOverlay = $(".modal-portfolio__overlay--one");
    var modalDialog = $(".modal-portfolio__dialog--one");
    var closeModalButton = $(".menu-close-portfolio--one");
    closeModalButton.addClass("menu-close-portfolio--visible");
    modalOverlay.addClass("modal-portfolio__overlay--visible");
    modalDialog.addClass("modal-portfolio__dialog--visible");
  }
  function closeModalPortfolioOne(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-portfolio__overlay--one");
    var modalDialog = $(".modal-portfolio__dialog--one");
    var closeModalButton = $(".menu-close-portfolio--one");
    closeModalButton.removeClass("menu-close-portfolio--visible");
    modalOverlay.removeClass("modal-portfolio__overlay--visible");
    modalDialog.removeClass("modal-portfolio__dialog--visible");
  }
// Модальное окно со скриншотом Моя Слата - two
  var modalPortfolioButtonTwo = $('[data-toggle=portfolio-screen-two]');
  var closeModalButtonPortfolioTwo = $(".menu-close-portfolio--two");
  var modalOverlayPortfolioTwo = $(".modal-portfolio__overlay--two");

  modalPortfolioButtonTwo.on('click', openModalPortfolioTwo);
  closeModalButtonPortfolioTwo.on('click', closeModalPortfolioTwo);
  modalOverlayPortfolioTwo.on('click', closeModalPortfolioTwo);

  function openModalPortfolioTwo() {
    var modalOverlay = $(".modal-portfolio__overlay--two");
    var modalDialog = $(".modal-portfolio__dialog--two");
    var closeModalButton = $(".menu-close-portfolio--two");
    closeModalButton.addClass("menu-close-portfolio--visible");
    modalOverlay.addClass("modal-portfolio__overlay--visible");
    modalDialog.addClass("modal-portfolio__dialog--visible");
  }
  function closeModalPortfolioTwo(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-portfolio__overlay--two");
    var modalDialog = $(".modal-portfolio__dialog--two");
    var closeModalButton = $(".menu-close-portfolio--two");
    closeModalButton.removeClass("menu-close-portfolio--visible");
    modalOverlay.removeClass("modal-portfolio__overlay--visible");
    modalDialog.removeClass("modal-portfolio__dialog--visible");
  }
// Модальное окно со скриншотом Моя Слата - three
  var modalPortfolioButtonThree = $('[data-toggle=portfolio-screen-three]');
  var closeModalButtonPortfolioThree = $(".menu-close-portfolio--three");
  var modalOverlayPortfolioThree = $(".modal-portfolio__overlay--three");

  modalPortfolioButtonThree.on('click', openModalPortfolioThree);
  closeModalButtonPortfolioThree.on('click', closeModalPortfolioThree);
  modalOverlayPortfolioThree.on('click', closeModalPortfolioThree);

  function openModalPortfolioThree() {
    var modalOverlay = $(".modal-portfolio__overlay--three");
    var modalDialog = $(".modal-portfolio__dialog--three");
    var closeModalButton = $(".menu-close-portfolio--three");
    closeModalButton.addClass("menu-close-portfolio--visible");
    modalOverlay.addClass("modal-portfolio__overlay--visible");
    modalDialog.addClass("modal-portfolio__dialog--visible");
  }
  function closeModalPortfolioThree(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-portfolio__overlay--three");
    var modalDialog = $(".modal-portfolio__dialog--three");
    var closeModalButton = $(".menu-close-portfolio--three");
    closeModalButton.removeClass("menu-close-portfolio--visible");
    modalOverlay.removeClass("modal-portfolio__overlay--visible");
    modalDialog.removeClass("modal-portfolio__dialog--visible");
  }
// Модальное окно со скриншотом Моя Слата - four
  var modalPortfolioButtonFour = $('[data-toggle=portfolio-screen-four]');
  var closeModalButtonPortfolioFour = $(".menu-close-portfolio--four");
  var modalOverlayPortfolioFour = $(".modal-portfolio__overlay--four");

  modalPortfolioButtonFour.on('click', openModalPortfolioFour);
  closeModalButtonPortfolioFour.on('click', closeModalPortfolioFour);
  modalOverlayPortfolioFour.on('click', closeModalPortfolioFour);

  function openModalPortfolioFour() {
    var modalOverlay = $(".modal-portfolio__overlay--four");
    var modalDialog = $(".modal-portfolio__dialog--four");
    var closeModalButton = $(".menu-close-portfolio--four");
    closeModalButton.addClass("menu-close-portfolio--visible");
    modalOverlay.addClass("modal-portfolio__overlay--visible");
    modalDialog.addClass("modal-portfolio__dialog--visible");
  }
  function closeModalPortfolioFour(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-portfolio__overlay--four");
    var modalDialog = $(".modal-portfolio__dialog--four");
    var closeModalButton = $(".menu-close-portfolio--four");
    closeModalButton.removeClass("menu-close-portfolio--visible");
    modalOverlay.removeClass("modal-portfolio__overlay--visible");
    modalDialog.removeClass("modal-portfolio__dialog--visible");
  }
// Модальное окно со скриншотом Моя Слата - five
  var modalPortfolioButtonFive = $('[data-toggle=portfolio-screen-five]');
  var closeModalButtonPortfolioFive = $(".menu-close-portfolio--five");
  var modalOverlayPortfolioFive = $(".modal-portfolio__overlay--five");

  modalPortfolioButtonFive.on('click', openModalPortfolioFive);
  closeModalButtonPortfolioFive.on('click', closeModalPortfolioFive);
  modalOverlayPortfolioFive.on('click', closeModalPortfolioFive);

  function openModalPortfolioFive() {
    var modalOverlay = $(".modal-portfolio__overlay--five");
    var modalDialog = $(".modal-portfolio__dialog--five");
    var closeModalButton = $(".menu-close-portfolio--five");
    closeModalButton.addClass("menu-close-portfolio--visible");
    modalOverlay.addClass("modal-portfolio__overlay--visible");
    modalDialog.addClass("modal-portfolio__dialog--visible");
  }
  function closeModalPortfolioFive(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-portfolio__overlay--five");
    var modalDialog = $(".modal-portfolio__dialog--five");
    var closeModalButton = $(".menu-close-portfolio--five");
    closeModalButton.removeClass("menu-close-portfolio--visible");
    modalOverlay.removeClass("modal-portfolio__overlay--visible");
    modalDialog.removeClass("modal-portfolio__dialog--visible");
  }
// Модальное окно со скриншотом Моя Слата - six
  var modalPortfolioButtonSix = $('[data-toggle=portfolio-screen-six]');
  var closeModalButtonPortfolioSix = $(".menu-close-portfolio--six");
  var modalOverlayPortfolioSix = $(".modal-portfolio__overlay--six");

  modalPortfolioButtonSix.on('click', openModalPortfolioSix);
  closeModalButtonPortfolioSix.on('click', closeModalPortfolioSix);
  modalOverlayPortfolioSix.on('click', closeModalPortfolioSix);

  function openModalPortfolioSix() {
    var modalOverlay = $(".modal-portfolio__overlay--six");
    var modalDialog = $(".modal-portfolio__dialog--six");
    var closeModalButton = $(".menu-close-portfolio--six");
    closeModalButton.addClass("menu-close-portfolio--visible");
    modalOverlay.addClass("modal-portfolio__overlay--visible");
    modalDialog.addClass("modal-portfolio__dialog--visible");
  }
  function closeModalPortfolioSix(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-portfolio__overlay--six");
    var modalDialog = $(".modal-portfolio__dialog--six");
    var closeModalButton = $(".menu-close-portfolio--six");
    closeModalButton.removeClass("menu-close-portfolio--visible");
    modalOverlay.removeClass("modal-portfolio__overlay--visible");
    modalDialog.removeClass("modal-portfolio__dialog--visible");
  }



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
      closeModalSertificateOne(e);
      closeModalSertificateTwo(e);
      closeModalSertificateThree(e);
      closeModalPortfolioOne(e);
      closeModalPortfolioTwo(e);
      closeModalPortfolioThree(e);
      closeModalPortfolioFour(e);
      closeModalPortfolioFive(e);
      closeModalPortfolioSix(e);
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