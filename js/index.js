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
    "img-src": "img/header-img.png"
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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const navServices = document.querySelector("a");
const navProd = navServices.nextElementSibling;
const navVision = navProd.nextElementSibling;
const navFeatures = navVision.nextElementSibling;
const navAbout = navFeatures.nextElementSibling;
const navContact = navAbout.nextElementSibling;

navServices.textContent = siteContent["nav"]["nav-item-1"]
navProd.textContent = siteContent["nav"]["nav-item-2"]
navVision.textContent = siteContent["nav"]["nav-item-3"]
navFeatures.textContent = siteContent["nav"]["nav-item-4"]
navAbout.textContent = siteContent["nav"]["nav-item-5"]
navContact.textContent = siteContent["nav"]["nav-item-6"]

const ctaParent = document.querySelector(".cta-text")
ctaParent.children[0].textContent = siteContent["cta"]["h1"]
ctaParent.children[1].textContent = siteContent["cta"]["button"]

const topContent = document.querySelector(".top-content")

const firstDiv = topContent.children[0]
firstDiv.children[0].textContent = siteContent["main-content"]["features-h4"]
firstDiv.children[1].textContent = siteContent["main-content"]["features-content"]

const secondDiv = topContent.children[1]
secondDiv.children[0].textContent = siteContent["main-content"]["about-h4"]
secondDiv.children[1].textContent = siteContent["main-content"]["about-content"]

const bottomContent = document.querySelector(".bottom-content")

const thirdDiv = bottomContent.children[0]
thirdDiv.children[0].textContent = siteContent["main-content"]["services-h4"]
thirdDiv.children[1].textContent = siteContent["main-content"]["services-content"]

const fourthDiv = bottomContent.children[1]
fourthDiv.children[0].textContent = siteContent["main-content"]["product-h4"]
fourthDiv.children[1].textContent = siteContent["main-content"]["product-content"]

const fifthDiv = bottomContent.children[2]
fifthDiv.children[0].textContent = siteContent["main-content"]["vision-h4"]
fifthDiv.children[1].textContent = siteContent["main-content"]["vision-content"]

const contact = document.querySelector(".contact")

contact.children[0].textContent = siteContent["contact"]["contact-h4"]
contact.children[1].textContent = siteContent["contact"]["address"]
contact.children[2].textContent = siteContent["contact"]["phone"]
contact.children[3].textContent = siteContent["contact"]["email"]

const footer = document.querySelector("footer")

footer.children[0].textContent = siteContent["footer"]["copyright"]