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


async function getWeather() {
    const city = document.querySelector('#search').value

    const url = `https://api.weatherapi.com/v1/current.json?key=ee51adc00b584f8fb65201705220310&q=${city}`

    const response = await fetch(url)

    const data = await response.json()

    const temp = document.querySelector('#temperature')
    const newCity = document.querySelector('#city')

    console.log(data)

    temp.innerText = data.current.temp_c + 'º'
    newCity.innerText = (data.location.name).toUpperCase()
}