// VALIDATION
var selector = document.querySelectorAll("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");


selector.forEach(element => {
  im.mask(element);
});


// SLICK_SLIDER
$(document).ready(function () {
  $('.works__slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt=""></button>',
    responsive: [{
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
  });
});

$('.reviews__slider').slick({
  dots: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt=""></button>',
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
  }, ]
});

// BURGER

$('.header__burger-btn').on('click', function () {
  $('.header__right-bottom').slideToggle();
});