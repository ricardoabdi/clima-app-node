const argv = require('./config/yargs.js').argv;
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
//console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);


// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);



const getInfo = async(direccion) => {

    try {
        const respLocation = await lugar.getLugarLatLng(argv.direccion);

        const respClima = await clima.getClima(respLocation.lat, respLocation.lng);
        return `El clima de ${respLocation.direccion} es de ${respClima}.`;

    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);