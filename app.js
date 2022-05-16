document.addEventListener("keydown", (e) => {

    const audio = document.querySelector(`audio[data-keyCode="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-keyCode="${e.keyCode}"]`)
    if(!audio) return;

    key.classList.add("pressed");
    audio.play();
    audio.currentTime = 0;

    key.addEventListener('transitionend', () =>{
        key.classList.remove("pressed");
    });

})