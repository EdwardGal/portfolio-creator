const burger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')

burger.addEventListener('click', () => {
   headerMenu.classList.toggle('_active')
})

let headerLinks = document.querySelectorAll('[goto-block]')

headerLinks.forEach(element => {

   element.addEventListener('click', (e) => {
      e.preventDefault()
      scrollToBlock(element)
   })

});


function scrollToBlock(item) {
   let startPoint = item.getAttribute('href')
   let offset = item.getAttribute('goto-block-offset')
   let endPoint = document.querySelector(`${startPoint}`)
   let endPointPosition = endPoint.getBoundingClientRect().top + +offset
   window.scrollTo({
      top: endPointPosition,
      behavior: "smooth",
   });
   headerMenu.classList.remove('_active')
}