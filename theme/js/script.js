/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  // Preloader js
  $(window).on('load', function () {
    $('.preloader').fadeOut(700);
  });

  // Sticky Menu
  $(window).scroll(function () {
    var height = $('.top-header').innerHeight();
    if ($('header').offset().top > 10) {
      $('.top-header').addClass('hide');
      $('.navigation').addClass('nav-bg');
      $('.navigation').css('margin-top', '-' + height + 'px');
    } else {
      $('.top-header').removeClass('hide');
      $('.navigation').removeClass('nav-bg');
      $('.navigation').css('margin-top', '-' + 0 + 'px');
    }
  });
  // navbarDropdown
  if ($(window).width() < 992) {
    $('.navigation .dropdown-toggle').on('click', function () {
      $(this).siblings('.dropdown-menu').animate(
        {
          height: 'toggle'
        },
        300
      );
    });
  }

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    arrows: true,
    fade: true,
    prevArrow:
      "<button type='button' class='prevArrow'><i class='ti-angle-left'></i></button>",
    nextArrow:
      "<button type='button' class='nextArrow'><i class='ti-angle-right'></i></button>",
    dots: true
  });
  $('.hero-slider').slickAnimation();

  // venobox popup
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  // filter
  $(document).ready(function () {
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
    //Active changer
    $('.filter-controls li').on('click', function () {
      $('.filter-controls li').removeClass('active');
      $(this).addClass('active');
    });
  });

  //  Count Up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate(
          {
            countNum: countTo
          },
          {
            duration: 1000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          }
        );
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // customs

  function appendArmadaData() {
    const contact =
      'https://api.whatsapp.com/send/?phone=6281331402031&text=Halo+Wijaya+Trans&type=phone_number&app_absent=0';

    const keterangan = [
      'Sudah termasuk Driver',
      'Sudah termasuk BBM',
      'Sudah termasuk Mobil'
    ];

    let data = [
      {
        image: 'images/car-catalog/hiace-commuter.jpg',
        carType: {
          brandName: 'Hiace Commuter',
          factoryName: ''
        },
        price: 'Rp.1.300.000,-',
        contact,
        keterangan: [...keterangan]
      },
      {
        image: 'images/car-catalog/hiace-premio.jpg',
        carType: {
          brandName: 'Hiace Premio',
          factoryName: ''
        },
        price: 'Rp.1.500.000,-',
        contact,
        keterangan: [...keterangan]
      },
      {
        image: 'images/car-catalog/hiace-luxury.jpg',
        carType: {
          brandName: 'Hiace Luxury',
          factoryName: ''
        },
        price: 'Rp.2.200.000,-',
        contact,
        keterangan: [...keterangan]
      },
      {
        image: 'images/car-catalog/avanza-xenia.jpg',
        carType: {
          brandName: 'Avanza Xenia',
          factoryName: ''
        },
        price: 'Rp.600.000,-',
        contact,
        keterangan: [...keterangan]
      },
      {
        image: 'images/car-catalog/fwd.jpg',
        carType: {
          brandName: 'FWD',
          factoryName: ''
        },
        price: 'Rp.700.000,-',
        contact,
        keterangan: [...keterangan]
      },
      {
        image: 'images/car-catalog/innova-reborn.jpg',
        carType: {
          brandName: 'Innova Reborn',
          factoryName: ''
        },
        price: 'Rp.850.000,-',
        contact,
        keterangan: [...keterangan]
      },
      {
        image: 'images/car-catalog/xpander.jpg',
        carType: {
          brandName: 'Xpander',
          factoryName: ''
        },
        price: 'Rp.700.000,-',
        contact,
        keterangan: [...keterangan]
      },
      {
        image: 'images/car-catalog/fortuner.jpg',
        carType: {
          brandName: 'Fortuner',
          factoryName: ''
        },
        price: 'Rp.1.500.000,-',
        contact,
        keterangan: [...keterangan]
      },
      {
        image: 'images/car-catalog/alphard.jpg',
        carType: {
          brandName: 'Alphard',
          factoryName: ''
        },
        price: 'Rp.2.500.000,-',
        contact,
        keterangan: [...keterangan]
      }
    ];

    for (let index = 0; index < data.length; index++) {
      $('#armada-kami').append(`
			<div class="col-lg-4 col-sm-6 mb-5">
			  <div class="card">
				<img
				  loading="lazy"
				  src="${data[index].image}"
				  alt="img"
				  class="card-img-top"
				  style="width: auto"
				/>
				<div class="card-body">
				  <h4 class="card-title">${data[index].carType.brandName}</h4>
				  <p class="card-text" style="margin-bottom: 20px">
				  ${data[index].keterangan
            .map(
              item => `
					  <a class="link">
						<div class="text-left" style="display: flex; padding-bottom: 10px">
						  <a style="margin-right:10px">✓</a>
						  <a style="word-break: keep-all">${item}</a>
						</div>
					  </a>
					`
            )
            .join('')}
				  </p>
				  <div style="border: 1px solid #f2f2f2">
				  </div>
				  <div class="col" style="margin-top: 10px">
					<p style="">Harga Mulai</p>
					<p style="font-size: 20px; font-weight: bold; margin-top: -20px;"
					  >${data[index].price}
					</p>
				  </div>
				  <a id="whatsapp-kami" class="btn btn-primary btn-sm">Hubungi Kami</a>
				</div>
			  </div>
			</div>
		  `);
    }
  }
  appendArmadaData();
})(jQuery);
