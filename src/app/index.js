import './styles/main.scss';
import './assets/hands.jpg';
import './assets/musical_notes.jpg';
import './assets/sitting_bench.jpg';
import './assets/menu.svg';
import './assets/cancel.svg';
import './assets/wedding.svg';
import './assets/laughing.jpg';
import './assets/doug.jpg';
import './assets/britt.jpg';
import './assets/tucson_couch.jpg';
import './assets/river.jpg';
import './assets/dogs.png';
import './assets/bbb.png';
import './assets/pb.png';
import initializeMap from './initMap';

window.initMap = function() {
    let mapEl = document.getElementById('map');
    if(mapEl){
        initializeMap(mapEl);
    }
};

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


