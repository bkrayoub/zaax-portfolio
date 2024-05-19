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
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target id without '#'
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Can be 'start', 'center', 'end', or 'nearest'
            });
        }
    });
});