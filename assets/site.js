"use strict";

// Keep the current section when switching between the two static pages.
function updateLanguageLinks() {
  for (const link of document.querySelectorAll(".language-switch a")) {
    const url = new URL(link.href);
    url.hash = window.location.hash;
    link.href = url.href;
  }
}

window.addEventListener("hashchange", updateLanguageLinks);
updateLanguageLinks();
