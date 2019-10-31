const axios = require('axios');

const getLugarLatLng = async(dir) => { //crea funcion
    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': '24162b5382msh831535def30fff8p1bad13jsn783d32e24aa9' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}