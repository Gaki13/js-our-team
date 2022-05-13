// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

/*-----------------
    MAIN
-----------------*/
// 1.Divido la card in tutte le info neccessarie
const cards = [
    {
        Name: "Wayne Barnett",
        role: "Founder & CEO",
        img: src="img/wayne-barnett-founder-ceo.jpg",
    },
    {
        Name: "Angela Caroll",
        role: "Chief Editor",
        img: src="img/angela-caroll-chief-editor.jpg",
    },
    {
        Name: "Angela Lopez",
        role: "Social Media Manager",
        img: src="img/angela-lopez-social-media-manager.jpg",
    },
];


// 2.Aggiungo gli oggetti dell'array nell'html
const teamContainer = document.querySelector(".team-container");

for(let i = 0; i < cards.length; i++){
    const card = `
        <div class="team-card">
            <div class="card-image">
            <img
                src=${cards[i].img}
                alt="Wayne Barnett"
            />
            </div>
            <div class="card-text">
            <h3>${cards[i].Name}</h3>
            <p>${cards[i].role}</p>
            </div>
        </div> 
    `;

  teamContainer.innerHTML += card;
};