require("dotenv").config();

const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
  EVENTS,
} = require("@bot-whatsapp/bot");

const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

/**
 * ChatGPT
 */
//const ChatGPTClass = require("./chatGPT/chatgpt.class");
//const chatGPT = new ChatGPTClass();

/**
 * Servicio de Whisper y ElevenLabs
 */
//const { handlerAI } = require("./utils");
const { textToVoice } = require("./services/elevenlabs_service");

const flowVentas = addKeyword(["pedir", "ordenar"])
  .addAnswer(
    ["Claro que te interesa?", "mejor te envio audio.."],
    null,
    async (_, { flowDynamic }) => {
      console.log("Convirtiendo texto a voz 📄...");
      const path = await textToVoice(
        "Si claro como te puedo ayudar si gustas enviame detalle de tecnicos que necesitas para tu servidor",
        "MALE"
      );
      console.log(`Audio generado correctamente en -> [PATH]:${path}`);
      await flowDynamic([{ body: "escucha", media: path }]);
    }
  );

  const flowVentasM = addKeyword(["mujer"])
  .addAnswer(
    ["Claro que te interesa?", "mejor te envio audio.."],
    null,
    async (_, { flowDynamic }) => {
      console.log("🙉 texto a voz....");
      const path = await textToVoice(
        "Si claro como te puedo ayudar si gustas enviame detalle de tecnicos que necesitas para tu servidor",
        "FEMALE"
      );
      console.log(`🙉 Fin texto a voz....[PATH]:${path}`);
      await flowDynamic([{ body: "escucha", media: path }]);
    }
  );

const flowSoporte = addKeyword(["necesito ayuda"]).addAnswer(
  "Claro como te puedo ayudar?"
);


const flowDemo = addKeyword("demo").addAction((ctx, { gotoFlow }) => {
  gotoFlow(flowVentas);
});

/**
 * Flujos
 */
const PrimaryFlow = require("./flows/PrimaryFlow");
const TouristAgentFlow = require("./flows/PersonalTouristAgentFlow");
const flowVoiceNote = require("./flows/VoiceNoteflow");
const ByeFlow = require("./flows/ByeFlow");

/**
 * Función Principal
 */
const main = async () => {
  const adapterDB = new MockAdapter();

  const adapterFlow = createFlow([
    flowVoiceNote,
    flowVentas,
    flowSoporte,
    flowDemo,
    flowVentasM,
    TouristAgentFlow,
    PrimaryFlow,
    ByeFlow
  ]);

  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });
};

main();