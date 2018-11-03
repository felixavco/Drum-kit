const keys = [...document.querySelectorAll('.key')];

//Events
window.addEventListener('keydown', playSound);
keys.map(key => key.addEventListener('transitionend', removeClass));


//Methods
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if(!audio) return; //Stop the function
  audio.currentTime = 0 //Reset audio to the start when is clicked again;
  audio.play();
  key.classList.add('playing');
}

function removeClass(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}




