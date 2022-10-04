const api = axios.create({
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
}