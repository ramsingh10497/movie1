
async function getNow() {
    let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e8b0a2f0`)
    var data = await res.json()
     collection(data)
     
    
}


function collection(data) {
    let inp = document.getElementById('name').value;
    if (data.Title == inp) {
        let mainDiv = document.getElementById('cont')
        
        while (mainDiv.hasChildNodes()) {  
        mainDiv.removeChild(mainDiv.firstChild);
        }
        let img = document.createElement('img')
        img.src = data.Poster;
        let actors = document.createElement('p')
        actors.innerHTML = `Actors: ${data.Actors}`

        let awards = document.createElement('p')
        awards.innerHTML = `Awards: ${data.Awards}`

        let Country = document.createElement('p')
        Country.innerHTML = `Country: ${data.Country}`

        let Language = document.createElement('p')
        Language.innerHTML = `Language: ${data.Language}`

        let Released = document.createElement('p')
        Released.innerHTML = `Released: ${data.Released}`

        let imdbRating = document.createElement('p')
        imdbRating.innerHTML = `imdbRating: ${data.imdbRating}`

        mainDiv.append(img,actors,awards,Country,Language,Released, imdbRating)

    }
    else {
        
        let mainDiv = document.getElementById('cont')
        
        while (mainDiv.hasChildNodes()) {  
        mainDiv.removeChild(mainDiv.firstChild);
        }
        
        let h2 = document.createElement('h2')
        h2.innerHTML = `The Movie is not Available here`
        mainDiv.append(h2)

    }
}

