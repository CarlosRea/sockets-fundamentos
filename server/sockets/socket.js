const { io } = require('../server')

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'bienvenido a esta app'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');

    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     })
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!'
        //     })
        // }

    })
})