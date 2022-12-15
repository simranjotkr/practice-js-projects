window.addEventListener('keydown', (e)=> {
    const audio = document.querySelector(`audio[data-key="${(e.key).toLowerCase()}"]`);
    const key = document.querySelector(`.key[data-key="${(e.key).toLowerCase()}"]`)
    if(!audio) return;
    audio.currentTime = 0; //to begin it again
    audio.play();
    key.classList.add('playing');
})

function returnState(e) {
    if(e.propertyName != 'transform') return;
    e.srcElement.classList.remove('playing'); 
}

const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('transitionend', (e)=> returnState(e)));

