const { addKeyword } = require("@bot-whatsapp/bot");
const BusFlow = require("../flows/BusFlow");

const flowPrincipal = addKeyword(['hola', 'buenas', 'ola', 'buenos días', 'buenas tardes', 'buenas noches'])
    .addAnswer('¡Hola! Soy Aguascalientes Chatbot, un experto en el turismo de la ciudad.')
    .addAnswer(
        [
            '¿En que te puedo ayudar el día de hoy?',
            '1️⃣ Información Turística ℹ️',
            '2️⃣ Información del transporte público de la ciudad 🚌',
            '3️⃣ Información de ventos y festivales 🎉',
            '4️⃣ Gastronomía del destino 👨🏼‍🍳',
            '5️⃣ Información Práctica 📄',
            '6️⃣ Conocer Más ➕'
        ],
        null,
        null,
        []
    )
    .addAnswer(
        ['Recuerda que si deseas más información, escribe "AGENTE" para contactarte con una persona especializada y destinada a resolver tus dudas 👌'],
        null,
        null,
        [BusFlow]
    )

    module.exports = flowPrincipal;