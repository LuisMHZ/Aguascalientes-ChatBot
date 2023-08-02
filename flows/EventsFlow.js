const { addKeyword } = require("@bot-whatsapp/bot");
const { textToVoice } = require("../services/elevenlabs_service");

const EventsFlow = addKeyword(["3", "Eventos"])
  .addAnswer(
    ["Claro, ", "Te envío un audio..."],
    null,
    async (_, { flowDynamic }) => {
      console.log("Convirtiendo texto a voz 📄...");
      const path = await textToVoice(
        "Para conocer información de los próximos eventos a celebrarse en la ciudad, visita los enlaces que te muestro a continuación",
        "MALE"
      );
      console.log(`Audio generado correctamente en -> [PATH]:${path}`);
      await flowDynamic([{ body: "escucha", media: path }]);
    }
  )
  .addAnswer(
    [
        '\n 🎎 https://eservicios2.aguascalientes.gob.mx/eventosportal',
        '\n 🥳 https://rb.gy/bee8t',
        '\n\n También en redes sociales se promocionan los próximos eventos a celebrarse en la ciudad:',
        '\n Facebook:',
        '\n https://www.facebook.com/InstitutoCulturaldeAguascalientes',
        '\n https://www.facebook.com/EventosyConciertosAgs',
        '\n Twitter: https://twitter.com/culturaags',
        '\n Instagram: https://www.instagram.com/institutoculturalags'
    ])

  module.exports = EventsFlow;