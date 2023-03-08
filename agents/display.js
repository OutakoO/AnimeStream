if (location.search.length < 1)
    location.href = 'index.html'


const api = 'https://api.iwannawatch.cf/garson.php?'
const nameAnime = decodeURIComponent(location.search.substring(1)).split('/')
const mainInfo = document.querySelector('.info')

let ID, EP
changeData()
getEpisodes()

function getVideo() {
    let epis = document.querySelector('.episodes .epi')
    if (nameAnime.length == 1) {
        ID = epis.getAttribute('data-ID')
        EP = epis.getAttribute('data-episode')
        location.search += `/${EP}-${ID}`
    } else {
        let dataVideo = nameAnime[1].split('-')
        EP = dataVideo[0]
        ID = dataVideo[1]
        document.querySelectorAll('.episodes .epi').forEach(e => {
            if (e.getAttribute('data-episode') == EP) {
                // console.log(e)
                e.scrollIntoView()
                document.querySelector('video').scrollIntoView()
                return e.style.background = '#FF0066'
            }
        })
    }
    fetchData('episode=' + ID).
        then(result => {
            // console.log(result)
            document.querySelector('video').src = result[0].Link
        })
}

function getEpisodes() {
    fetchData('Name=' + encodeURIComponent(nameAnime[0]) + '&status=list').
        then(result => {
            if (result.length > 0) {
                result.forEach(element => {
                    const newTitle = document.createElement('a')
                    newTitle.href = `/display.html?${nameAnime[0]}/${element.Episode}-${element.ID}`
                    newTitle.classList.add('epi')
                    newTitle.textContent = `EP ${element.Episode}`
                    newTitle.setAttribute('data-episode', element.Episode)
                    newTitle.setAttribute('data-ID', element.ID)
                    document.querySelector('.episodes').appendChild(newTitle)
                });
                getVideo()
            }
        })
}

function changeData() {
    fetchData('Name=' + encodeURIComponent(nameAnime[0])).
        then(result => {
            if (result.length > 0) {
                const newTitle = document.createElement('h1')
                const newDesc = document.createElement('p')
                const newRea = document.createElement('p')
                newTitle.textContent = result[0].Name
                newDesc.textContent = result[0].Description
                newRea.textContent = result[0].Releases
                mainInfo.appendChild(newTitle)
                mainInfo.appendChild(newDesc)
                mainInfo.appendChild(newRea)
                mainInfo.parentElement.querySelector('img').src = result[0].Image
            }
            document.title = nameAnime[0]
        })
}

async function fetchData(method) {
    const getData = await fetch(`${api}${method}`)
    const dataJson = await getData.json()
    return dataJson
}
