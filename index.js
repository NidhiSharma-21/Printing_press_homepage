// Image data
const images = [
    { url: 'nature1.jpg', category: 'nature' },
    { url: 'food1.jpg', category: 'food' },
    { url: 'travel1.jpg', category: 'travel' },
    { url: 'nature2.jpg', category: 'nature' },
    { url: 'food2.jpg', category: 'food' },
    { url: 'travel2.jpg', category: 'travel' },
    { url: 'nature3.jpg', category: 'nature' },
    { url: 'food3.jpg', category: 'food' },
    { url: 'travel3.jpg', category: 'travel' },
    { url: 'nature2.jpg', category: 'nature' },
    { url: 'food1.jpg', category: 'food' },
    { url: 'travel1.jpg', category: 'travel' },
  ];
  // Gallery settings
const gallerySettings = {
  imagesPerPage: 6,
  currentPage: 1,
  currentFilter: 'all',
};

// DOM elements
const filterButtons = document.querySelectorAll('.filter-btn');
const imagesContainer = document.querySelector('.images-container');
const paginationContainer = document.querySelector('.pagination');

// Filter images function
function filterImages(filter) {
  gallerySettings.currentFilter = filter;

  // Remove all images from container
  imagesContainer.innerHTML = '';

  // Filter images by category
  const filteredImages = images.filter(image => {
    return filter === 'all' || image.category === filter;
  });

  // Render images
  filteredImages.forEach(image => {
    const imageElement = `
      <div class="image">
        <img src="${image.url}">
      </div>
     ';
    imagesContainer.insertAdjacentHTML('beforeend', imageElement);
  });

  // Render pagination buttons
  render



