const formSearch = document.querySelector('.formSearch')
const containerSearch = document.querySelector('.resultSearch')

formSearch.onsubmit = e => {
    e.preventDefault();
    if (formSearch.querySelector('input').value.length > 0) {
        searchData(formSearch.querySelector('input').value).then(result => {
            while (containerSearch.firstElementChild)
                containerSearch.firstElementChild.remove()

            result.forEach(e => {
                // console.log(e)
                const newLink = document.createElement('a')
                const newImg = document.createElement('img')
                newLink.href=`/display.html?${encodeURIComponent(e.Name)}`
                newImg.src = e.Image
                newLink.classList.add('box2')
                newLink.append(newImg)
                containerSearch.append(newLink)
            })
        })

    }

}

async function searchData(searchValue) {
    const getData = await fetch(`${api}search=` + encodeURIComponent(searchValue))
    const dataJson = await getData.json()
    return dataJson
}
btnSearch.onclick = e => {
    e.preventDefault()

    if (!btnSearch.classList.value.includes('active')) {
        while (document.querySelector('.navPhone a.active'))
            document.querySelector('.navPhone a.active').classList.remove('active')
        btnSearch.classList.add('active')
        document.body.style.overflow = 'hidden'
        window.scrollTo(0, 0)
        formSearch.classList.add('active')
        changeIcon()
    } else {
        while (document.querySelector('.navPhone a.active'))
            document.querySelector('.navPhone a.active').classList.remove('active')
        btnSearch.classList.remove('active')
        document.body.style.overflow = 'auto'
        formSearch.classList.remove('active')
        if (location.pathname.includes('index.html') || location.pathname == ('/')) {
            btnHome.classList.add('active')
            changeIcon()
        }
    }
}

btnHome.onclick = e => {
    location.href = 'index.html'
}

function changeIcon() {
    let allElemntNav = document.querySelectorAll('.navPhone a'),
        elementNav = document.querySelector('.navPhone a.active').firstElementChild
    allElemntNav.forEach(e => {
        // console.log(e)
        e.firstElementChild.setAttribute('name', e.firstElementChild.getAttribute('name').replace('sharp', 'outline'))
    })

    elementNav.setAttribute('name', elementNav.getAttribute('name').replace('outline', 'sharp'))
}