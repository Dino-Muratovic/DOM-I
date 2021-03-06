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

// navigation 
let navigationBar = document.querySelectorAll('header a');
navigationBar[0].textContent = siteContent["nav"]["nav-item-1"];
navigationBar[1].textContent = siteContent["nav"]["nav-item-2"];
navigationBar[2].textContent = siteContent["nav"]["nav-item-3"];
navigationBar[3].textContent = siteContent["nav"]["nav-item-4"];
navigationBar[4].textContent = siteContent["nav"]["nav-item-5"];
navigationBar[5].textContent = siteContent["nav"]["nav-item-6"];



//nav anchor tags and append prepend
let navigation = document.querySelector('nav');
let anotherLink1 = document.createElement('a');
anotherLink1.textContent = "newLink1";
anotherLink1.style.color = "black";
navigation.prepend(anotherLink1);

let anotherLink2 = document.createElement('a');
anotherLink2.textContent = "newLink2";
anotherLink2.style.color = "black";
navigation.append(anotherLink2);



// console.log(anotherLink);
// console.log(navigationBar);





// section class CTA
// .cta-text 
let sectionOneText = document.querySelector(".cta-text h1");
sectionOneText.textContent = siteContent["cta"]["h1"];


// image
let sectionOneImage = document.getElementById("cta-img");
sectionOneImage.setAttribute('src', siteContent['cta']['img-src']);
sectionOneImage.setAttribute('alt', "Company-logo");

// button
let sectionOneButton = document.querySelector('button');
sectionOneButton.textContent = siteContent['cta']['button'];




//top-content
//headings in top-content
let topContentHeadings = document.querySelectorAll('.top-content h4');
topContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];
// console.log(topContentHeadings);

//paragraphs in top-content
let topContentP = document.querySelectorAll('.top-content p');
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];
// console.log(topContentP);


// middle image
let midImage = document.getElementById('middle-img');
midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


//bottom content
//headings in bottom content
let bottomContentHeadings = document.querySelectorAll('.bottom-content h4');
// console.log(bottomContentHeadings);
bottomContentHeadings[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentHeadings[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentHeadings[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContentP = document.querySelectorAll('.bottom-content p');
bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];


//contact section
//heading
let contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent["contact"]["contact-h4"];

//contact information
let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent ["contact"]["address"];
contactP[1].textContent = siteContent ["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];
// console.log(contactP);

//footer
let footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"];





























