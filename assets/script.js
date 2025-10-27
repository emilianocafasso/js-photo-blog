const container = document.getElementById('cards-container')

// creo funzione per generare le 6 card 
function displayCards(cards) {
    container.innerHTML = '' // svuoto il container


    for(let i=0; i<6; i++) {
        fetch('https://lanciweb.github.io/demo/api/pictures/')
        .then(response => response.json())
        .then(data => {
            const card = data[i]
        })
        // creo un nuovo col per ogni card e lo aggiungo al container
        const col = document.createElement('div')
        col.className = 'col-4'

    }
}