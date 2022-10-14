import { requestData } from "../utils/api.js";

async function createCard(city) {
    const cityContainer = document.getElementById("cities-container");

    const data = await requestData(city);

    const location = data.resolvedAddress.split(',')

    const cardView = `
        <div> 
            ${location[0]}
            ${data.days[0].temp.toFixed()}
        </div>
    `;

    cityContainer.insertAdjacentHTML("beforeend", cardView);
}

export { createCard };