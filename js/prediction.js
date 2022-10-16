const hamBurger = document.querySelector('.hamBurger');
const navBar = document.querySelector('.navBar');
const predictionRightSide = document.querySelector('.predictionRightSide');
// const rightSide
hamBurger.addEventListener('click', () => {
    hamBurger.classList.toggle('active');
    navBar.classList.toggle('widhtNoneToggle');
    predictionRightSide.classList.toggle('displayNoneToggle')
})