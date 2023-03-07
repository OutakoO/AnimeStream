// call all items
const boxex = document.querySelectorAll('.box');

// get random number for random active pic
let random = Math.floor(Math.random() * boxex.length), timer

boxex.forEach((e, i) => {
    e.onmouseover = () => {
        clearTimeout(timer)
        removeClass(e)
        random = i
    }
    e.onmouseleave = () => {
        randomActive()
    }
})

window.onload = () => {
    randomActive();
    console.log((window.screen.width - 400) / 150)
}


function randomActive() {
    if (random >= boxex.length) { // when target is last one
        random = 0
    }
    removeClass(boxex[random])
    timer = setTimeout(randomActive, 2000)
    random++
}

function removeClass(target) {
    while (document.querySelector('.box.active'))  // if more than one have classlist
        document.querySelector('.box.active').classList.remove('active')

    target.classList.add('active')
}