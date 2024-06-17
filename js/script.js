

    // code for navigation bar
    let navbar = document.querySelector('.navbar');

document.querySelector('#menu-button').onclick = () =>
    {
        navbar.classList.toggle('active');
        
    }

    // code for image slider
    var swiper = new Swiper(".products-slider", {
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            
            640: { // screens 640px and up
                slidesPerView: 1,
            },
            768: { // screens 768px and up
                slidesPerView: 2,
            },
            1000: { // screens 768px and up
                slidesPerView: 3,
            },
            1024: { // screens 1024px and up
                slidesPerView: 4,
            },
            1400: { // screens 1024px and up
                slidesPerView: 5,
            },
        }
      });

      var swiper = new Swiper(".review-slider", {
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
      });

    
