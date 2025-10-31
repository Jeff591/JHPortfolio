//Get components from DOM/HTML
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

// Assign each img an event to open the modal
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = img.src;
    currentIndex = index;
  });
});

// Close modal
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});


function showImage(index) {
    // In case of looping, update index
    currentIndex = (index + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
}


// Navigation
leftArrow.addEventListener('click', () => showImage(currentIndex - 1));
rightArrow.addEventListener('click', () => showImage(currentIndex + 1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('active')) return;
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  if (e.key === 'Escape') modal.classList.remove('active');
});
