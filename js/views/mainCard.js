import { requestData } from "../utils/api.js";
import { error } from "../utils/error.js";

const getWeather = async () => {
    const city = document.querySelector("#search").value || location[0] || "joao pessoa";

    await requestData(city).then(result => {
        writeData(result)
    }).catch(err => {
        error(city)
    })
};

const updateData = async () => {
    const city = document.querySelector("#city").innerText;
    
    await requestData(city).then(result => {
        writeData(result)
    
    }).catch(err => {
        error(city)
    })
}

const writeData = (data) => {
    const last_uptd = document.querySelector("#last-update-datetime");
    const temp = document.querySelector("#temperature");
    const newCity = document.querySelector("#city");
    const local = document.querySelector("#local");
    const cloud = document.querySelector("#cloud");
    const wind = document.querySelector("#wind");
    const humidity = document.querySelector("#humidity");

    console.log(data);

    last_uptd.innerHTML = data.days[0].datetime + `&nbsp;&nbsp;`+ data.currentConditions.datetime

    const location = data.resolvedAddress.split(',')

    temp.innerText = data.days[0].temp.toFixed() + "ºC";
    newCity.innerText = location[0].toUpperCase();
    if (newCity.innerText.length > 10 && newCity.innerText.length < 15) {
        newCity.style.fontSize = "3.5rem";
    } else if (newCity.innerText.length >= 15) {
        newCity.style.fontSize = "2.75rem";
    } else {
        newCity.style.fontSize = "4rem";
    }

    if (location[2] != undefined) {
        local.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${location[1]}, ${location[2]}`;
    } else {
        local.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${location[1]}`;
    }

    cloud.innerHTML = `<i class="fa-solid fa-cloud"></i> ${data.days[0].cloudcover}%`;
    wind.innerHTML = `<i class="fa-solid fa-wind"></i> ${data.days[0].windspeed}km/h`;
    humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> ${data.days[0].humidity}%`;
};

export { getWeather, updateData };
