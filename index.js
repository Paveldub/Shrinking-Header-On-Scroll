let nav = document.querySelector('.main-nav');
let position = 0;

window.addEventListener('scroll', () => {
    // if (window.pageYOffset > 100) {
    //     nav.classList += ' small';
    // } else {
    //     nav.classList = 'main-nav';
    // }

    if (position < window.pageYOffset) {
        position = window.pageYOffset;
        nav.classList += ' up'
    } else {
        nav.classList = 'main-nav small';
        position = window.pageYOffset;
    }
})