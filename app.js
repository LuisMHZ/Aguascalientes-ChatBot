require("dotenv").config();

const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
  EVENTS,
} = require("@bot-whatsapp/bot");

const { init } = require("bot-ws-plugin-openai");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

const { handlerAI } = require("./utils");
const { textToVoice } = require("./services/elevenlabs_service");

const employeesAddonConfig = {
  model: "gpt-3.5-turbo",
  temperature: 0,
  apiKey: process.env.OPENAI_API_KEY,
};
const employeesAddon = init(employeesAddonConfig);

const flowVentas = addKeyword(["pedir", "ordenar"])
  .addAnswer(
    ["Claro que te interesa?", "mejor te envio audio.."],
    null,
    async (_, { flowDynamic }) => {
      console.log("🙉 texto a voz....");
      const path = await textToVoice(
        "Si claro como te puedo ayudar si gustas enviame detalle de tecnicos que necesitas para tu servidor",
        "MALE"
      );
      console.log(`🙉 Fin texto a voz....[PATH]:${path}`);
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

const flowVoiceNote = addKeyword(EVENTS.VOICE_NOTE).addAction(
  async (ctx, ctxFn) => {
    await ctxFn.flowDynamic("dame un momento para escucharte...🙉");
    console.log("🤖 voz a texto....");
    const text = await handlerAI(ctx);
    console.log(`🤖 Fin voz a texto....[TEXT]: ${text}`);

    const empleado = await employeesAddon.determine(text);

    employeesAddon.gotoFlow(empleado, ctxFn);

  }
);

const flowDemo = addKeyword("demo").addAction((ctx, { gotoFlow }) => {
  gotoFlow(flowVentas);
});

/**
 * Flujos
 */
const TouristAgentFlow = require("./flows/TouristAgentFlow");
const WeatherFlow = require("./flows/WeatherFlow");

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
    WeatherFlow
  ]);

  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });
};

main();