const formSearch = document.querySelector('.formSearch')
const containerSearch = document.querySelector('.resultSearch')
const containerSearch2 = document.querySelector('.resultSearch2')
const formSearchPC = document.querySelector('.container-search')
const api2 = 'https://api.iwannawatch.cf/garson.php?'


formSearch.onsubmit = e => {
    e.preventDefault();
    if (formSearch.querySelector('input').value.length > 0) {
        setSearch(formSearch.querySelector('input').value, containerSearch)
    }
}

location.pathname.includes('search.html') && location.search.length > 0 && setSearch(location.search.substring(1), containerSearch2)

formSearchPC.onsubmit = e => {
    e.preventDefault();
    if (formSearchPC.querySelector('input').value.length > 0) {
        if (!location.pathname.includes('search.html'))
            location.href = `/search.html?${formSearchPC.querySelector('input').value}`
        setSearch(formSearchPC.querySelector('input').value, containerSearch2)
    }
}

function setSearch(form, cont) {
    searchData(form).then(result => {
        while (cont.firstElementChild)
            cont.firstElementChild.remove()

        if (result.length == 0) {
            const newLink = document.createElement('h1')
            newLink.textContent = 'عذرا ، لم نتمكن من العثور على أي نتائج :)'
            newLink.classList.add('emptySearch')
            cont.append(newLink)
        }

        result.forEach(e => {
            // console.log(e)
            const newLink = document.createElement('a')
            const newImg = document.createElement('img')
            newLink.href = `/display.html?${encodeURIComponent(e.Name)}`
            newImg.src = e.Image
            newLink.classList.add('box2')
            newLink.append(newImg)
            cont.append(newLink)
        })
    })
}

async function searchData(searchValue) {
    const getData = await fetch(`${api2}search=` + searchValue)
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