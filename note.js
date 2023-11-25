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
function DarkTheme(){
    document.querySelector('.target').classList.remove('body-light');
    document.querySelector('.header').classList.remove('header-light');
    document.querySelectorAll('.header-links').forEach(headerLink => {
        headerLink.classList.remove('header-links-light');
    });
    document.querySelector('.button').classList.remove('button-light');
    document.querySelectorAll('.headerPar').forEach(headerPar => {
        headerPar.classList.remove('header-par-light')
    });
    document.querySelector('.main').classList.remove('main-light')
    document.querySelector('.footer').classList.remove('footer-light')
    document.querySelector('.mail').classList.remove('mail-tar')
}
