
const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobileNav')

hamburger.addEventListener('click', () => {
    console.log('test');
    mobileNav.classList.toggle('mobile-nav--active')
})
