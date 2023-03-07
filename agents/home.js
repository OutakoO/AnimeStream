const container = document.querySelector('.container') // call container to add items inside

const randomData = [
    { 'name': 'naruto', 'img': 'https://api.animeiat.co/storage/posters/UsOjk08Rzz8LGnms1617944628.jpg' },
    { 'name': 'naruto', 'img': 'https://api.animeiat.co/storage/posters/05gdg9DxYw1yhgqa1591229781.jpg' },
    { 'name': 'naruto', 'img': 'https://api.animeiat.co/storage/posters/461BYzHreFOTETKk1589942724.jpg' },
    { 'name': 'naruto', 'img': 'https://api.animeiat.co/storage/posters/1mBcEF1rNGqs09kh1664666208.jpg' },
    { 'name': 'naruto', 'img': 'https://api.animeiat.co/storage/posters/lo9zFgSMNfO6OXLf1674501261.jpg' },
    { 'name': 'naruto', 'img': 'https://api.animeiat.co/storage/posters/JyrW3Te9qSqWD6Mm1592687621.jpg' },
    { 'name': 'naruto', 'img': 'https://api.animeiat.co/storage/posters/BVvXiDMJ1dPETDea1674906853.jpg' },
    { 'name': 'naruto', 'img': 'https://api.animeiat.co/storage/posters/LDB2Xa4i9WohVWxu1674819990.jpg' },
    { 'name': 'naruto', 'img': 'https://api.animeiat.co/storage/posters/ILD7Ihz11jsMKA5b1674706093.jpg' }
];

randomData.forEach((e, i) => { // loop through the data and put items inside
    if (i < Math.ceil((window.screen.width - 400) / 150) + 1) { // add element depending on the screen
        const aLink = document.createElement('a')
        const newImg = document.createElement('img')
        newImg.src = e.img
        aLink.classList.add('box')
        aLink.appendChild(newImg)
        container.appendChild(aLink)
    }
})

// call all items
const boxex = document.querySelectorAll('.box');

window.onload = () => { boxex.length > 0 && randomActive() }

// get random number for random active pic
let random = Math.floor(Math.random() * randomData.length), timer

boxex.forEach((e, i) => { // e = element && i = index of element
    e.onmouseover = () => { //when someone hover picture, will grow up
        clearTimeout(timer)
        removeClass(e)
        random = i
    }
    e.onmouseleave = () => { // when mouse out pic will start animation auto
        randomActive()
    }
})

function randomActive() {
    random >= boxex.length && (random = 0)// when target is last one

    removeClass(boxex[random])
    timer = setTimeout(randomActive, 3000)
    random++
}

function removeClass(target) {
    while (document.querySelector('.box.active'))  // if more than one have classlist
        document.querySelector('.box.active').classList.remove('active')

    target.classList.add('active')
}