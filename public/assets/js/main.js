// Glide
const config = {
    type: 'carousel',
    perView: 6,
    breakpoints: {
        768: { perView: 3 }
    }
};
new Glide('.glide', config).mount();

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
imgLoad.on('progress', function(instance, image) {
  masonry.layout();
});

