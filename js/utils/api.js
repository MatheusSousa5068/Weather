const requestData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=ee51adc00b584f8fb65201705220310&q=${city}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

export { requestData };
