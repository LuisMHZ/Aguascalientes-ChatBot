const { addKeyword } = require("@bot-whatsapp/bot");
const BusFlow = require("../flows/BusFlow");

const flowPrincipal = addKeyword(['hola', 'buenas', 'ola', 'buenos días', 'buenas tardes', 'buenas noches'])
    .addAnswer('¡Hola! Soy Aguascalientes Chatbot, un experto en el turismo de la ciudad')
    .addAnswer(
        [
            '¿En que te puedo ayudar el día de hoy?',
            'Información Turística',
            '3. Información del transporte público de la ciudad',
            'Información de ventos y festivales',
            'Gastronomía del destino',
            'Información Práctica',
            'Conocer Más'
        ],
        null,
        null,
        [BusFlow]
    )

    module.exports = flowPrincipal;