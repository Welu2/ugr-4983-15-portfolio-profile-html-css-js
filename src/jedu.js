const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const scrollContainer = document.querySelector('.horizontal-scroll-container');

let scrollLeft = 0;

nextBtn.addEventListener('click', () => {
  scrollLeft += scrollContainer.offsetWidth / 3; // Adjust based on number of visible columns
  scrollLeft = Math.min(scrollLeft, scrollContainer.scrollWidth - scrollContainer.offsetWidth);
  scrollContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  scrollLeft -= scrollContainer.offsetWidth / 3; // Adjust based on number of visible columns
  scrollLeft = Math.max(scrollLeft, 0);
  scrollContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
});