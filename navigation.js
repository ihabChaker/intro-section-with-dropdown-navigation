const hamburgerBtn = document.getElementById('hamburger-menu-button')
hamburgerBtn.addEventListener('click', function () {
    const expanded = hamburgerBtn.getAttribute('aria-expanded')
    if (expanded == 'true') {
        hamburgerBtn.setAttribute('aria-expanded', 'false')
        hamburgerBtn.classList.remove('active')
    } else {
        hamburgerBtn.setAttribute('aria-expanded', 'true')
        hamburgerBtn.classList.add('active')
    }
})