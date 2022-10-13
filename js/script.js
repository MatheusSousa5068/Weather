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

const refreshIcon = document.getElementById("refresh");
refreshIcon.addEventListener("click", async () => {
    getWeather()
    refreshIcon.style.transform = 'translateY(0.15rem) rotate(180deg)'
    await new Promise(r => setTimeout(r, 100));
    refreshIcon.style.transform = 'translateY(0)'
});

