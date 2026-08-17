(function () {
  'use strict';

  document.querySelectorAll('[data-carousel]').forEach(function (showcase) {
    var slides = Array.from(showcase.querySelectorAll('[data-showcase-slide]'));
    var controls = showcase.querySelector('[data-showcase-controls]');
    if (slides.length < 2 || !controls) {
      return;
    }

    var position = showcase.querySelector('[data-showcase-position]');
    var counter = showcase.querySelector('[data-showcase-counter]');
    var label = showcase.querySelector('[data-showcase-label]');
    var caption = showcase.querySelector('[data-showcase-caption]');
    var item = showcase.dataset.carouselItem || 'Item';
    var index = 0;
    var requestedIndex = 0;
    var requestNumber = 0;
    var preparations = new WeakMap();

    /* A hidden slide can still contain a lazily loaded image. Keep the
       current slide visible until the requested image has loaded and decoded,
       so a cold cache never produces an empty stage between configurations. */
    function prepare(slide, urgent) {
      var image = slide.querySelector('img');
      if (!image) {
        return Promise.resolve(true);
      }

      if (urgent) {
        image.fetchPriority = 'high';
      }
      image.loading = 'eager';

      if (preparations.has(image)) {
        return preparations.get(image);
      }

      var preparation = new Promise(function (resolve) {
        function decoded() {
          if (typeof image.decode !== 'function') {
            resolve(image.naturalWidth > 0);
            return;
          }
          image.decode().then(
            function () { resolve(true); },
            function () { resolve(image.complete && image.naturalWidth > 0); }
          );
        }

        function loaded() {
          image.removeEventListener('load', loaded);
          image.removeEventListener('error', failed);
          decoded();
        }

        function failed() {
          image.removeEventListener('load', loaded);
          image.removeEventListener('error', failed);
          resolve(false);
        }

        if (image.complete) {
          if (image.naturalWidth > 0) {
            decoded();
          } else {
            resolve(false);
          }
          return;
        }

        image.addEventListener('load', loaded);
        image.addEventListener('error', failed);
      });
      preparations.set(image, preparation);
      return preparation;
    }

    function show(next) {
      requestedIndex = (next + slides.length) % slides.length;
      var nextIndex = requestedIndex;
      var thisRequest = ++requestNumber;
      showcase.setAttribute('aria-busy', 'true');

      prepare(slides[nextIndex], true).then(function (ready) {
        if (thisRequest !== requestNumber) {
          return;
        }
        showcase.removeAttribute('aria-busy');
        if (!ready) {
          requestedIndex = index;
          return;
        }

        slides[index].hidden = true;
        index = nextIndex;
        slides[index].hidden = false;
        position.textContent = String(index + 1);
        counter.setAttribute(
          'aria-label',
          item + ' ' + String(index + 1) + ' of ' + String(slides.length)
        );
        label.textContent = slides[index].dataset.label;
        caption.textContent = slides[index].dataset.caption;
      });
    }

    controls.querySelector('[data-showcase-previous]').addEventListener('click', function () {
      show(requestedIndex - 1);
    });
    controls.querySelector('[data-showcase-next]').addEventListener('click', function () {
      show(requestedIndex + 1);
    });
    controls.hidden = false;

    /* Once the critical first view has completed page loading, warm the rest
       at idle priority. Carousel navigation is then immediate in the ordinary
       case, while prepare() still protects very early interaction and slow
       connections. */
    function warmSlides() {
      var warm = function () {
        slides.forEach(function (slide, slideIndex) {
          if (slideIndex !== index) {
            prepare(slide, false);
          }
        });
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(warm, { timeout: 1500 });
      } else {
        window.setTimeout(warm, 0);
      }
    }

    if (document.readyState === 'complete') {
      warmSlides();
    } else {
      window.addEventListener('load', warmSlides, { once: true });
    }
  });
}());
