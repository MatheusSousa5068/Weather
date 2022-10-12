import { cities } from "./utils/cities.js";

import { createCard } from "./views/cards.js";
import { getWeather } from "./views/mainCard.js";

const searchBtn = document.getElementById("search-btn");

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

// Function calls
loadCards();
getWeather();
