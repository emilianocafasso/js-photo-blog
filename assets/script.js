const container = document.getElementById('cards-container')

// creo funzione per generare le 6 card 
function displayCards(cards) {
    container.innerHTML = '' // svuoto il container


    for(let i=0; i<6; i++) {
        
        fetch('https://lanciweb.github.io/demo/api/pictures/')
        .then(response => response.json())
        .then(data => {
            const card = data[i]
            
            // console.log("card = " + card, card.title, card.date);
            
            // creo un nuovo col per ogni card e lo aggiungo al container
            const col = document.createElement('div')
            col.className = 'col-4'
            
            col.innerHTML = `
            <div class="polaroid-card">
            <img src="./assets/img/pin.svg" alt="" class="pin">
            <img src="${card.url}" alt="" class="card-img-top mt-3">
            <p class="date mt-2">${card.date}</p>
            <h5 class="card-title pb-2">${card.title}</h5>
            </div>
            `;
        container.appendChild(col)
        })
    }
}
displayCards();