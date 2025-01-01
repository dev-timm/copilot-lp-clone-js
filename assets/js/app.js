// LOGOSLIDER

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

// NAVBAR

const navbarStyles = {
  navContainer: 'nav-container',
  navMain: 'nav-main',
  linksContainer: 'links-container',
  navLink: 'nav-link',
  rightNav: 'right-nav',
  linkBtn: 'link-btn',
  searchContainer: 'search-container',
  searchIcon: 'search-icon',
  openSearchIcon: 'open-search-icon',
  navToggle: 'nav-toggle',
  showContainer: 'show-container',
};

function Navbar() {
  let showLinks = false;
  const menuRef = document.createElement('ul');

  const toggleLinks = () => {
    showLinks = !showLinks;
    if (showLinks) {
      menuRef.classList.add(navbarStyles.showContainer);
    } else {
      menuRef.classList.remove(navbarStyles.showContainer);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef && !menuRef.contains(event.target)) {
      showLinks = false;
      menuRef.classList.remove(navbarStyles.showContainer);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  const navContainer = document.createElement('div');
  navContainer.className = navbarStyles.navContainer;

  const navMain = document.createElement('div');
  navMain.className = navbarStyles.navMain;

  const logo = document.createElement('div');
  logo.innerHTML = '<!-- Logo Here -->'; // Replace with your logo logic
  navMain.appendChild(logo);

  const navToggle = document.createElement('button');
  navToggle.className = navbarStyles.navToggle;
  navToggle.innerHTML = `<img src="./assets/images/mobile-menu.svg" alt="mobile menu icon" />`;
  navToggle.addEventListener('click', toggleLinks);
  navMain.appendChild(navToggle);

  menuRef.className = navbarStyles.linksContainer;
  const links = [
    'Product',
    'Solutions',
    'Resources',
    'Open Source',
    'Enterprise',
    'Pricing',
  ];

  links.forEach((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.className = navbarStyles.navLink;
    a.innerHTML = `${link} <img src="./assets/images/chevron-down.svg" alt="chevron" />`;
    a.addEventListener('click', () => {
      showLinks = false;
      menuRef.classList.remove(navbarStyles.showContainer);
    });
    li.appendChild(a);
    menuRef.appendChild(li);
  });

  navMain.appendChild(menuRef);

  const rightNav = document.createElement('div');
  rightNav.className = navbarStyles.rightNav;

  const searchContainer = document.createElement('div');
  searchContainer.className = navbarStyles.searchContainer;
  searchContainer.innerHTML = `
    <input type="search" placeholder="Search or jump to..." />
    <img src="./assets/images/search.svg" alt="search icon" class="${navbarStyles.searchIcon}" />
    <img src="./assets/images/open-search.svg" alt="open search icon" class="${navbarStyles.openSearchIcon}" />
  `;
  rightNav.appendChild(searchContainer);

  const signIn = document.createElement('a');
  signIn.href = '#';
  signIn.innerText = 'Sign in';
  rightNav.appendChild(signIn);

  const signUp = document.createElement('a');
  signUp.href = '#';
  signUp.className = navbarStyles.linkBtn;
  signUp.innerText = 'Sign Up';
  rightNav.appendChild(signUp);

  navContainer.appendChild(navMain);
  navContainer.appendChild(rightNav);

  return navContainer;
}

const navbar = document.getElementById('navbar');
if (navbar) {
  navbar.appendChild(Navbar());
}
