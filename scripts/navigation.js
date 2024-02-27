const hamburgerBtn = document.getElementById('hamburger-menu-button')
const navigation = document.getElementById('navigation')
const overlay = document.getElementById('overlay')
hamburgerBtn.addEventListener('click', function () {
    const expanded = hamburgerBtn.getAttribute('aria-expanded')
    if (expanded == 'true') {
        hamburgerBtn.setAttribute('aria-expanded', 'false')
        hamburgerBtn.classList.remove('active')
        navigation.classList.remove('active')
        overlay.classList.remove('active')
        document.body.style.overflowY = 'visible'
    } else {
        hamburgerBtn.setAttribute('aria-expanded', 'true')
        hamburgerBtn.classList.add('active')
        navigation.classList.add('active')
        overlay.classList.add('active')
        document.body.style.overflowY = 'hidden'
    }
})