import { cities } from "./utils/cities.js";

import { createCard} from "./views/cards.js";
import { getWeather, updateData } from "./views/mainCard.js";
import { openModal, closeModal } from "./views/modal.js";


const searchBtn = document.getElementById("search-btn");

const openModalButton = document.querySelector('#open-info-modal');
const closeModalButton = document.querySelector('#close-info-modal')

const refreshIcon = document.getElementById("refresh");

async function loadCards() {
    cities.map((city, index) => {
        createCard(city,index)
    });
    // for (var i = 0; i < 4; i++){
    //     createCard(cities[i],i)
        
    // }
}

// Listeners
searchBtn.addEventListener("click", getWeather);


document.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        getWeather();
    }
});

openModalButton.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    openModal(modal)
})

closeModalButton.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    closeModal(modal)
})

refreshIcon.addEventListener("click", async () => {
    updateData()
});

// Function calls
loadCards();
getWeather();





// const closeBtn0 = document.getElementById("close-btn0");
// console.log(closeBtn0)
// closeBtn0.addEventListener("click",deleteCard(0));


