const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png",
    "new-h1": "I'm lovin' DOM"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

//changing color of navigation text to green
navLinks.forEach(item => item.style.color = 'green');

//adding a new navigation link to end of nav list
let newNavLink1 = document.createElement('a');
newNavLink1.textContent = 'Sign Up';
newNavLink1.style.color = 'red';
document.querySelector('header nav').appendChild(newNavLink1);

//adding a new navigation link to beginning of nav list
let newNavLink2 = document.createElement('a');
newNavLink2.textContent = 'News';
newNavLink2.style.color = 'red';
document.querySelector('header nav').prepend(newNavLink2);

let title = document.querySelector('.cta .cta-text h1');
title.textContent = siteContent['cta']['h1'];

let button = document.querySelector('.cta .cta-text button');
button.textContent = siteContent['cta']['button'];

//Add event listener to button to alternate h1 text
function altTitle() {
  if (title.textContent === siteContent['cta']['h1']) {
    title.textContent = siteContent['cta']['new-h1'];
  } else {
    title.textContent = siteContent['cta']['h1'];
  }
}

button.addEventListener('click', altTitle, false);


let topLeftColTitle = document.querySelector('.top-content :nth-child(1) h4');
topLeftColTitle.textContent = siteContent['main-content']['features-h4'];

let topLeftColPara = document.querySelector('.top-content :nth-child(1) p');
topLeftColPara.textContent = siteContent['main-content']['features-content'];

let topRightColTitle = document.querySelector('.top-content :nth-child(2) h4');
topRightColTitle.textContent = siteContent['main-content']['about-h4'];

let topRightColPara = document.querySelector('.top-content :nth-child(2) p');
topRightColPara.textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomLeftColTitle = document.querySelector('.bottom-content :nth-child(1) h4');
bottomLeftColTitle.textContent = siteContent['main-content']['services-h4'];

let bottomLeftColPara = document.querySelector('.bottom-content :nth-child(1) p');
bottomLeftColPara.textContent = siteContent['main-content']['services-content'];

let bottomMidColTitle = document.querySelector('.bottom-content :nth-child(2) h4');
bottomMidColTitle.textContent = siteContent['main-content']['product-h4'];

let bottomMidColPara = document.querySelector('.bottom-content :nth-child(2) p');
bottomMidColPara.textContent = siteContent['main-content']['product-content'];

let bottomRightColTitle = document.querySelector('.bottom-content :nth-child(3) h4');
bottomRightColTitle.textContent = siteContent['main-content']['vision-h4'];

let bottomRightColPara = document.querySelector('.bottom-content :nth-child(3) p');
bottomRightColPara.textContent = siteContent['main-content']['vision-content'];

let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

let contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];

let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];

//Increasing the font size of the section title
let h4Element = document.querySelectorAll('h4');
h4Element.forEach(item => item.style.fontSize = '1.6rem');