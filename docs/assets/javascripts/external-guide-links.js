document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.pathname.includes("/guide/")) {
    return;
  }

  document.querySelectorAll("a[href]").forEach((link) => {
    const url = new URL(link.href, window.location.href);

    if (url.origin !== window.location.origin) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
});