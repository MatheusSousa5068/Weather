import { requestData } from "../utils/api.js";

async function createCard(city, index) {
    const cityContainer = document.getElementById("cities-container");

    const data = await requestData(city);

    const location = data.resolvedAddress.split(',')
    
    const cardView = `
        <div class="favcity-card${index}">
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
    const closeBtn = document.getElementById(`close-btn${index}`);
    console.log(closeBtn)
    closeBtn.addEventListener("click",() => {
        deleteCard(index)
    });
    
}

async function deleteCard(index){
    const cityCard = document.querySelector(`.favcity-card${index}`);
    cityCard.innerHTML = `<button type="button" id="add-btn${index}">&#xf067;</button>`;
    
}

// const closeBtn = document.getElementById(`close-btn${index}`);
// console.log(closeBtn)
// closeBtn.addEventListener("click",() => {
//     deleteCard(index)
// });

export { createCard, deleteCard};