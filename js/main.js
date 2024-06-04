// добавление бургеру класс актив
const headerBtn = document.querySelector('.header__search-catalog');
const sideMenu = document.getElementById('sideMenu')
const headerMenu = document.querySelector('.header__menu');

headerBtn.addEventListener('click', function () {
    this.classList.toggle('active')
    sideMenu.classList.toggle('active')

    if(this.classList.contains('active'))document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    
})

headerMenu.addEventListener('click', (e)=> {

  if(e.target.classList.contains('header__menu')) {
    headerBtn.classList.remove('active')
    sideMenu.classList.remove('active')
  } 

})

// Swiper
const swiperCatalogs = new Swiper('.header__catalogs-swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

  slidesPerView: 5,
  spaceBetween: 10,

  breakpoints: {
      320: {
      slidesPerView: 2,
      spaceBetween: 20
      },
      480: {
      slidesPerView: 3,
      spaceBetween: 30
      },
      640: {
      slidesPerView: 4,
      spaceBetween: 40
      },
      992: {
      slidesPerView: 5,
      spaceBetween: 40
      },
      1200: {
      slidesPerView: 6,
      spaceBetween: 40
      },
      1400: {
      slidesPerView: 7,
      spaceBetween: 40
      },
      1500: {
      slidesPerView: 9,
      spaceBetween: 40
      }
  }
});
const swiper = new Swiper('.header__swiper', {
    direction: 'horizontal',
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
});
  const swiperBackpacks = new Swiper('.backpacks__swiper', {
    direction: 'horizontal',

    navigation: {
      nextEl: '.backpacks__swiper-next',
      prevEl: '.backpacks__swiper-prev',
  },

    slidesPerView: 5,
    spaceBetween: 10,

    breakpoints: {
        320: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        480: {
        slidesPerView: 3,
        spaceBetween: 30
        },
        640: {
        slidesPerView: 4,
        spaceBetween: 40
        },
        992: {
        slidesPerView: 5,
        spaceBetween: 40
        }
    }
});
  const swiperShoes = new Swiper('.shoes__swiper', {
    direction: 'horizontal',

    navigation: {
      nextEl: '.shoes__swiper-next',
      prevEl: '.shoes__swiper-prev',
  },

    slidesPerView: 3,
    spaceBetween: 10,

    breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        480: {
        slidesPerView: 1,
        spaceBetween: 25
        },
        640: {
        slidesPerView: 2,
        spaceBetween: 30
        },
        992: {
        slidesPerView: 3,
        spaceBetween: 30
        }
    }
});
  const swiperNewItems = new Swiper('.newItems__swiper', {
    direction: 'horizontal',

    navigation: {
      nextEl: '.newItems__swiper-next',
      prevEl: '.newItems__swiper-prev',
  },

    slidesPerView: 4,
    spaceBetween: 10,

    breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        480: {
        slidesPerView: 2,
        spaceBetween: 25
        },
        640: {
        slidesPerView: 3,
        spaceBetween: 30
        },
        992: {
        slidesPerView: 4,
        spaceBetween: 30
        }
    }
});
  const swiperToys = new Swiper('.toys__swiper', {
    direction: 'horizontal',

  navigation: {
    nextEl: '.toys__swiper-next',
    prevEl: '.toys__swiper-prev',
},

    slidesPerView: 3,
    spaceBetween: 10,

    breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        480: {
        slidesPerView: 1,
        spaceBetween: 25
        },
        640: {
        slidesPerView: 2,
        spaceBetween: 30
        },
        992: {
        slidesPerView: 3,
        spaceBetween: 30
        }
    }
});

// анимация корзины
const backpacksCarts = [...document.querySelectorAll('.backpacks__slide-cart')];

backpacksCarts.forEach(item => {

  item.addEventListener('click', ()=> {

    item.classList.toggle('active');
    const parent = item.closest('.backpacks__slide-cart');
    const checkbox = parent.querySelector('.custom__checkbox-input');
    checkbox.classList.toggle('active');
    if(checkbox.classList.contains('active')){
      checkbox.checked = true
    }
    else{
      checkbox.checked = false
    }
    console.dir(checkbox);
  })




});



// отображение красных скидок

// const backpacks = [
//   {id: 1, name: 'Школьный рюкзак School', discount: false},
//   {id: 2, name: 'Школьный рюкзак School', discount: true},
//   {id: 3, name: 'Suro / Рюкзак игрушка', discount: true},
//   {id: 4, name: 'Suro / Рюкзак детский для девочки', discount: true},
//   {id: 5, name: 'like.me / Рюкзак Teens для девочки', discount: true},
//   {id: 6, name: 'INOL collection / Рюкзак', discount: true},
//   {id: 7, name: 'like.me / Школьный рюкзак School', discount: true},
//   {id: 8, name: 'Suro / Рюкзак детский Человек Паук', discount: true},
// ];



