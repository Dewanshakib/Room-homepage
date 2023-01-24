const imgContainer = document.querySelector(".img_d");
const imgContainerM = document.querySelector(".img_m");
const textContainer = document.querySelector(".warp_text_con_d");
const textContainerM = document.querySelector(".warp_text_con_m");
const leftArrw = document.querySelector(".arw_l");
const rightArrw = document.querySelector(".arw_r");
const hamMenu = document.querySelector(".ham-menu")
const closeMenu = document.querySelector(".close")
const topBar = document.querySelector(".navlinks_f_m")
const blurBg = document.querySelector(".blur_bg")
console.log(hamMenu)
const imagesD = [
  "images/desktop-image-hero-1.jpg",
  "images/desktop-image-hero-2.jpg",
  "images/desktop-image-hero-3.jpg",
];
const imagesM = [
  "images/mobile-image-hero-1.jpg",
  "images/mobile-image-hero-2.jpg",
  "images/mobile-image-hero-3.jpg",
];
const textDivs = [
  `<h3 style="font-size: 42px; font-weight: 700; color: black;margin-bottom: 1rem;">Discover innovative ways to decorate</h3>
<p style="color: #a1a1a1; font-weight: 500;line-height: 1.2rem;font-size: 16px;margin-bottom: 2rem">
  We provide unmatched quality, comfort, and style for property
  owners across the country. Our experts combine form and function
  in bringing your vision to life. Create a room in your own style
  with our collection and make your property a reflection of you
  and what you love.
</p>
<div>
  <a href="#" style="text-decoration: none; color: #000;font-size: 16px;letter-spacing: 10px;">SHOP NOW <img src="./images/icon-arrow.svg" alt="arrow image"></a>
</div>`,
  `<h3 style="font-size: 42px; font-weight: 700; color: black;margin-bottom: 1rem;">We are available all across the globe</h3>
  <p style="color: #a1a1a1; font-weight: 500;line-height: 1.2rem;font-size: 16px;margin-bottom: 2rem">
  With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.
  </p>
  <div>
    <a href="#" style="text-decoration: none; color: #000;font-size: 16px;letter-spacing: 10px;">SHOP NOW <img src="./images/icon-arrow.svg" alt="arrow image"></a>
  </div>`,
  `<h3 style="font-size: 42px; font-weight: 700; color: black;margin-bottom: 1rem;">Manufactured with the best materials</h3>
  <p style="color: #a1a1a1; font-weight: 500;line-height: 1.2rem;font-size: 16px;margin-bottom: 2rem">
  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.
  </p>
  <div>
    <a href="#" style="text-decoration: none; color: #000;font-size: 16px;letter-spacing: 10px;">SHOP NOW <img src="./images/icon-arrow.svg" alt="arrow image"></a>
  </div>`,
];
const textDivsM = [
  `<h3 style="font-size: 36px; font-weight: 700; color: black;margin-bottom: 1rem;">Discover innovative ways to decorate</h3>
<p style="color: #a1a1a1; font-weight: 500;line-height: 1.2rem;font-size: 15px;margin-bottom: 2rem">
  We provide unmatched quality, comfort, and style for property
  owners across the country. Our experts combine form and function
  in bringing your vision to life. Create a room in your own style
  with our collection and make your property a reflection of you
  and what you love.
</p>
<div>
  <a href="#" style="text-decoration: none; color: #000;font-size: 16px;letter-spacing: 10px;">SHOP NOW <img src="./images/icon-arrow.svg" alt="arrow image"></a>
</div>`,
  `<h3 style="font-size: 36px; font-weight: 700; color: black;margin-bottom: 1rem;">We are available all across the globe</h3>
  <p style="color: #a1a1a1; font-weight: 500;line-height: 1.2rem;font-size: 15px;margin-bottom: 2rem">
  With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.
  </p>
  <div>
    <a href="#" style="text-decoration: none; color: #000;font-size: 16px;letter-spacing: 10px;">SHOP NOW <img src="./images/icon-arrow.svg" alt="arrow image"></a>
  </div>`,
  `<h3 style="font-size: 36px; font-weight: 700; color: black;margin-bottom: 1rem;">Manufactured with the best materials</h3>
  <p style="color: #a1a1a1; font-weight: 500;line-height: 1.2rem;font-size: 15px;margin-bottom: 2rem">
  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.
  </p>
  <div>
    <a href="#" style="text-decoration: none; color: #000;font-size: 16px;letter-spacing: 10px;">SHOP NOW <img src="./images/icon-arrow.svg" alt="arrow image"></a>
  </div>`,
];

imgContainer.src = imagesD[0];
textContainer.innerHTML = textDivs[0];
imgContainerM.src = imagesM[0]
textContainerM.innerHTML = textDivsM[0];
let index = 0;

rightArrw.addEventListener("click", () => {
  forwardImg();
});

leftArrw.addEventListener("click", () => {
  reverseImg();
});

const forwardImg = () => {
  index++;
  if (index >= imagesD.length) {
    index = 0;
    imgContainer.src = imagesD[index];
    textContainer.innerHTML = textDivs[index];
    imgContainerM.src = imagesM[index]
    textContainerM.innerHTML = textDivsM[index]
  } else {
    imgContainer.src = imagesD[index];
    textContainer.innerHTML = textDivs[index];
    imgContainerM.src = imagesM[index]
    textContainerM.innerHTML = textDivsM[index]
  }
};

const reverseImg = () => {
  index--;
  if (index < 0) {
    index = imagesD.length - 1;
    imgContainer.src = imagesD[index];
    textContainer.innerHTML = textDivs[index];
    imgContainerM.src = imagesM[index]
    textContainerM.innerHTML = textDivsM[index]
  } else {
    imgContainer.src = imagesD[index];
    textContainer.innerHTML = textDivs[index];
    imgContainerM.src = imagesM[index]
    textContainerM.innerHTML = textDivsM[index]
  }
};

hamMenu.addEventListener("click", function () {
  topBar.classList.toggle("active")
  blurBg.classList.toggle("active")
})

closeMenu.addEventListener("click", function () {
  topBar.classList.toggle("active")
  blurBg.classList.toggle("active")
})