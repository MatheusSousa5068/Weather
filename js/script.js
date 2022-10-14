import { cities } from "./utils/cities.js";

import { createCard } from "./views/cards.js";
import { getWeather, updateData } from "./views/mainCard.js";
import { openModal, closeModal } from "./views/modal.js";

const searchBtn = document.getElementById("search-btn");

const openModalButton = document.querySelector('#open-info-modal');
const closeModalButton = document.querySelector('#close-info-modal')

const refreshIcon = document.getElementById("refresh");

async function loadCards() {
    cities.map(createCard);
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


