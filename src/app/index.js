import './styles/main.scss';
import './assets/save_the_date.jpg';
import './assets/dancing.jpg';
import './assets/hands.jpg';
import './assets/musical_notes.jpg';
import './assets/sitting_bench.jpg';
import './assets/face_placeholder.jpg';
import './assets/menu.svg';
import './assets/cancel.svg';

document.addEventListener("DOMContentLoaded", function(event) {


    let menu = document.querySelector('svg.menu');
    let overlay = document.querySelector('div.overlay');
    let overlayX = document.querySelector('svg.cancel');

    menu.addEventListener('click', function(){
        overlay.classList.remove('hiding');
    });

    overlayX.addEventListener('click', function(){
        overlay.classList.add('hiding');
    });

});
