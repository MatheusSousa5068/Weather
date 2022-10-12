import { requestData } from "../utils/api.js";

async function createCard(city) {
    const cityContainer = document.getElementById("cities-container");

    const data = await requestData(city);

    const cardView = `
        <div> 
            ${data.location.name}
            ${data.current.temp_c}
        </div>
    `;

    cityContainer.insertAdjacentHTML("beforeend", cardView);
}

export { createCard };
