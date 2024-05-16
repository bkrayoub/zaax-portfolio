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
        stansGap.style.height = '0%'
        cardDetails.style.height = '100%'
}
function hideDetails(e) {
        stansGap.style.height = '100%'
        cardDetails.style.height = '0%'
}

buttonanimate(buttonHoverBg)

menuBtn.addEventListener('click', () => {
    if (menuOpened) {
        menuList.style.width = "0%"
        menuOpened = false
    }
    else {
        menuList.style.width = "10%"
        menuOpened = true
    }
})