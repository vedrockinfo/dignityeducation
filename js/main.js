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



document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('chronological-graph');
    const popups = {
        'growth': document.getElementById('growth-popup'),
        'crisis': document.getElementById('crisis-popup'),
        'expansion': document.getElementById('expansion-popup'),
    };

    // Display growth popup when the page loads and hide others
    popups['growth'].style.display = 'block';
    Object.keys(popups).forEach(key => {
        if (key !== 'growth') {
            popups[key].style.display = 'none';
        }
    });

    map.addEventListener('click', (event) => {
        const stateId = event.target.id;
        if (stateId === 'poineering') {
            // Scroll to section with ID 'ministry'
            const sectionMinistry = document.getElementById('ministry');
            sectionMinistry.scrollIntoView({
                behavior: 'smooth' // Optional: adds smooth scrolling effect
            });
        } else if (popups[stateId]) {
            // Hide all popups
            Object.values(popups).forEach(popup => popup.style.display = 'none');

            // Show the clicked state's popup
            const popup = popups[stateId];
            popup.style.display = 'block';
            popup.style.left = `${event.pageX}px`;
            popup.style.top = `${event.pageY}px`;
        }
    });

    // Optionally, add a click listener to the document to hide popups when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('polygon') && !event.target.closest('.popup')) {
            Object.values(popups).for(popup => popup.style.display = 'block');
        }
    });
});

const video = document.getElementById('myVideo');
    const volumeButton = document.getElementById('volumeButton');

    volumeButton.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        volumeButton.textContent = '🔇';
      } else {
        video.muted = true;
        volumeButton.textContent = '🔊';
      }
    });