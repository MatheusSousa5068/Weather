import { requestData } from "../utils/api.js";

var FOOD_ID_CONFIRMATION_REQUEST = undefined;

async function createCard(city, index) {
    const cityContainer = document.getElementById("cities-container");

    const data = await requestData(city);

    const location = data.resolvedAddress.split(',')
    
    // &#xf00d; (codigo do "x")
    const cardView = `
        <div class="favcity-card${index}">
            <span>
                <p>${location[0]}</p> 
                <p>${data.days[0].temp.toFixed()}ºC</p>
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
    cityCard.innerHTML = `<button type="button" id="add-btn${index}" onclick="handleConfirmationRequest(${index});">&#xf067;</button>`; 
}


function handleConfirmationRequest(id) {
    $('#add-fav-city').modal('toggle');
  
    FOOD_ID_CONFIRMATION_REQUEST = id;
  }





// const closeBtn = document.getElementById(`close-btn${index}`);
// console.log(closeBtn)
// closeBtn.addEventListener("click",() => {
//     deleteCard(index)
// });


window.handleConfirmationRequest = handleConfirmationRequest;

export { createCard, deleteCard};
