




let menuBtn = document.getElementById('menuBtn')
let menuList = document.getElementById('menuList')
let discover = document.getElementById('discover')
let priceCard = document.getElementsByClassName('priceCard')
let stansGap = document.getElementById('stansGap')
let cardDetails = document.getElementById('cardDetails')
let buttonHoverBg = document.getElementById('buttonHoverBg')
let allImages = document.querySelectorAll('img')
let movingTxt = document.getElementsByClassName('movingTxt')

let menuOpened = false


function buttonanimate(e) {
    discover.addEventListener('mouseover', function(){
        e.style.width = '97%'
    })
    discover.addEventListener('mouseleave', function(){
        e.style.width = '3%'
    })
}

function showDetails(e) {
    const myStansGap = e.querySelector('#stansGap');
    const myCardDetails = e.querySelector('#cardDetails');

    myStansGap.style.height = '0%'
    myCardDetails.style.height = '100%'
}
function hideDetails(e) {
    const myStansGap = e.querySelector('#stansGap');
    const myCardDetails = e.querySelector('#cardDetails');

    myStansGap.style.height = '100%'
    myCardDetails.style.height = '0%'
}

buttonanimate(buttonHoverBg)

menuBtn.addEventListener('click', () => {
    if (menuOpened) {
        menuList.style.width = "0%"
        menuOpened = false
    }
    else {
        menuList.style.width = "5%"
        menuOpened = true
    }
})

// Select the character element
const character = document.querySelector('#zikoavatar');
const typotext = document.querySelector('#zaaxpara');

// Track mouse movement with GSAP
document.addEventListener('mousemove', (e) => {
    // Get the mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Use GSAP to animate the character's position
    gsap.to(character, {
        x: mouseX * -0.007, // Adjust this value as needed
        y: mouseY * -0.007, // Adjust this value as needed
        duration: 0.5, // Animation duration
        ease: 'power2.out' // Easing function for smooth animation
    });
    gsap.to(typotext, {
        x: mouseX * 0.003, // Adjust this value as needed
        y: mouseY * 0.003, // Adjust this value as needed
        duration: 0.5, // Animation duration
        ease: 'power2.out' // Easing function for smooth animation
    });

});



class App {
    constructor() {
      this._init();
      this._render = this._render.bind(this); // Ensure `this` context is correct for _render
      this._render();
    }
  
    _init() {
      this._createLenis();
    }
  
    _createLenis() {
      this._lenis = new Lenis({
        lerp: 0.1
      });
    }
  
    _render(time) {
      this._lenis.raf(time);
      requestAnimationFrame(this._render);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new App();
  });
  



  gsap.registerPlugin(ScrollTrigger);

  
  gsap.to('.movingTxt1', {
      scrollTrigger: {
          trigger: '.movingTxt1', 
          start: "top right", 
          end: "bottom top", 
          scrub: 1
      },
      y: 100
  });

  gsap.to('.movingTxt2', {
      scrollTrigger: {
          trigger: '.movingTxt2', 
          start: "top right", 
          end: "bottom top", 
          scrub: 1
      },
      y: 100
  });