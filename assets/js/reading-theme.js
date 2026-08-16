/* Learn and Docs can use a reading surface independently of the project
   theme. An explicit choice is retained locally; otherwise the OS setting is
   followed, including changes made while the page is open. */
(function () {
  "use strict";

  var key = "sidescopes-reading-theme";
  var root = document.documentElement;
  var system = window.matchMedia("(prefers-color-scheme: dark)");
  var choice = "system";

  try {
    var saved = window.localStorage.getItem(key);
    if (saved === "light" || saved === "dark") {
      choice = saved;
    }
  } catch (_) {
    // The system setting remains a complete fallback when storage is blocked.
  }

  function resolvedTheme() {
    return choice === "system" ? (system.matches ? "dark" : "light") : choice;
  }

  function updateControls() {
    var controls = document.querySelectorAll("[data-reading-theme-option]");
    for (var i = 0; i < controls.length; i += 1) {
      controls[i].setAttribute(
        "aria-pressed",
        String(controls[i].getAttribute("data-reading-theme-option") === choice)
      );
    }
  }

  function applyTheme() {
    root.setAttribute("data-reading-theme", resolvedTheme());
    root.setAttribute("data-reading-theme-choice", choice);
    updateControls();
  }

  function selectTheme(next) {
    choice = next;
    try {
      if (choice === "system") {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, choice);
      }
    } catch (_) {
      // The current page still changes even when the preference cannot persist.
    }
    applyTheme();
  }

  applyTheme();

  document.addEventListener("DOMContentLoaded", function () {
    var controls = document.querySelectorAll("[data-reading-theme-option]");
    for (var i = 0; i < controls.length; i += 1) {
      controls[i].addEventListener("click", function () {
        selectTheme(this.getAttribute("data-reading-theme-option"));
      });
    }
    updateControls();
  });

  function systemChanged() {
    if (choice === "system") {
      applyTheme();
    }
  }

  if (typeof system.addEventListener === "function") {
    system.addEventListener("change", systemChanged);
  } else if (typeof system.addListener === "function") {
    system.addListener(systemChanged);
  }
})();
