const { addKeyword } = require("@bot-whatsapp/bot");
const { textToVoice } = require("../services/elevenlabs_service");

const EventsFlow = addKeyword(["3", "Eventos"])
  .addAnswer(
    ["Claro, ", "te envío un audio..."],
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
  );

  module.exports = EventsFlow;