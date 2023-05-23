// // function toggleBackground() {
// //     let body = document.body

// //     if (body.style.backgroundColor === "black") {
// //         body.style.backgroundColor = "white";
// //         body.style.color = "black"
// //     } else {
// //         body.style.backgroundColor = "black"
// //         body.style.color = "white";
// //     }
// // }

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
    
// });


// const hiddenElements = document.querySelectorAll();
// hiddenElements.forEach((el) => observer.observe(el));



      window.addEventListener('scroll', animateOnScroll);
function animateOnScroll() {
        const elements = document.querySelectorAll('.hidden');

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
