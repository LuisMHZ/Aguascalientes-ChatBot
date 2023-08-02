const { addKeyword } = require("@bot-whatsapp/bot");
const { textToVoice } = require("../services/elevenlabs_service");

const MoreInfoFlow = addKeyword(["6", "Más Información", "MAS"])
    .addAnswer(
        ["Te envío un audio para que conozcas más al respecto."],
        null,
        async (_, { flowDynamic }) => {
            console.log("Convirtiendo texto a voz 📄...");
            const path = await textToVoice(
                "Existen páginas web, redes sociales y aplicaciones móviles a tu disposición para brindarte más información que la ciudad tiene para ti, te las muestro a continuación",
                "FEMALE"
            );
            console.log(`Audio generado correctamente en -> [PATH]:${path}`);
            await flowDynamic([{ body: "escucha", media: path }]);
        }
    )
    .addAnswer(
        [
            '🌐 Páginas Web:',
            '\n 👉🏼 Viva-Aguascalientes: https://www.vivaaguascalientes.com/',
            '\n 👉🏼 Visit México: https://visitmexico.com/aguascalientes-5'
        ])
    .addAnswer(
        [
            '🌐 Redes Sociales:',
            '\n 👉🏼 Facebook SECTUR AGS: https://www.facebook.com/secturags/',
            '\n 👉🏼 Facebook Viva Aguascalientes: https://www.facebook.com/VivaAguascalientes/',
            '\n 👉🏼 Instagram: https://www.instagram.com/vivaaguascalientes_/',
            '\n 👉🏼 Twitter: https://twitter.com/aguascalientes',
            '\n 👉🏼 TikTok: https://www.tiktok.com/@vivaags'
        ])
    .addAnswer(
        [
            '📲 Aplicaciones Móviles:',
            '\n Android: ',
            '\n 👉🏼 Viva Aguascalientes: https://play.google.com/store/apps/details?id=mx.gob.aguascalientes.turismo.turismoags',
            '\n 👉🏼 Aguascalientes Digital: https://play.google.com/store/apps/details?id=mx.gob.ags.refrendo',
            '\n\n iOS: ',
            '\n 👉🏼 Viva Aguascalientes: https://apps.apple.com/mx/app/viva-aguascalientes/id555591399',
            '\n 👉🏼 Aguascalientse Digital: https://apps.apple.com/mx/app/aguascalientes-digital/id640129476'
        ])

module.exports = MoreInfoFlow;