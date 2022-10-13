import { requestData } from "../utils/api.js";

async function createCard(city) {
    const cityContainer = document.getElementById("cities-container");

    const data = await requestData(city);

    const cardView = `
        <div> 
            <p>${data.location.name}</p>
            <p>${data.current.temp_c}</p>
        </div>
    `;

    cityContainer.insertAdjacentHTML("beforeend", cardView);
}

export { createCard };