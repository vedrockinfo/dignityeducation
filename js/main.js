document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {
  
      if (window.scrollY > 300) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        // remove padding top from body
        document.body.style.paddingTop = '0';
      }
    });
  });
  
  jQuery(document).ready(function () {
    jQuery(".dropdown").click(function () {
      jQuery(".dropdown-menu").toggleClass("dd-active");
    });
  });

jQuery(document).ready(function () {
    jQuery('.contact-form .form-control').on('focus', function () {
        jQuery(this).parent().addClass('focused');
    }).on('blur', function () {
        jQuery(this).parent().removeClass('focused');
    }).on('input', function () {
        jQuery(this).parent().addClass('inputted');
    });

});

function showTabFromHash() {
    const hash = window.location.hash;
    const tabContents = document.querySelectorAll('.tab-content-wrapper');
    const tabLinks = document.querySelectorAll('.tab-link');
    
    tabContents.forEach(tab => tab.classList.remove('active'));
    tabLinks.forEach(link => link.classList.remove('active'));

    if (hash) {
        const activeTab = document.querySelector(hash);
        const activeLink = document.querySelector(`#link-${hash.substring(1)}`);
        if (activeTab) {
            activeTab.classList.add('active');
            activeLink.classList.add('active');
        }
    } else {
        tabContents[0].classList.add('active');
        tabLinks[0].classList.add('active');
    }
}

window.addEventListener('hashchange', showTabFromHash);
showTabFromHash();

// jQuery('.chronical-graph').owlCarousel({
//   loop: true,
//   margin: 20,
//   autoplay: false,
//   dots: true,
//   dotsData: true,
//   responsive: {
//       0: {
//           items: 1
//       },
//       600: {
//           items: 1
//       },
//       1000: {
//           items: 1
//       }
//   }
// })

$(".organised").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
  dots: false,
  autoplay: false,
  autoplayTimeout: 3000,
  responsive: {
      0: {
          items: 1,
      },
      600: {
          items: 1,
      },
      1000: {
          items: 3,
      },
  },
});