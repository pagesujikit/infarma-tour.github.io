/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  // malang
  const SLUG_CITY_TOUR_BATU = 'city_tour_batu';
  const SLUG_CITY_TOUR_MALANG_BATU = 'city_tour_malang_batu';
  const SLUG_GUNUNG_BROMO = 'gunung_bromo';
  const SLUG_PANTAI_3_WARNA = 'pantai_3_warna';
  const SLUG_PANTAI_MALANG_SELATAN = 'pantai_malang_selatan';
  const SLUG_TUMPAK_SEWU = 'tumpak_sewu';

  // yogyakarta
  const SLUG_PAKET_1 = 'yogyakarta_paket_1';
  const SLUG_PAKET_2 = 'yogyakarta_paket_2';
  const SLUG_PAKET_3 = 'yogyakarta_paket_3';
  const SLUG_PAKET_4 = 'yogyakarta_paket_4';
  const SLUG_PAKET_5 = 'yogyakarta_paket_5';
  const SLUG_PAKET_6 = 'yogyakarta_paket_6';
  const SLUG_PAKET_7 = 'yogyakarta_paket_7';

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

  function capitalizeFirstLetter(string) {
    return string
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Uppercase first letter of each word
      .join(' '); // Join the words back into a string
  }

  function appendArmadaData() {
    const contact =
      'https://api.whatsapp.com/send/?phone=6285600341160&text=Halo+Infarma+Tour&type=phone_number&app_absent=0';

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
      },
      {
        image: 'images/car-catalog/bus.jpg',
        carType: {
          brandName: 'Bus',
          factoryName: ''
        },
        price: 'Rp.2.000.000,-',
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

  function appendtripPackageData() {
    const contact =
      'https://api.whatsapp.com/send/?phone=6285600341160&text=Halo+Infarma+Tour&type=phone_number&app_absent=0';

    const benefits = [
      'Mobil + Parkir',
      'BBM',
      'Tiket Wisata',
      'Welcome Drink',
      'Driver'
    ];

    const benefitsOfYogyakarta = [
      'Private Transport Pariwisata',
      'Tiket Masuk Wisata (WNI)',
      'Driver Professional',
      'BBM',
      'Free Parkir',
      'Welcome Drink'
    ];

    let data = [
      {
        image: `images/trip/malang.jpg`,
        carType: {
          brandName: 'Malang',
          factoryName: ''
        },
        price: 'Rp.950.000,-',
        contact,
        description: {
          long: 'Kami akan menemani perjalanan anda untuk menjelajahi keindahan kota Malang, yang dikenal dengan udara sejuk, pemandangan alam yang memukau, dan kekayaan budaya. Paket wisata ini dirancang untuk menghadirkan pengalaman terbaik di Malang, menggabungkan keindahan alam, situs sejarah, dan pengalaman lokal. Saat ini tersedia beberapa destinasi yang kami tawarkan seperti'
        },
        destination: [
          // {
          //   name: SLUG_CITY_TOUR_BATU,
          //   price: 'Rp 320.000,-',
          //   benefits: [...benefits],
          //   city: 'Malang'
          // },
          {
            name: SLUG_CITY_TOUR_MALANG_BATU,
            price: 'Rp 199.000,-',
            benefits: [...benefits],
            city: 'Malang'
          },
          {
            name: SLUG_GUNUNG_BROMO,
            price: 'Rp 350.000,-',
            benefits: ['Jeep', ...benefits],
            city: 'Malang'
          },
          {
            name: SLUG_PANTAI_3_WARNA,
            price: 'Rp 225.000,-',
            benefits: ['Guide', 'Alat Snorkling', ...benefits],
            city: 'Malang'
          },
          {
            name: SLUG_PANTAI_MALANG_SELATAN,
            price: 'Rp 225.000,-',
            benefits: ['Kursi dan Meja Portable', ...benefits],
            city: 'Malang'
          },
          {
            name: SLUG_TUMPAK_SEWU,
            price: 'Rp 299.000,-',
            benefits: ['Guide', 'Dokumentasi by IPhone', ...benefits],
            city: 'Malang'
          }
        ],
        keterangan: [
          // SLUG_CITY_TOUR_BATU,
          SLUG_CITY_TOUR_MALANG_BATU,
          SLUG_GUNUNG_BROMO,
          SLUG_PANTAI_3_WARNA,
          SLUG_PANTAI_MALANG_SELATAN,
          SLUG_TUMPAK_SEWU
        ]
      },
      {
        image: `images/trip/yogyakarta.jpg`,
        carType: {
          brandName: 'Yogyakarta',
          factoryName: ''
        },
        price: 'Rp.399.000,-',
        contact,
        description: {
          long: 'Jelajahi pesona kota Yogyakarta dengan paket wisata yang dirancang untuk memberikan pengalaman tak terlupakan. Anda akan diajak menikmati keindahan alam dan kekayaan budaya. Paket ini memastikan setiap momen perjalanan anda menjadi kenangan yang tak terlupakan. Saat ini tersedia beberapa destinasi yang kami tawarkan seperti'
        },
        destination: [
          {
            name: SLUG_PAKET_1,
            price: 'Rp 399.000,-',
            benefits: ['Private Jeep', ...benefitsOfYogyakarta],
            city: 'Yogyakarta'
          },
          {
            name: SLUG_PAKET_2,
            price: 'Rp 229.000,-',
            benefits: [...benefitsOfYogyakarta],
            city: 'Yogyakarta'
          },
          {
            name: SLUG_PAKET_3,
            price: 'Rp 299.000,-',
            benefits: [...benefitsOfYogyakarta],
            city: 'Yogyakarta'
          },
          {
            name: SLUG_PAKET_4,
            price: 'Rp 399.000,-',
            benefits: ['Jeep', ...benefitsOfYogyakarta],
            city: 'Yogyakarta'
          },
          {
            name: SLUG_PAKET_5,
            price: 'Rp 259.000,-',
            benefits: [...benefitsOfYogyakarta],
            city: 'Yogyakarta'
          },
          {
            name: SLUG_PAKET_6,
            price: 'Rp 389.000,-',
            benefits: ['Private VW Safari', ...benefitsOfYogyakarta],
            city: 'Yogyakarta'
          },
          {
            name: SLUG_PAKET_7,
            price: 'Rp 239.000,-',
            benefits: ['Jeep', ...benefitsOfYogyakarta],
            city: 'Yogyakarta'
          }
        ],
        keterangan: [SLUG_PAKET_1, SLUG_PAKET_2, SLUG_PAKET_3, SLUG_PAKET_4]
      }
    ];

    const tripShownByHomeScreen = [
      ...data[0].destination,
      ...data[1].destination
    ];

    for (let index = 0; index < tripShownByHomeScreen.length; index++) {
      const item = tripShownByHomeScreen[index];

      $('#trip-package').append(`
    <div class="col-lg-4 col-sm-6 mb-5">
      <div class="card">
      <img
        loading="lazy"
        src="images/trip/${item.city.toLowerCase()}/${item.name}/1.jpeg"
        alt="img"
        class="card-img-top"
        style="width: auto"
      />
      <div class="card-body">
        <h4 class="card-title">${capitalizeFirstLetter(
          item.name.replace(/\_/gi, ' ')
        )}</h4>
        <p class="card-text" style="margin-bottom: 20px">
        ${item.benefits
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
          >${item.price}
        </p>
        </div>
        <a id="lihat-paket-trip" class="btn btn-primary btn-sm" target="_blank" href="https://api.whatsapp.com/send/?phone=6285600341160&text=Halo+Infarma+Tour&type=phone_number&app_absent=0">Hubungi kami</a>
      </div>
      </div>
    </div>
    `);
    }
  }
  appendtripPackageData();

  function appenddocumentaryPackageData() {
    const contact =
      'https://api.whatsapp.com/send/?phone=6285600341160&text=Halo+Infarma+Tour&type=phone_number&app_absent=0';

    const keterangan = ['1 Hari'];

    let data = [
      {
        image: 'images/documentary/drone-dji.jpg',
        carType: {
          brandName: 'Drone DJI Mini 4 Pro',
          factoryName: ''
        },
        price: 'Rp.950.000,-',
        contact,
        keterangan: [...keterangan, 'Foto', 'Video']
      },
      {
        image: 'images/documentary/mirrorless-camera.jpg',
        carType: {
          brandName: 'Mirrorless Camera',
          factoryName: ''
        },
        price: 'Rp.399.000,-',
        contact,
        keterangan: [...keterangan]
      }
    ];

    for (let index = 0; index < data.length; index++) {
      $('#documentary-package').append(`
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
  appenddocumentaryPackageData();

  $(document).on('click', '#whatsapp-kami', function () {
    window.open(
      'https://api.whatsapp.com/send/?phone=6285600341160&text=Halo+Infarma+Tour&type=phone_number&app_absent=0'
    );
  });
})(jQuery);
