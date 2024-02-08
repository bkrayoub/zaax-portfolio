let menuBtn = document.getElementById('menuBtn')
let menuList = document.getElementById('menuList')
let allImages = document.querySelectorAll('img')

let menuOpened = false

menuBtn.addEventListener('click', () => {
    if (menuOpened) {

        menuOpened = false
    }
})