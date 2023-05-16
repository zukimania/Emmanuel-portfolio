

      window.addEventListener('scroll', animateOnScroll);
function animateOnScroll() {
        const elements = document.querySelectorAll('.container');

        elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementPosition - windowHeight <= 0) {
            element.classList.add('animate');
          } else {
            element.classList.remove('animate');
          }
        });
      }

      window.addEventListener('scroll', animateOnScroll);
