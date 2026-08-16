// The browser lab, fetched when asked for and not before.
//
// A megabyte of WebAssembly on every visit would be rude to anyone who came
// to read what the lab IS, so nothing loads until the button is pressed.
// That is also why the size is stated beside it: the visitor decides.
//
// The lab is FRAMED rather than rebuilt here. Its own page - the filmstrip,
// the credit line, the walk-through, the file picker, the boot sequence -
// ships with the application and is tested there, including as a copy opened
// straight from disk. Re-implementing that surface in this repository would
// give the project two browser labs to keep in step, and the second one
// would be the one nobody notices breaking.
(function () {
  'use strict';

  var mount = document.getElementById('lab-mount');
  if (!mount || !mount.dataset.src) {
    return;
  }

  var box = document.createElement('div');
  box.className = 'lab-box';

  var start = document.createElement('button');
  start.type = 'button';
  start.className = 'btn lab-start';
  start.textContent = 'Open the Lab';

  box.appendChild(start);
  mount.appendChild(box);

  start.addEventListener('click', function () {
    start.disabled = true;
    start.textContent = 'Loading…';

    var frame = document.createElement('iframe');
    frame.className = 'lab-frame';
    frame.src = mount.dataset.src + 'index.html';
    frame.title = 'SideScopes Lab: interactive color scopes';
    // allow-same-origin looks like it weakens this and does not: the frame is
    // already a different origin from this site, so all it grants is the
    // frame's own. Without it the document gets an OPAQUE origin, localStorage
    // throws, and the walk-through forgets it was completed on every visit -
    // which is the one thing the lab is supposed to remember.
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin');

    // On a phone the Lab becomes a normal, taller document so the picture
    // and the application can stack at a useful size. Its origin differs from
    // the website's, so it reports that height with postMessage. Accept only
    // this frame, from the configured media origin, and only a bounded number.
    var labOrigin = new URL(frame.src, window.location.href).origin;
    window.addEventListener('message', function (event) {
      var data = event.data;
      if (event.source !== frame.contentWindow || event.origin !== labOrigin ||
          !data || data.type !== 'sidescopes-lab-height') {
        return;
      }
      var height = Number(data.height);
      if (!Number.isFinite(height) || height < 320 || height > 2400) {
        return;
      }
      frame.style.height = Math.ceil(height) + 'px';
    });

    frame.addEventListener('load', function () {
      // Only now, so the button holds the space until there is something to
      // show. The frame is inserted ONCE and never moved: reparenting an
      // iframe reloads its document, which here would mean fetching the
      // WebAssembly a second time.
      start.remove();
      box.classList.add('lab-box--running');
    });

    box.appendChild(frame);
  });
})();
