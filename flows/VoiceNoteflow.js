const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const { handlerAI } = require("../utils");

const flowVoiceNote = addKeyword(EVENTS.VOICE_NOTE).addAction(
    async (ctx, ctxFn) => {
      await ctxFn.flowDynamic("Dame un momento para escucharte🧏🏼...");
      console.log("🤖 Transcripción de voz a texto...");
      const text = await handlerAI(ctx);
      console.log(`🤖 Fin de la transcripción, el usuario dijo -> [TEXT]: ${text}`);
  
      console.log(ctxFn);
      gotoFlow(empleado, ctxFn);
  
    }
  );

  module.exports = flowVoiceNote;