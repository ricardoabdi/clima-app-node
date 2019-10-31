const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=ed2a22662c9a8fbbfb9cc0bf12f4f3a9&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}