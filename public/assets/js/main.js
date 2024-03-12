// header
const navMenu = document.getElementById("navMenu");
const burgerIcon = document.getElementById("burger");

function adjustViewport() {
  const viewport = window.innerWidth;
  const isMobile = viewport <= 650;
  navMenu.style.display = isMobile ? "none" : "flex";
  burgerIcon.style.display = isMobile ? "block" : "none";
}

window.addEventListener("resize", adjustViewport);
window.addEventListener("load", adjustViewport);

burgerIcon.addEventListener("click", function () {
  burgerIcon.classList.toggle('open');
});

// scroll
document.querySelectorAll(".backtotop, .category, .deal, .gallery, .services, .stores").forEach(function(button) {
  const targetSection = button.getAttribute('data-target');
  button.addEventListener("click", function() {
      if (targetSection) {
          const section = document.getElementById(targetSection);
          if (section) {
              const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
              const offset = sectionPosition - 100;
              window.scrollTo({ top: offset, behavior: 'smooth' });
          }
      } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  });
});


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Glide
const config = {
  type: 'carousel',
  perView: 6,
  breakpoints: {
    768: { perView: 3 }
  }
};
new Glide('.glide', config).mount();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Masonry
var grid = document.querySelector('.grid');

// Initialize
var masonry = new Masonry(grid, {
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
});

// imagesLoaded
var imgLoad = imagesLoaded(grid);

// Reload Masonry
imgLoad.on('progress', function (instance, image) {
  masonry.layout();
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Animate On Scroll
AOS.init({
  duration: 1200,
})

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Leaflet
var map = L.map('map').setView([43.76745985468301, -79.36893358235555], 12);

// map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// pin
var pin = L.icon({
  iconUrl: '/assets/images/pin.png',
  shadowUrl: '/assets/images/pin-shadow.png',

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});


// Vaughan marker
var marker = L.marker([43.787342999999964, -79.52926199999992], { icon: pin }).addTo(map);
marker.bindPopup("<h6>IKEA Vaughan</h6><br><Open today 10:00 a.m. - 9:00 p.m.<br>200 Interchange Way, Vaughan").openPopup();

// STC marker
var marker = L.marker([43.77598186727462, -79.25773036105495], { icon: pin }).addTo(map);
marker.bindPopup("<h6>IKEA Scarborough Town Centre</h6><br>Open today 10:00 a.m. - 9:00 p.m.<br>300 Borough Drive, Scarborough").openPopup();

// // North York marker
var marker = L.marker([43.76745985468301, -79.36893358235555], { icon: pin }).addTo(map);
marker.bindPopup("<h6>IKEA North York</h6><br>Open today 10:00 a.m. - 9:00 p.m.<br>15 Provost Drive, North York").openPopup();


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
