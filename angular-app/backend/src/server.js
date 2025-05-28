const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (ws) => {
    console.log('Nuevo cliente conectado');

    // Enviar mensaje de bienvenida
    ws.send('Conectado al WebSocket');

    // Enviar mensajes cada 5 segundos 
    setInterval(() => {
        ws.send(`Mensaje desde WebSocket: ${new Date().toLocaleTimeString()}`);
    }, 5000);

    // Manejar la desconexion del cliente
    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

console.log('WebSocket corriendo en ws://localhost:3000');