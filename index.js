var w = document.querySelectorAll('.drum');
var v = [];

// apply event to all the buttons
for (i = 0; i < w.length; i++) {
    // add click event listener to button
    w[i].addEventListener('click', function() {
        key = this.textContent;
        makeSound(key);
        buttonAnimation(key);
    })
}
// add keypresss event listener
document.addEventListener('keypress', (event) => {
        var keyboardKey = event.key;
        makeSound(keyboardKey);
        buttonAnimation(keyboardKey);

    })
    // function for sound
function makeSound(key) {

    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log("invalid key entered");

    }
}

function buttonAnimation(currentKey) {
    var activebtn = document.querySelector("." + currentKey);
    activebtn.classList.add('pressed');
    setTimeout(() => {
        activebtn.classList.remove('pressed');
    }, 100);

}