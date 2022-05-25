const { crearArchivo } = require('./helpers/multiplicar')
const argv  = require('./config/yargs')

 //limpiar la consola
console.clear();

//Manual files
// const[, , arg3 = "num=3"]=process.argv;
// const [, num =3] = arg3.split("=")
// console.log( num );
crearArchivo( argv.num, argv.l, argv.h )
    .then(nombreArchivo =>  console.log("archivo creado", nombreArchivo))
    .catch(err => console.log(err))