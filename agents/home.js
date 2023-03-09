const container = document.querySelector('.container') // call container to add items inside
const api = 'https://api.iwannawatch.cf/garson.php?'

const minSize = window.screen.width > 1000 ? 150 : 80;
const sizePic = window.screen.width > 1000 ? 400 : 250;
let random, timer, boxex

async function randomData() {
    const getData = await fetch(`${api}random=data`);
    const dataJson = await getData.json();
    dataJson.forEach((e, i) => { // loop through the data and put items inside
        if (i < Math.ceil((window.screen.width - sizePic) / minSize) + 1) { // add element depending on the screen
            const aLink = document.createElement('a')
            const newImg = document.createElement('img')
            newImg.src = e.Image
            aLink.href = `/display.html?${encodeURIComponent(e.Name)}`
            aLink.classList.add('box')
            aLink.appendChild(newImg)
            container.appendChild(aLink)
        }
    })
    // get random number for random active pic
    random = Math.floor(Math.random() * dataJson.length)
    boxex = document.querySelectorAll('.box');
    boxex.length > 0 && randomActive()
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

}
randomData()



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

