const { addKeyword } = require("@bot-whatsapp/bot");
const BusFlow = require("../flows/BusFlow");

const flowPrincipal = addKeyword(['hola', 'buenas', 'ola', 'buenos días', 'buenas tardes', 'buenas noches'])
    .addAnswer('¡Hola! Soy Aguascalientes Chatbot, un experto en el turismo de la ciudad')
    .addAnswer(
        [
            '¿En que te puedo ayudar el día de hoy?',
            '1. Información Turística ℹ️',
            '2. Información del transporte público de la ciudad 🚌',
            '3. Información de ventos y festivales 🎉',
            '4. Gastronomía del destino 👨🏼‍🍳',
            '5. Información Práctica 📄',
            '6. Conocer Más ➕'
        ],
        null,
        null,
        []
    )
    .addAnswer(
        ['Si deseas más información, escribe "AGENTE" para contactarte con una persona encantada de resolver tus dudas 👌'],
        null,
        null,
        [BusFlow]
    )

    module.exports = flowPrincipal;