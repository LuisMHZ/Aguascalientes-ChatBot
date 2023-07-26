const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * Esto se ejecuta cuando el usuario escribe "AGENTE"
 */
const flowAgente = addKeyword("AGENTE", { sensitive: true })
  .addAnswer(
   "Contactándote con un asesor turístico para resolver tus dudas..."
  )
  .addAction(async (ctx, {provider}) => {
    const refProvider = await provider.getInstance()
    await refProvider.groupCreate(`Atención Turística Personalizada - Aguascalientes (${Date.now()})`,[
        `${ctx.from}@s.whatsapp.net`
    ])
  })
  .addAnswer('¡Te hemos agregado a un grupo con un asesor! Regresa a la pantalla principal de WhatsApp para verlo 🙋‍♂️')

module.exports = flowAgente;