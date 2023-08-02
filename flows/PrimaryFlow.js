const { addKeyword } = require("@bot-whatsapp/bot");
const TransportFlow = require("./TransportFlow");
const EventsFlow = require("./EventsFlow")
const AddInfoFlow = require("./SimpleInfoFlow");
const MoreInfoFlow = require("./MoreInfoFlow");

const flowPrincipal = addKeyword(['hola', 'buenas', 'ola', 'buenos días', 'buenas tardes', 'buenas noches', 'menú', 'menu', 'MENU'])
    .addAnswer('¡Hola! Soy Aguascalientes Chatbot, un experto en el turismo de la ciudad.')
    .addAnswer(
        [
            '¿En que te puedo ayudar el día de hoy?',
            '\n1️⃣ Información Turística ℹ️',
            '2️⃣ Información del transporte público de la ciudad 🚌',
            '3️⃣ Información de eventos y festivales 🎉',
            '4️⃣ Gastronomía del destino 👨🏼‍🍳',
            '5️⃣ Información Práctica 📄',
            '6️⃣ Conocer Más ➕',
            '\nEscribe el número de la opción sobre la cuál deseas conocer más información.'
        ]
    )
    .addAnswer(
        ['Adicionalmente, si deseas más información escribe "AGENTE" para contactarte con una persona especializada y destinada a resolver tus dudas 👌'],
        null,
        null,
        [AddInfoFlow, TransportFlow, EventsFlow, MoreInfoFlow]
    )

    module.exports = flowPrincipal;