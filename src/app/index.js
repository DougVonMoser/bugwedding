import './styles/main.scss';
import './assets/save_the_date.jpg';

document.addEventListener("DOMContentLoaded", function(event) {

    // mobile toolbar toggle
    let button = document.querySelector('.toolbar-toggle');
    let ex = document.querySelector('.ex');
    let showenElement = document.querySelector('.tool-wrapper');

    ex.addEventListener('click', function(e){
        showenElement.style.display = 'none';
    });

    button.addEventListener('click', function(e){
        showenElement.style.display = 'block';
    });
    // end mobile toolbar toggle


});
