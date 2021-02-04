$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function () {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });

  // $('.questions__item-title').on('click', function () {
  //   $('.questions__item').not($(this)).removeClass('active');
  //   $('.questions__item-text').not($(this).next()).slideUp(300);
  //   $(this).parent().toggleClass('active');
  //   $(this).next().slideToggle(300);
  // });

  $('.questions__item-title').on('click', function () {
    $('.questions__item').removeClass('active');
    $(this).parent().addClass('active');
    $('.questions__item-text').not($(this).next()).slideUp(300);
    $(this).next().slideDown(300);
  });

  // $('.questions__item-title').on('click', function () {
  //   $('.questions__item').removeClass('active');
  //   $(this).parent().addClass('active');
  // });

  $('.catalog__items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slider-btn slider-btn__prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slider-btn slider-btn__next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    infinite: false,
    dots: true,
    appendArrows: $('.catalog__inner'),
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          dots: false
        }
      },
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.slider-top').slick({
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.slider-nav',
    // autoplay: true,
    responsive: [
      {
        breakpoint: 781,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $('.slider-nav').slick({
    asNavFor: '.slider-top',
    prevArrow: '<button type="button" class="slider-btn slider-btn__prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slider-btn slider-btn__next"><img src="images/icons/arrow-right.svg" alt=""></button>'
  });

  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
    scrollOverflow: true,
    menu: '#header__nav',
    anchors: ['top', 'benefits', 'catalog', 'slider', 'questions', 'contacts']
  });

});