
const fileSystem = require('fs');
const colors = require('colors')
//Opcion 1 mia 
const crearArchivo = (num = 5, l = false, hasta = 10) => {
    return new Promise((resolve, reject) => {
        let salida = "";
        let consola="";
        for (let i = 1; i <= hasta; i++) {
            salida += `${num} x ${i} = ${num * i}\n`;
            consola += `${num} ${'x'.yellow} ${i} = ${num * i}\n`
        }
        (l)?console.log(consola):console.log("")
        const nombrearch = `tabla-${num}.txt`;
        fileSystem.writeFile(`./salida/${nombrearch}`, salida, (err) => {
            (!err)
                ? resolve(`${nombrearch}`)
                : reject(err)
        })
    })
}
//Opcion2 
// const crearArchivo2 = async (num = 5) => {
//     try {
//         let salida = "";
//         for (let i = 1; i < 11; i++) {
//             salida += `${num} x ${i} = ${num * i}\n`
//         }
//         const nombrearch = `tabla-${num}.txt`;
//         fileSystem.writeFileSync(nombrearch, salida)
//         return nombrearch;
//     } catch (error) {
//         throw err;
//     }
// }

module.exports = {
    crearArchivo
}