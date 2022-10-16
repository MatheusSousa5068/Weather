import { requestData } from "../utils/api.js";

async function createCard(city, index) {
    const cityContainer = document.getElementById("cities-container");

    const data = await requestData(city);

    const location = data.resolvedAddress.split(',')
    
    const cardView = `
        <div class="favcity-card">
            <button type="button" id="close-btn${index}">&#xf00d;</button>
            <span>
                <p>${location[0]}</p> 
                <p>${data.days[0].temp.toFixed()}</p>
            </span>
        </div>
    `;

    // const cardView = `<div class="favcity-card">
    //          <button type="button" id="add-btn${index}">&#xf067;</button>
    //      </div>`;

    

    cityContainer.insertAdjacentHTML("beforeend", cardView);
    const closeBtn1 = document.getElementById("close-btn0");
    console.log(closeBtn1)
}

function deleteCard(index){
    let cityCard = document.querySelector("#cities-container div");
    [...cityCard][index].innerHTML = `<button type="button" id="add-btn">&#xf067;</button>`;
    
}

export { createCard, deleteCard};