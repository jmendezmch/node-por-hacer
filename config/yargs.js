let opt = {
    descripcion: {
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opt)
    .command('actualizar', 'Actualiza la tarea', opt)
    .command('listar', 'Lista todas las tareas', opt)
    .command('borrar', 'Borra la tarea que coincida con la descripcion', opt)
    .help()
    .argv;

module.exports = {
    argv
}