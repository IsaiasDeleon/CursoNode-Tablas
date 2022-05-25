const argv = require ('yargs')
                .options({
                    'n':{
                        alias:'num',
                        type:'number',
                        demandOption: true,
                        describe:"Es el numero que va agenrar la tabla"
                    },
                    'l':{
                        alias:"listar",
                        type:'boolean',
                        default: false,
                        describe:"indica si se emprime en consola o no"
                    },
                    'h':{
                        alias:'hasta',
                        type:'number',
                        default:10,
                        describe:"el numero que se ingrese sera hasta donde se generera la tabla"
                    }
                })
                .check((argv, option)=>{
                    if( isNaN (argv.n) ||isNaN (argv.h) ){
                        throw "El n o h tienne que ser un numero"
                    }
                    return true;
                })
                .argv;
module.exports = argv;