(function () {
  'use strict';

  document.querySelectorAll('[data-scope-showcase]').forEach(function (showcase) {
    var slides = Array.from(showcase.querySelectorAll('[data-showcase-slide]'));
    var controls = showcase.querySelector('[data-showcase-controls]');
    if (slides.length < 2 || !controls) {
      return;
    }

    var position = controls.querySelector('[data-showcase-position]');
    var label = controls.querySelector('[data-showcase-label]');
    var index = 0;

    function show(next) {
      slides[index].hidden = true;
      index = (next + slides.length) % slides.length;
      slides[index].hidden = false;
      position.textContent = String(index + 1);
      label.textContent = slides[index].dataset.label;
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
