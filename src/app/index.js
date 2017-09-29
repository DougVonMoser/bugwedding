import './styles/main.scss';
import './assets/save_the_date.jpg';
import Rx from 'rxjs';

document.addEventListener("DOMContentLoaded", function(event) {

    // mobile toolbar toggle
    let button = document.querySelector('.toolbar-toggle');
    let ex = document.querySelector('.ex');
    let showenElement = document.querySelector('.tool-wrapper');
    Rx.Observable.fromEvent(ex, 'click')
        .subscribe(event => {
            showenElement.style.display = 'none';
        });

    Rx.Observable.fromEvent(button, 'click')
        .subscribe(event => {
            showenElement.style.display = 'block';
        });
    // end mobile toolbar toggle

});
