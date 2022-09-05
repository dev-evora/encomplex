/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

// const viewportFix = (width) => {
//   const meta = $('meta[name="viewport"]');
//   meta.attr('content', 'user-scalable=no, width=' + (screen.width <= width ? width : 'device-width'));
// };

// viewportFix(375);

$('[data-fancybox]').fancybox({
  touch: false,
  autoFocus: false,
  backFocus: false,
  closeExisting: true,
});

const maskPhone = () => {
  const maskedElements = [];
  const el = document.querySelectorAll('.masked');
  if (el.length > 0) {
    const mask = {
      mask: '+7 (000) 000-00-00',
    };
    el.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target.value === '') item.value = '+7 ';
        maskedElements.push(new IMask(item, mask));
      });
    });
  }
};

maskPhone();

const videoplayer = document.querySelectorAll('.video');
if (!!videoplayer) {
  videoplayer.forEach((item) => {
    const videoID = item.href.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);

    item.querySelectorAll('img').forEach((el) => {
      el.setAttribute('src', `https://i.ytimg.com/vi/${videoID[2]}/sd1.jpg`);
    });
  });
}

const storageSafeCarousel = new Swiper('.storage-safe__carousel', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.storage-safe__pagination',
    clickable: true,
  },
});

const complexSlider = new Swiper('.complex-slider', {
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: {
    el: '.complex-count',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.complex-arrow__next',
    prevEl: '.complex-arrow__prev',
  },
});
