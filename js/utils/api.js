const requestData = async (city) => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=current&key=SMSLCV9DMP7FSRJX66WBSN4BU&contentType=json`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

export { requestData }