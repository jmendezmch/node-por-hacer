const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];
// console.log(argv);

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);
        // console.log('Crear tarea');
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('###############'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ' + tarea.completado);
            console.log('###################'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.d, argv.c);
        console.log('Actualiza la tarea? ' + actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.d);
        console.log('borro la tarea? ' + borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}