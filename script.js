var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000, 
      disableOnInteraction: false,
    },
    initialSlide: Math.floor((3 - 1) / 2),
  });

  var modal = document.getElementById("myModal");

  
  var openModalBtn = document.getElementById("openModalBtn");


  var closeModalBtns = document.querySelectorAll(".close, #closeModalBtn");

  openModalBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeModalBtns.forEach(function (btn) {
    btn.onclick = function () {
      modal.style.display = "none";
    };
  });
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };