/* const api = axios.create({
    baseURL:
        "https://api.weatherapi.com/v1/current.json?key=ee51adc00b584f8fb65201705220310&q=",
});

async function getWeather() {
    const p = document.getElementById("clima");
    const cidade = document.getElementById("cidade").value

    await api
        .get(`/${cidade}`)
        .then((response) => {
            const a = `${response.data.current.temp_c}`;
            console.log(response.data)

            p.innerText = a;
        })
        .catch((err) => {
            console.log(err);
        });
} */
import { cities } from "./cities.js";

async function getWeather() {
    const city = document.querySelector('#search').value || 'London'

    const url = `https://api.weatherapi.com/v1/current.json?key=ee51adc00b584f8fb65201705220310&q=${city}`

    const response = await fetch(url)

    const data = await response.json()

    const temp = document.querySelector('#temperature')
    const newCity = document.querySelector('#city')

    console.log(data)

    temp.innerText = data.current.temp_c + 'ºC'
    newCity.innerText = (data.location.name).toUpperCase()
}











// Funções dos Cards
async function requestData(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=ee51adc00b584f8fb65201705220310&q=${city}`;
    const response = await fetch(url);

    const data = await response.json();

    const cityContainer = document.getElementById('cities-container')



    const cardView = `
        <div> 
            ${data.location.name}
            ${data.current.temp_c}
        </div>
    `


    cityContainer.insertAdjacentHTML('beforeend', cardView)
}

async function loadCards() {
    for (let city of cities) {
        requestData(city)
    }
}



loadCards();
