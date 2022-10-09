const hamBurger = document.querySelector('.hamBurger');
const navBar = document.querySelector('.navBar');
const rightSide = document.querySelector('.rightSide')
// const rightSide
hamBurger.addEventListener('click', () => {
    hamBurger.classList.toggle('active');
    navBar.classList.toggle('widhtNoneToggle');
    rightSide.classList.toggle('displayNoneToggle')
})