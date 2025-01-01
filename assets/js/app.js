// Import CSS and image paths dynamically for use in JavaScript
const styles = {
  sliderContainer: 'slider-container',
  slider: 'slider',
  paused: 'paused',
  fade: 'fade',
  fadeLeft: 'fade-left',
  fadeRight: 'fade-right',
};

const logos = [
  { id: 1, company: './assets/images/logo01.svg' },
  { id: 2, company: './assets/images/logo02.svg' },
  { id: 3, company: './assets/images/logo03.svg' },
  { id: 4, company: './assets/images/logo04.svg' },
  { id: 5, company: './assets/images/logo05.svg' },
  { id: 6, company: './assets/images/logo06.svg' },
  { id: 7, company: './assets/images/logo07.svg' },
  { id: 8, company: './assets/images/logo08.svg' },
  { id: 9, company: './assets/images/logo09.svg' },
  { id: 10, company: './assets/images/logo10.svg' },
];

function LogoSlider() {
  let isPaused = false;

  const sliderContainer = document.createElement('div');
  sliderContainer.className = styles.sliderContainer;

  const slider = document.createElement('div');
  slider.className = styles.slider;
  sliderContainer.appendChild(slider);

  const fadeLeft = document.createElement('div');
  fadeLeft.className = `${styles.fade} ${styles.fadeLeft}`;
  sliderContainer.appendChild(fadeLeft);

  const fadeRight = document.createElement('div');
  fadeRight.className = `${styles.fade} ${styles.fadeRight}`;
  sliderContainer.appendChild(fadeRight);

  const handleMouseEnter = () => {
    isPaused = true;
    slider.classList.add(styles.paused);
  };

  const handleMouseLeave = () => {
    isPaused = false;
    slider.classList.remove(styles.paused);
  };

  const allLogos = logos.concat(logos); // Duplicate the array for seamless scrolling

  allLogos.forEach((logo, index) => {
    const img = document.createElement('img');
    img.src = logo.company;
    img.alt = 'logo';
    img.addEventListener('mouseenter', handleMouseEnter);
    img.addEventListener('mouseleave', handleMouseLeave);
    slider.appendChild(img);
  });

  return sliderContainer;
}

// Append the logo slider to the DOM (e.g., to the body or a specific container)
const hero1 = document.getElementById('hero1'); // Replace 'app' with your container ID
if (hero1) {
  hero1.appendChild(LogoSlider());
}
