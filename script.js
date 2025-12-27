document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".reveal");
    const  rightToLeftElements = document.querySelectorAll(".right-to-left");
    const  leftToRightElements = document.querySelectorAll(".left-to-right");
    const bounceElements = document.querySelectorAll(".bounce");
    function revealOnScroll() {
        elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const elementBottom = rect.bottom;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 150 && elementBottom > 0) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible");
                }
                });
    }
    function rightToLeft() {
                rightToLeftElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const elementBottom = rect.bottom;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 150 && elementBottom > 0) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible");
                }
                });
        }
    function leftToRight() {
                leftToRightElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const elementBottom = rect.bottom;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 150 && elementBottom > 0) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible");
                }
                });
        }
        function bounceOnScroll() {
            bounceElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const elementBottom = rect.bottom;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 50 && elementBottom > 0) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible");
                }
            });
        }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("scroll", rightToLeft);
    window.addEventListener("scroll", leftToRight);
    window.addEventListener("scroll", bounceOnScroll);
    revealOnScroll();
    rightToLeft();
        bounceOnScroll();
    leftToRight();
  });

// Slider js
// Slider js
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,

        // Auto slide
        autoplay: {
            delay: 1000,          // time between slides (ms)
            disableOnInteraction: false, // keeps autoplay after user interaction
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            620: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
});
