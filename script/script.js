let menuBtn = document.getElementById('menuBtn')
let menuList = document.getElementById('menuList')
let discover = document.getElementById('discover')
let priceCard = document.getElementsByClassName('priceCard')
let stansGap = document.getElementById('stansGap')
let cardDetails = document.getElementById('cardDetails')
let buttonHoverBg = document.getElementById('buttonHoverBg')
let allImages = document.querySelectorAll('img')

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
        x: mouseX * -0.004, // Adjust this value as needed
        y: mouseY * -0.004, // Adjust this value as needed
        duration: 0.5, // Animation duration
        ease: 'power2.out' // Easing function for smooth animation
    });
    gsap.to(typotext, {
        x: mouseX * -0.007, // Adjust this value as needed
        y: mouseY * -0.007, // Adjust this value as needed
        duration: 0.5, // Animation duration
        ease: 'power2.out' // Easing function for smooth animation
    });

});



class App {
    constructor() {
        this._inti();
        this._render();
    }    
    _inti() {
        this._createlenis()
    }
    _createlenis() {
        this._lenis = new lenis({
            lerp: 0.1
        })
    }
    _render(time) {
        this._lenis.raf(time)

        requestAnimationFrame(this._render.bind(this))
    }
}

new App();




////////////////////////////////////////////////////////////////////////////



let cols, rows;
let scl = 20;
let w, h;
let noiseGrid = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('noise');
  
  w = windowWidth;
  h = windowHeight;
  cols = w / scl;
  rows = h / scl;

  for (let y = 0; y < rows; y++) {
    noiseGrid[y] = [];
    for (let x = 0; x < cols; x++) {
      noiseGrid[y][x] = noise(x * 0.1, y * 0.1);
    }
  }
}

function draw() {
  clear();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let c = noiseGrid[y][x] * 255;
      fill(c);
      noStroke();
      rect(x * scl, y * scl, scl, scl);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
  cols = w / scl;
  rows = h / scl;
}
