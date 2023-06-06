// slider for testimonials
const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];
let currentTestimonial = 0; // Default 0
let intervalId; // empty variable used to track for the automatic change

function changeTestimonial(index) {
  indicators[currentTestimonial].classList.remove('active'); //removes from active testimonial
  wrapper.style.marginLeft = `-${100 * index}%`; //adds style of margin left
  indicators[index].classList.add('active'); // adds a class of active
  currentTestimonial = index; //Index gets updated, index is the number the testimonials it is on
}

function startTestimonialChange() { //starts the automatic change
  intervalId = setInterval(() => { //callback function every 5s
    const nextTestimonial = (currentTestimonial + 1) % indicators.length;
    changeTestimonial(nextTestimonial);
  }, 5000);
}

function stopTestimonialChange() { 
  clearInterval(intervalId);
  intervalId = null; // Clears and reset intervalId to null = not active
}

function handleWindowResize() { //window resize
  const windowWidth = window.innerWidth; //gets current window
  if (windowWidth < 1024) { //if else statement smaller than 1024 and not already active = start automation
    if (!intervalId) {  
      startTestimonialChange();
    }
  } else {
    stopTestimonialChange(); //else stop
  }
}

indicators.forEach((item, i) => {   // adds an eventlistener "click" for every indicator
  item.addEventListener('click', () => {
    changeTestimonial(i); // calls
    stopTestimonialChange(); // Stop the existing interval
    startTestimonialChange(); // Start a new interval
  });
});

window.addEventListener('resize', handleWindowResize);  //register the size
handleWindowResize(); // Initial setup based on window width
// ---