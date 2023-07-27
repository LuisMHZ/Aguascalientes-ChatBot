const { addKeyword } = require("@bot-whatsapp/bot");

const BusFlow = addKeyword(['3', 'Información de transporte', 'transporte'])
.addAnswer('La ciudad cuenta con diferentes rutas de camión, que son las siguientes:', {
media: `../Rutas.png`,
})

module.exports = BusFlow;