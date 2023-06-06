// ---- Lisa ----
// hamburger menu
const menu = document.getElementById('menu');
const list = document.getElementById('list');

const content = document.getElementById('content');
const dropdown = document.getElementById('dropdown');
const dropdownContent = document.getElementById('dropdown-content');

const back = document.getElementById('back');


function toggleMenu(){
    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
      } else {
        list.classList.add("hidden");
      }
    }
    

menu.addEventListener('click', toggleMenu);

function toggleContent(){
    if (dropdown.classList.contains('hidden')){
        dropdown.classList.remove('hidden');
        list.classList.add('hidden');
      
    } else {
        dropdown.classList.add('hidden');
    }
}

content.addEventListener('click', toggleContent);

back.addEventListener('click', () => {
    list.classList.remove('hidden');
    dropdown.classList.add('hidden');
})

// -------

// -------


// --- Shahad ----  

const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const slides = sliderContainer.querySelectorAll('img');
const prevButton = slider.querySelector('.prev-button');
const nextButton = slider.querySelector('.next-button');
let currentIndex = 0;

function showSlide(index) {
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;
}

function goToPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

function goToNextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}




prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);

// Auto slide show for desktop
const isDesktop = window.matchMedia('(min-width: 768px)');

function handleMediaQuery(event) {
  if (event.matches) {
    autoSlideShow = setInterval(goToNextSlide, 5000); // Skift billede hvert 5. sekund
  } else {
    clearInterval(autoSlideShow);
  }
}

let autoSlideShow;

isDesktop.addListener(handleMediaQuery);
handleMediaQuery(isDesktop);