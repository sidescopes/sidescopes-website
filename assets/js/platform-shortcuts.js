(function () {
  "use strict";

  var hint = "";
  if (navigator.userAgentData && navigator.userAgentData.platform) {
    hint = navigator.userAgentData.platform;
  } else {
    hint = navigator.platform || navigator.userAgent || "";
  }
  var detected = /mac|iphone|ipad|ipod/i.test(hint) ? "macos" : "windows";
  var labels = { windows: "Windows", macos: "macOS" };

  document.querySelectorAll("[data-platform-shortcuts]").forEach(function (root, rootIndex) {
    var sections = Array.from(root.querySelectorAll(":scope > [data-platform]"));
    if (sections.length < 2) return;

    var tabs = document.createElement("div");
    tabs.className = "platform-tabs";
    tabs.setAttribute("role", "tablist");
    tabs.setAttribute("aria-label", "Operating system");

    var buttons = sections.map(function (section, index) {
      var platform = section.getAttribute("data-platform");
      var panelId = "platform-shortcuts-" + rootIndex + "-" + platform;
      var tabId = panelId + "-tab";
      var button = document.createElement("button");

      section.id = panelId;
      section.setAttribute("role", "tabpanel");
      section.setAttribute("aria-labelledby", tabId);
      button.type = "button";
      button.id = tabId;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", panelId);
      button.textContent = labels[platform] || platform;
      button.addEventListener("click", function () {
        activate(index, true);
      });
      tabs.appendChild(button);
      return button;
    });

    function activate(index, focus) {
      sections.forEach(function (section, sectionIndex) {
        var selected = sectionIndex === index;
        section.hidden = !selected;
        buttons[sectionIndex].setAttribute("aria-selected", selected ? "true" : "false");
        buttons[sectionIndex].tabIndex = selected ? 0 : -1;
      });
      if (focus) buttons[index].focus();
    }

    tabs.addEventListener("keydown", function (event) {
      var current = buttons.indexOf(document.activeElement);
      if (current < 0) return;
      var next = current;
      if (event.key === "ArrowRight") next = (current + 1) % buttons.length;
      else if (event.key === "ArrowLeft") next = (current - 1 + buttons.length) % buttons.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = buttons.length - 1;
      else return;
      event.preventDefault();
      activate(next, true);
    });

    root.insertBefore(tabs, sections[0]);
    root.classList.add("platform-shortcuts--enhanced");
    var initial = sections.findIndex(function (section) {
      return section.getAttribute("data-platform") === detected;
    });
    activate(initial >= 0 ? initial : 0, false);
  });
})();
