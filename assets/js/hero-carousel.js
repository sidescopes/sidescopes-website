(function () {
  'use strict';

  document.querySelectorAll('[data-scope-showcase]').forEach(function (showcase) {
    var slides = Array.from(showcase.querySelectorAll('[data-showcase-slide]'));
    var controls = showcase.querySelector('[data-showcase-controls]');
    if (slides.length < 2 || !controls) {
      return;
    }

    var position = showcase.querySelector('[data-showcase-position]');
    var counter = showcase.querySelector('[data-showcase-counter]');
    var label = showcase.querySelector('[data-showcase-label]');
    var caption = showcase.querySelector('[data-showcase-caption]');
    var index = 0;

    function show(next) {
      slides[index].hidden = true;
      index = (next + slides.length) % slides.length;
      slides[index].hidden = false;
      position.textContent = String(index + 1);
      counter.setAttribute(
        'aria-label',
        'Configuration ' + String(index + 1) + ' of ' + String(slides.length)
      );
      label.textContent = slides[index].dataset.label;
      caption.textContent = slides[index].dataset.caption;
    }

    controls.querySelector('[data-showcase-previous]').addEventListener('click', function () {
      show(index - 1);
    });
    controls.querySelector('[data-showcase-next]').addEventListener('click', function () {
      show(index + 1);
    });
    controls.hidden = false;
  });
}());
