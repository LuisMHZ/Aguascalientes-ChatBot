const { addKeyword } = require("@bot-whatsapp/bot");

const BusFlow = addKeyword(['3', 'Información de transporte', 'transporte'])
.addAnswer('La ciudad cuenta con diferentes rutas de camión, que son las mostradas en la imagen', {
media: 'https://raw.githubusercontent.com/LuisMHZ/Aguascalientes-ChatBot/main/Rutas.png',
})
.addAnswer(
    [
        '🚌 Para ver los recorridos que realiza cada camión, escribe RUTA seguido del número de ruta (por ejemplo: RUTA40N)',
        '\nRecuerda que el precio del transporte público tiene un costo de $11 pesos que se deben pagar de manera exacta una vez abordas el camión.',
    ])

module.exports = BusFlow;