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

// nav scroll
document.querySelectorAll(".backtotop, .deal, .gallery, .services, .stores").forEach(function (button) {
  const targetSection = button.getAttribute('data-target');
  button.addEventListener("click", function () {
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
// Category Glide
const config = {
  type: 'carousel',
  gap: 0,
  perView: 6,
  startAt: 0,
  peek: { before: 0, after: 50 },
  breakpoints: {
    768: { perView: 3 }
  },
  autoplay: 3000,
};

new Glide('.glide', config).mount();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Masonry
var grid = document.querySelector('.grid');

// Initialize Masonry
var masonry = new Masonry(grid, {
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
});

// imagesLoaded
var imgLoad = imagesLoaded(grid);

// Reload Masonry layout after img load
imgLoad.on('progress', function () {
  masonry.layout();
});

// Expand Masonry
document.addEventListener('DOMContentLoaded', function () {
  var loadMoreButton = document.getElementById('load-more-btn');
  var gridItems = document.querySelectorAll('.grid-item');
  var batchSize = 4;
  var currentItemIndex = 0;

  // Reset layout & hide all items
  function resetLayout() {
    gridItems.forEach(function (item) {
      item.classList.remove('show');
    });
  }

  function showNextItems() {
    for (var i = currentItemIndex; i < currentItemIndex + batchSize; i++) {
      if (gridItems[i]) {
        gridItems[i].classList.add('show');
      }
    }
    currentItemIndex += batchSize;

    // Hide the button if all items are shown
    if (currentItemIndex >= gridItems.length) {
      loadMoreButton.style.display = 'none';
      // console.log("hide btn");
    }

    // Update Masonry layout
    masonry.layout();
    // console.log("layout updated");
  }

  //  Show the first batch
  showNextItems();

  // Load more button
  loadMoreButton.addEventListener('click', function () {
    showNextItems();
    // console.log("load more");
  });
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Animate On Scroll
AOS.init({
  duration: 1200,
})

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Services glide
const configServices = {
  type: 'carousel',
  gap: 30,
  perView: 5,
  startAt: 0,
  peek: { before: 0, after: 100 },
  breakpoints: {
    768: { perView: 2 },
    992: { perView: 3 },
    1200: { perView: 4 }
  },
};

new Glide('.glide-services', configServices).mount();

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

  iconSize: [40, 68],
  shadowSize: [50, 64],
  iconAnchor: [20, 65],
  shadowAnchor: [10, 58],
  popupAnchor: [-3, -76]
});

// marker
var markers = [
  {
    position: [43.787342999999964, -79.52926199999992],
    name: "IKEA Vaughan",
    address: "200 Interchange Way, Vaughan, L4K 5C3"
  },
  {
    position: [43.77598186727462, -79.25773036105495],
    name: "IKEA Scarborough Town Centre",
    address: "300 Borough Drive, Scarborough, M1P 4P5"
  },
  {
    position: [43.6591854280353, -79.38246813554204],
    name: "IKEA Toronto Downtown",
    address: "382 Yonge Street, Toronto, M5B 1S9"
  },
  {
    position: [43.32816384140497, -79.82904739393129],
    name: "IKEA Burlington",
    address: "1065 Plains Road East, Burlington, L7T 4K1"
  },
  {
    position: [45.350467255755404, -75.78387474099355],
    name: "IKEA Ottawa",
    address: "2685 Iris Street, Ottawa, K2C 3S4"
  },
  {
    position: [43.61828569435977, -79.53453073064989],
    name: "IKEA Etobicoke",
    address: "1475 The Queensway, Etobicoke, M8Z 1T3"
  },
  {
    position: [43.76745985468301, -79.36893358235555],
    name: "IKEA North York",
    address: "15 Provost Drive, North York, M2K 2X9"
  }
];

// marker on map
markers.forEach(function(markerInfo) {
  var marker = L.marker(markerInfo.position, { icon: pin }).addTo(map);
  marker.bindPopup("<h3>" + markerInfo.name + "</h3><br>Open today 10:00 a.m. - 9:00 p.m.<br>" + markerInfo.address).openPopup();
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
