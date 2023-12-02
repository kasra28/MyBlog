function LightTheme(){
    document.querySelector('.target').classList.toggle('body-light');
    document.querySelector('.header').classList.toggle('header-light');
    document.querySelectorAll('.header-links').forEach(headerLink => {
        headerLink.classList.toggle('header-links-light');
    });
    document.querySelector('.button').classList.toggle('button-light');
    document.querySelectorAll('.headerPar').forEach(headerPar => {
        headerPar.classList.toggle('header-par-light')
    });
    document.querySelector('.main').classList.toggle('main-light')
    document.querySelector('.footer').classList.toggle('footer-light')
    document.querySelector('.mail').classList.toggle('mail-tar')
}
