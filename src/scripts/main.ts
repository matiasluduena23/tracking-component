const hamburger = document.querySelector('.hamburger')
const links = document.querySelectorAll('.item-link')

//open and close mobile menu
hamburger?.addEventListener('click' , () => {
    const isExpanded = JSON.parse(hamburger.getAttribute('aria-expanded')!)
    hamburger.setAttribute('aria-expanded', new Boolean(!isExpanded).toString())
})

//close mobile menu on resize screen
window.addEventListener('resize', () => {
    innerWidth > 600 && hamburger?.setAttribute('aria-expanded', 'false')
})

//close mobile menu on click in links 
links.forEach(link => {
    link.addEventListener('click', () => hamburger?.setAttribute('aria-expanded', 'false'))
})