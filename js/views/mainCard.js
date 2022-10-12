import { requestData } from '../utils/api.js';

const getWeather = async () => {
    const city = document.querySelector("#search").value || "Joao Pessoa";

    const data = await requestData(city);

    const last_uptd = document.querySelector("#last-updated");
    const temp = document.querySelector("#temperature");
    const newCity = document.querySelector("#city");
    const local = document.querySelector("#local");
    const cloud = document.querySelector("#cloud");
    const wind = document.querySelector("#wind");
    const humidity = document.querySelector("#humidity");

    console.log(data);

    last_uptd.innerHTML = `${data.current.last_updated} &nbsp;<i class="fa-solid fa-arrows-rotate"></i>`;
    temp.innerText = data.current.temp_c + "ºC";
    newCity.innerText = data.location.name.toUpperCase();
    if (data.location.region !== '') {
        local.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location.region}, ${data.location.country}`
    } else {
        local.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location.country}`
    }
    
    cloud.innerHTML = `<i class="fa-solid fa-cloud"></i> ${data.current.cloud}%`;
    wind.innerHTML = `<i class="fa-solid fa-wind"></i> ${data.current.wind_mph}mph`;
    humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> ${data.current.humidity}%`;
};

export { getWeather };