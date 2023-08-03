const { addKeyword } = require("@bot-whatsapp/bot");
const { readFileSync } = require("fs");
const { join } = require("path");
const delay = (ms) => new Promise((res => setTimeout(res, ms)))

/**
 * Recuperamos el prompt de asistente turístico
 */
const getPrompt = async () => {
  const pathPromp = join(process.cwd(), "prompts");
  const text = readFileSync(join(pathPromp, "turismo.txt"), "utf-8");
  return text;
};

/**
 * Exportamos
 * @param {*} chatgptClass
 * @returns
 */

module.exports = {
  GPTFlow: (chatgptClass) => {
    return addKeyword("1", { sensitive: true })
      .addAction(async (ctx, { flowDynamic, provider }) => {
        await flowDynamic("Preparando lo necesario para brindarte una experiencia turística única de Aguascalientes...");

        const jid = ctx.key.remoteJid
        const refProvider = await provider.getInstance()

        await refProvider.presenceSubscribe(jid)
        await delay(500)

        await refProvider.sendPresenceUpdate('composing', jid)

        const data = await getPrompt();
        await chatgptClass.handleMsgChatGPT(data);


        const textFromAI = await chatgptClass.handleMsgChatGPT(
          "Quiero información turística de Aguascalientes"
        );


        await flowDynamic(textFromAI.text);
      })
      .addAnswer(
        `Si tienes alguna duda o pregunta, escribela a continuación. De lo contrario, puedes escribir *MENU* en cualquier momento para regresar al menú principal`,
        { capture: true },
        async (ctx, { fallBack }) => {
          // ctx.body = Es lo que la persona escribe.

          if (!ctx.body.toLowerCase().includes('menu')) {
            const textFromAI = await chatgptClass.handleMsgChatGPT(ctx.body);
            await fallBack(textFromAI.text);
          }
        }
      );
  },
};