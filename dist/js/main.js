
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

  window.addEventListener("scroll", reveal);
  function reveal() {
    // vertical scroll value
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

    // horizontal scroll value
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
  // About container progress bar animation
  window.addEventListener("scroll", function () {
    var window_h = window.innerHeight;
    var progress = document.querySelector(".circle-progress");

    var progresstop = progress.getBoundingClientRect().top;
    var revealpoint = 150;

    if (progresstop < window_h - revealpoint) {
      startcircleProgress();
    }
  });

  
  //Portfolio container-details animation
  var portfolio_items = document.querySelectorAll(".portfolio-item");
  portfolio_items.forEach(portfolio => {
    var details_btn = portfolio.querySelector(".details-btn");
    var portfolio_img = portfolio.querySelectorAll(".portfolio-img-left,.portfolio-img-right");
    var details = portfolio.querySelector(".portfolio-details");

    // details animation
    details_btn.style.transition = "transform 0.5s ease-in-out";

    details_btn.addEventListener("click", function () {
      var isActive =  details.classList.toggle("active");
      
      if(isActive){
        details.style.maxHeight = details.scrollHeight + "px";
        details_btn.style.transform = "rotate(90deg)";

        for (var i = 0; i < portfolio_img.length; i++) {
          portfolio_img[i].classList.add("active");
        }
      }
      else{
        details.style.maxHeight = 0 + "px";
        details_btn.style.transform = "rotate(0deg)";

        for (var i = 0; i < portfolio_img.length; i++) {
          portfolio_img[i].classList.remove("active");
        }
      }
    });

    // details hover animation
    portfolio.addEventListener("mouseenter", function () {
      details.classList.add("active");
      details.style.maxHeight = details.scrollHeight + "px";
      details_btn.style.transform = "rotate(90deg)";

      for (var i = 0; i < portfolio_img.length; i++) {
        portfolio_img[i].classList.add("active");
      }

    });

    portfolio.addEventListener("mouseleave", function () {
      details.classList.remove("active");
      details.style.maxHeight = 0 + "px";
      details_btn.style.transform = "rotate(0deg)";

      for (var i = 0; i < portfolio_img.length; i++) {
        portfolio_img[i].classList.remove("active");
      }
    });


    



    


  });
  
  
});