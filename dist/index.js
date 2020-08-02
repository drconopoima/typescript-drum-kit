"use strict";
function playSound(keyboardEvent) {
    let audioElement = document.querySelector(`audio[data-key="${keyboardEvent.code}"]`);
    if (audioElement === null)
        return;
    audioElement.currentTime = 0;
    audioElement.play();
    let keyElement = document.querySelector(`div[data-key="${keyboardEvent.code}"]`);
    keyElement.classList.add('playing');
    function removeTransition(transitionEvent) {
        if (transitionEvent.propertyName !== 'transform')
            return;
        this.classList.remove('playing');
    }
    let keysAll = [...document.querySelectorAll('.key')];
    keysAll.map((key) => key.addEventListener('transitionend', removeTransition, false));
}
window.addEventListener('keydown', playSound);
