/* Marks the download card that matches the visitor's system.

   Progressive enhancement and nothing more: every card is fully usable
   with this script blocked, because the page never hides one. All it does
   is set an attribute the stylesheet uses to lift the likely card, so a
   wrong guess costs a reader nothing.

   No user-agent parsing beyond the platform word — there is no need to
   know the version, and nothing here is recorded or sent anywhere. */
(function () {
  "use strict";

  var hint = navigator.userAgentData && navigator.userAgentData.platform;
  var probe = (hint || navigator.platform || navigator.userAgent || "").toLowerCase();

  var name = "";
  if (probe.indexOf("mac") !== -1) {
    name = "mac";
  } else if (probe.indexOf("win") !== -1) {
    name = "windows";
  } else if (probe.indexOf("linux") !== -1 && probe.indexOf("android") === -1) {
    name = "linux";
  }

  if (!name) {
    return;
  }

  var card = document.querySelector('.dl-card[data-platform="' + name + '"]');
  if (card) {
    card.setAttribute("data-current", "true");
  }
})();
