
// HEADER EFFECTS
// We grab our header and our header-desktop and insert the contents of header into the desktop none
const header = document.querySelector('.header')
const desktopHeader = document.querySelector('.header-desktop')

desktopHeader.innerHTML = header.innerHTML

// When the header enters the viewport hide header-desktop
// When the header leaves, show header-desktop
inView('.header')
    .on('enter', el => desktopHeader.classList.remove('visible'))
    .on('exit', el => desktopHeader.classList.add('visible'))

// TILT EFFECT
VanillaTilt.init(document.querySelectorAll('.image'), {
    max: 50,
    speed: 4000
})

// IMAGES FADE EFFECT
// Grab element with class of fade and make them fade in
inView('.fade')
    .on('enter', img => img.classList.add('visible'))
//    .on('exit', img => img.classList.remove('visible'))

// REGISTER EFFECT
// When we click the register button run a function
const registerButton = document.querySelector('.register-button')
registerButton.addEventListener('click', event => {
    // Stops any default actions from happening
    event.preventDefault()

    // Grab the front element and add class of slide-up
    const frontEl = document.querySelector('.front')
    frontEl.classList.add('slide-up')
})
