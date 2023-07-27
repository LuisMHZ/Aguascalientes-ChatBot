const { addKeyword } = require("@bot-whatsapp/bot");

const flowSalida = addKeyword(['adiós', 'adios', 'gracias'])
    .addAnswer('¡Fue un placer poder ayudarte! 🫡')
    .addAnswer(
        [
            'Queremos saber como fue tu experiencia con la interacción del chatbot.',
            '',
            'Si la información brindada fue relevante y quieres ayudarnos con tus comentarios para que el chatbot sea aún mejor para ti',
            '',
            'Ayudanos a contestar la encuesta disponible en el siguiente enlace:',
            '👉 https://forms.gle/Qf495xdicsR8urLQ7',
            '',
            '¡Tu opinión será de gran ayuda!',
        ],
        null,
        null,
        []
    )

    module.exports = flowSalida;