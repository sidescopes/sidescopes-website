/* Visit counting, behind four gates.
   Cloudflare Web Analytics is cookieless and stores nothing on the reader's
   device, but it is still a request to a third party, so it is not made
   unless every gate opens:

     1. a token of the right shape reached the build (production only, set
        by the infrastructure repository — a preview deployment has none);
     2. the page is being served from the real site, not a preview host, a
        local server or somebody's mirror;
     3. Do Not Track is not set;
     4. Global Privacy Control is not set.

   The privacy page describes exactly this. The two must not drift apart. */
(function () {
  "use strict";

  var token = {{ .token | jsonify }};
  var host = {{ .host | jsonify }};

  if (!/^[0-9a-f]{32}$/.test(token)) {
    return;
  }
  if (window.location.hostname !== host) {
    return;
  }
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1") {
    return;
  }
  if (navigator.globalPrivacyControl === true) {
    return;
  }

  var beacon = document.createElement("script");
  beacon.defer = true;
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.setAttribute("data-cf-beacon", JSON.stringify({ token: token }));
  document.head.appendChild(beacon);
})();
