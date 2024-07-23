document.addEventListener("DOMContentLoaded", function () {
  const summaryTrigers = document.querySelectorAll(".has-summary");
  const overlay = document.querySelector(".overlay");
  const overlayCloseBtn = document.querySelector(".btn-close");

  summaryTrigers.forEach(function (summaryTriger) {
    summaryTriger.addEventListener("click", showSummary);
  });
  overlay.addEventListener("click", hideSummary);
  overlayCloseBtn.addEventListener("click", hideSummary);

  function hideSummary() {
    document.body.classList.remove("overlay-active");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  }

  function showSummary() {
    document.body.classList.add("overlay-active");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  }
});
