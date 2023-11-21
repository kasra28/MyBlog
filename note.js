function LightTheme(){
    document.querySelector('.target').classList.add('body-light');
    document.querySelector('.header').classList.add('header-light');
    document.querySelectorAll('.header-links').forEach(headerLink => {
        headerLink.classList.add('header-links-light');
    });
    document.querySelector('.button').classList.add('button-light');
    document.querySelectorAll('.headerPar').forEach(headerPar => {
        headerPar.classList.add('header-par-light')
    });
    document.querySelector('.main').classList.add('main-light')
    document.querySelector('.footer').classList.add('footer-light')
    document.querySelector('.mail').classList.add('mail-tar')
}