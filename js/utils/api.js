const requestData = async (city) => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=current&key=7BYA5PVEB78U8CP453KSNKUVJ&contentType=json`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

export { requestData }