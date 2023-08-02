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
const ChatGPTClass = require("./chatgpt.class");
const chatGPT = new ChatGPTClass();

/**
 * Servicio de Whisper y ElevenLabs
 */
//const { handlerAI } = require("./utils");
const { textToVoice } = require("./services/elevenlabs_service");

const flowVentas = addKeyword(["conocer más", "ordenar"])
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

/**
 * Rutas de Camión
 */
const flowR1 = addKeyword(["RUTA1","RUTA 1","ruta 1","ruta1","Ruta1","Ruta 1"], { sensitive: true })
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 1', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_01_LAS%20MARGARITAS_VICENTE%20GUERRERO.pdf'})
const flowR2 = addKeyword(["RUTA2","RUTA 2","ruta 2","ruta2","Ruta2","Ruta 2"], { sensitive: true })
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 2', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_02_LOS%20CACTUS_CENTRO(JARD%C3%8DN%20CARPIO).pdf'})
const flowR3 = addKeyword(["RUTA3","RUTA 3","ruta 3","ruta3","Ruta3","Ruta 3"], { sensitive: true })
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 3', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_03_LA%20RIBERA_UAA%20SUR_.pdf'})
const flowR4 = addKeyword(["RUTA4","RUTA 4","ruta 4","ruta4","Ruta4","Ruta 4"], { sensitive: true })
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 4', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_04_JES%C3%9AS%20MAR%C3%8DA_TERMINAL%20SUR.pdf'})
const flowR5 = addKeyword(["RUTA5","RUTA 5","ruta 5","ruta5","Ruta5","Ruta 5"], { sensitive: true })
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 5', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_05_LA%20RIBERA_VICENTEGUERRERO.pdf'})
const flowR6 = addKeyword(["RUTA6", "RUTA 6"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 6', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_06_JES%C3%9AS%20MAR%C3%8DA_TERMINAL%20SUR.pdf'})
const flowR7 = addKeyword(["RUTA7", "RUTA 7"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 7', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_07_LAS%20PALMAS_CENTRO(JARD%C3%8DN%20DE%20ZARAGOZA).pdf'})
const flowR8 = addKeyword(["RUTA8", "RUTA 8"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 8', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_08_VILLAS%20EL%20PUERTECITO_CENTRO(RIVERO%20Y%20GUTI%C3%89RREZ).pdf'})
const flowR9 = addKeyword(["RUTA9", "RUTA 9"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 9', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_09_LOS%20LAURELES_TERMINAL%20SUR.pdf'})
const flowR10 = addKeyword(["RUTA10", "RUTA 10"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 10', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_10%20_PASEOS%20DE%20AGS_UAA%20SUR.pdf'})
const flowR11 = addKeyword(["RUTA11", "RUTA 11"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 11', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_11_CHICHIMECO_TERMINAL%20SUR.pdf'})
const flowR12 = addKeyword(["RUTA12", "RUTA 12"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 12', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_12_LOMAS%20DEL%20AJEDREZ_VICENTE%20GUERRERO.pdf'})
const flowR14 = addKeyword(["RUTA14", "RUTA 14"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 14', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_14_LUNARIA_VICENTE%20GUERRERO.pdf'})
const flowR16 = addKeyword(["RUTA16", "RUTA 16"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 16', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_16_BELLAVISTA_%20HACIENDA%20NUEVA.pdf'})
const flowR18 = addKeyword(["RUTA18", "RUTA 18"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 18', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_18_LUNARIA_UAA.pdf'})
const flowR19 = addKeyword(["RUTA19", "RUTA 19"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 19', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_19_VISTAS%20DE%20ORIENTE_POCITOS.pdf'})
const flowR20N = addKeyword(["RUTA20N", "RUTA 20 N", "RUTA 20N"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 20 Norte', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_20N_Terminal%20Oriente_Terminal%20Oriente.pdf'})
const flowR20S = addKeyword(["RUTA20S", "RUTA 20 S", "RUTA 20S"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 20 Sur', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_20S_Terminal%20Oriente_Terminal%20Oriente.pdf'})
const flowR23 = addKeyword(["RUTA23", "RUTA 23"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 6', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_23_LOS%20ARQUITOS_VILLAMONTA%C3%91A.pdf'})
const flowR24 = addKeyword(["RUTA24", "RUTA 24"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 24', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_24_LOS%20NEGRITOS_VISTA%20DE%20ORIENTE.pdf'})
const flowR25 = addKeyword(["RUTA25", "RUTA 25"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 25', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_25_VILLAS%20LAS%20PALMAS_UTA.pdf'})
const flowR27 = addKeyword(["RUTA27", "RUTA 27"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 27', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_27_LOS%20CACTUS_VICENTE%20GUERRERO.pdf'})
const flowR28 = addKeyword(["RUTA28", "RUTA 28"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 28', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_28_CHICHIMECO_TERMINAL%20SUR.pdf'})
const flowR29 = addKeyword(["RUTA29", "RUTA 29"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 29', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_29_LOMAS%20DEL%20AJEDREZ_CENTRO(JARD%C3%8DN%20DE%20ZARAGOZA).pdf'})
const flowR30 = addKeyword(["RUTA30", "RUTA 30"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 30', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_29_LOMAS%20DEL%20AJEDREZ_CENTRO(JARD%C3%8DN%20DE%20ZARAGOZA).pdf'})
const flowR33 = addKeyword(["RUTA33", "RUTA 33"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 33', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_33_JES%C3%9AS%20MAR%C3%8DA_TERMINAL%20SUR.pdf'})
const flowR34 = addKeyword(["RUTA34", "RUTA 34"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 34', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_34_UPA_VILLA%20MONTA%C3%91A.pdf'})
const flowR35 = addKeyword(["RUTA35", "RUTA 35"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 35', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_35_LUNARIA_UAA.pdf'})
const flowR36 = addKeyword(["RUTA36", "RUTA 36"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 36', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_36_LUNARIA_CENTRO(MERCADO%20TER%C3%81N).pdf'})
const flowR37 = addKeyword(["RUTA37", "RUTA 37"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 37', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_37_SAN%20MARCOS_VILLAS%20EL%20PUERTECITO.pdf'})
const flowR38 = addKeyword(["RUTA38", "RUTA 38"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 38', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_38_PASO%20BLANCO_VICENTE%20GUERRERO.pdf'})
const flowR39 = addKeyword(["RUTA39", "RUTA 39"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 39', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_39_EL%20CONEJAL_CENTRO.pdf'})
const flowR40N = addKeyword(["RUTA40N", "RUTA 40 N", "RUTA 40N"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 40 Norte', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_40%20NORTE_Terminal%20Oriente_Terminal%20Oriente.pdf'})
const flowR40S = addKeyword(["RUTA40S", "RUTA 40S", "RUTA 40 S"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 40 Sur', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_40%20SUR_Terminal%20Oriente_Terminal%20Oriente.pdf'})
const flowR41T = addKeyword(["RUTA41T.ORIENTE", "RUTA 41 T.Oriente", "RUTA 41 ORRIENTE"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 41 Terminal Oriente', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_41_Terminal%20Oriente_EATON.pdf'})
const flowR41A = addKeyword(["RUTA41ALAMEDA", "RUTA 41 ALAMEDA", "RUTA 41ALAMEDA"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 41 Alameda', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_41ALAMEDA_Terminal%20Oriente_EATON.pdf'})
const flowR42 = addKeyword(["RUTA42", "RUTA 42"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 42', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_42_BELLAVISTA_TERMINAL%20SUR.pdf'})
const flowR43 = addKeyword(["RUTA43", "RUTA 43"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 43', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_43_LOMAS%20DE%20NUEVA%20YORK_VILLAS%20EL%20PUERTECITO.pdf'})
const flowR45 = addKeyword(["RUTA45", "RUTA 45"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 45', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_45_LOS%20CACTUS_UAA.pdf'})
const flowR46 = addKeyword(["RUTA46", "RUTA 46"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 46', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_46_CALVILLITO_VICENTE%20GUERRERO.pdf'})
const flowR47 = addKeyword("RUTA47", { sensitive: true })
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 47', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_47_CL%C3%8DNICA%20I0_SAN%20MARCOS.pdf'})
const flowR48 = addKeyword(["RUTA48", "RUTA 48"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 48', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_48_BELLAVISTA_CENTRO%20(PANTE%C3%93N%20DE%20LA%20CRUZ).pdf'})
const flowR50 = addKeyword(["RUTA50", "RUTA 50"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 50', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_50_CHICAHUALES_UTA.pdf'})
const flowR50B = addKeyword(["RUTA50B", "RUTA 50 B", "RUTA 50B"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 50 B', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_50B_CHICAHUALES_UTA.pdf'})
const flowR51 = addKeyword(["RUTA51", "RUTA 51"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta 51', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_51_PUERTECITO_DE_LA_VIRGEN_CASA_BLANCA.pdf'})
const flowRUTR = addKeyword(["RUTAUTR", "RUTA UTR"])
.addAnswer('A continuación, te muestro el trayecto realizado por la Ruta Especial UTR', {
    media: 'https://aguascalientes.gob.mx/cmov/pdf/RUTA_ESPECIAL_UTR.pdf'})

/**
 * Flujos
 */
const PrimaryFlow = require("./flows/PrimaryFlow");
const TouristAgentFlow = require("./flows/PersonalTouristAgentFlow");
const flowVoiceNote = require("./flows/VoiceNoteflow");
const ByeFlow = require("./flows/ByeFlow");
const { GPTFlow } = require("./flows/GPTFlow");

/**
 * Función Principal
 */
const main = async () => {
  const adapterDB = new MockAdapter();

  const adapterFlow = createFlow([
    PrimaryFlow,
    flowVoiceNote,
    flowVentas,
    flowVentasM,
    TouristAgentFlow,
    ByeFlow,
    flowR1,flowR2,flowR3,flowR4,flowR5,flowR6,flowR7,flowR8,flowR9,flowR10,flowR11,flowR12,flowR14,flowR16,flowR18,flowR19,flowR20N,
    flowR20S,flowR23,flowR24,flowR25,flowR27,flowR28,flowR29,flowR30,flowR33,flowR34,flowR35,flowR36,flowR37,flowR38,flowR39,
    flowR40N,flowR40S,flowR41T,flowR41A,flowR42,flowR43,flowR45,flowR46,flowR47,flowR48,flowR50,flowR50B,flowR51,flowRUTR,
    GPTFlow(chatGPT)
  ]);

  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });
};

main();