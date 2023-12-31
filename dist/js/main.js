
function startcircleProgress() {

  $(".circle-progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.circle-progress-left .circle-progress-bar');
    var right = $(this).find('.circle-progress-right .circle-progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }
}

document.addEventListener("DOMContentLoaded", function () {
  var nav_items = document.querySelectorAll(".nav-item");

  for (var i = 0; i < nav_items.length; i++) {
    // 1 saniyeden başlayıp 0.5 saniye artan animasyon geçikmesi
    var delay = 1 + i * 0.5;
    nav_items[i].style += "animation-delay: " + delay + "s;";
  }

  window.addEventListener("scroll", reveal);
  function reveal() {
    // dikey scroll değeri
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var window_h = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < window_h - revealpoint) {
        reveals[i].classList.add("rev-active");
      } else {
        reveals[i].classList.remove("rev-active");
      }
    }

    // yatay scroll değeri
    var reveals = document.querySelectorAll(".reveal-left,.reveal-right");
    for (var i = 0; i < reveals.length; i++) {
      var window_h = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 250;

      if (revealtop < window_h - revealpoint) {
        reveals[i].classList.add("rev-active");
      } else {
        reveals[i].classList.remove("rev-active");
      }
    }
  }



  // Hakkında kısmı progress bar animasyonu
  window.addEventListener("scroll", function () {
    var window_h = window.innerHeight;
    var progress = document.querySelector(".circle-progress");

    var progresstop = progress.getBoundingClientRect().top;
    var revealpoint = 150;

    if (progresstop < window_h - revealpoint) {
      startcircleProgress();
    }
  });

  $("")
  
  
});