// import $ from "jquery";
// import Popper from "popper.js";
import bootstrap from "bootstrap";
import Typed from "typed.js";

console.log("js file loaded");

// $(function() {
//   if (typeof Storage != "undefined") {
//     if (!sessionStorage.getItem("done")) {
//       setTimeout(function() {
//         $("#contactFormModal").modal("show");
//         sessionStorage.setItem("done", true);
//       }, 5000);
//     }
//   }
// });
//

(function () {
  const newsletterForm = document.querySelector("#mc-embedded-subscribe-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.querySelector("#mce-EMAIL").value.trim();

      $.post("/newsletter-signup", {
        email
      })
        .done((data) => {
          console.log(data)
        })
        .fail((response) => {
          console.log(response.responseJSON)
        })
    })
  }
})();
//

//
// let typedCursor = new Typed('.subtitle', {
//   strings: ["Learn digital skills with us to get the most fulfilling jobs."],
//   typeSpeed: 30,
//   loop: true
// });
// console.log(typedCursor)

//nav-sticky
// const nav = document.querySelector('#headernav');
// const navTop = nav.offsetTop;
//
// function stickyNavigation() {
//   console.log('navTop = ' + navTop);
//   console.log('scrollY = ' + window.scrollY);
//
//   if (window.scrollY >= navTop) {
//     // nav offsetHeight = height of nav
//     document.body.style.paddingTop = nav.offsetHeight + 'px';
//     document.body.classList.add('fixed-nav');
//   } else {
//     document.body.style.paddingTop = 0;
//     document.body.classList.remove('fixed-nav');
//   }
// }
//
// window.addEventListener('scroll', stickyNavigation);
