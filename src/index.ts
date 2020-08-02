function playSound(this: Window, keyboardEvent: KeyboardEvent) {
  let audioElement = document.querySelector<HTMLAudioElement>(`audio[data-key="${keyboardEvent.code}"]`);
  if (audioElement === null) return;
  audioElement.currentTime = 0;
  audioElement.play();
  let keyElement = document.querySelector<HTMLDivElement>(`div[data-key="${keyboardEvent.code}"]`)!;
  keyElement.classList.add('playing');
  function removeTransition(this: HTMLDivElement, transitionEvent: TransitionEvent) {
    if (transitionEvent.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  let keysAll = [...document.querySelectorAll<HTMLDivElement>('.key')!];
  keysAll.map((key) => key.addEventListener('transitionend', removeTransition, false));
}

window.addEventListener('keydown', playSound);
