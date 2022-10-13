import { requestData } from "../utils/api.js";
import { error } from "../utils/error.js";

const getWeather = async () => {
    const city = document.querySelector("#search").value || "Joao Pessoa";

    const data = await requestData(city);

    if (data.current) {
        writeData(data);
    } else {
        error(city);
    }
};


const writeData = (data) => {
    const last_uptd = document.querySelector("#last-updated");
    const temp = document.querySelector("#temperature");
    const newCity = document.querySelector("#city");
    const local = document.querySelector("#local");
    const cloud = document.querySelector("#cloud");
    const wind = document.querySelector("#wind");
    const humidity = document.querySelector("#humidity");

    console.log(data);

    last_uptd.innerText = data.current.last_updated

    temp.innerText = data.current.temp_c.toFixed() + "ºC";
    newCity.innerText = data.location.name.toUpperCase();
    if (newCity.innerText.length > 15 && newCity.innerText.length < 20) {
        newCity.style.fontSize = "3.5rem";
    } else if (newCity.innerText.length >= 20) {
        newCity.style.fontSize = "2.75rem";
    } else {
        newCity.style.fontSize = "4rem";
    }

    if (data.location.region !== "") {
        local.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location.region}, ${data.location.country}`;
    } else {
        local.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location.country}`;
    }

    cloud.innerHTML = `<i class="fa-solid fa-cloud"></i> ${data.current.cloud}%`;
    wind.innerHTML = `<i class="fa-solid fa-wind"></i> ${data.current.wind_mph}mph`;
    humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> ${data.current.humidity}%`;
};

export { getWeather };
