import { cities } from "./utils/cities.js";

const searchBtn = document.getElementById("search-btn");


import { requestData } from "./utils/api.js";
import { createCard } from "./views/cards.js";
import { getWeather } from "./views/mainCard.js";

async function loadCards() {
    cities.map(createCard);
};


// Listeners
searchBtn.addEventListener("click", getWeather);

document.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
        document.querySelector("#search").innerHTML = ''
    } else if (event.key == "Enter") {
        getWeather();
    }
});




// Chamadas de funções
loadCards();
getWeather();
