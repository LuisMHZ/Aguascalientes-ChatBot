const { addKeyword } = require("@bot-whatsapp/bot");

const AddInfoFlow = addKeyword(['5', 'Información Práctica'])
.addAnswer('📌 Aguascalientes es una ciudad ubicada en el centro de México, capital del estado del mismo nombre. Aquí tienes información práctica:')

.addAnswer('🌡️ *Clima*: El clima es semiseco, con temperaturas promedio de 20-25°C, pero en verano puede superar los 30°C. Se recomienda llevar ropa ligera y protector solar.')

.addAnswer('🚌 *Transporte*: La ciudad cuenta con transporte público (camión urbano), taxis y servicios de plataforma (Uber, DiDi, Bolt, InDrive). También puedes rentar autos si deseas mayor movilidad en la ciudad.')

.addAnswer('🗺️ *Lugares de interés*: Como atractivos principales te recomendamos visitar la Catedral Basílica de Nuestra Señora de la Asunción, el Jardín de San Marcos y el Museo Nacional de la Muerte.')

.addAnswer('🍳 *Gastronomía*: Prueba los platillos típicos como las gorditas, las chaskas o el chile Aguascalientes.')

.addAnswer('🔐 *Seguridad*: Aguascalientes es generalmente segura, pero como en cualquier ciudad, mantén tus pertenencias seguras y sé cauteloso durante la noche.')

.addAnswer('🗣️ *Idioma*: El idioma oficial es el español, pero en lugares turísticos es probable encontrarse personas que hablen algo de inglés.')

.addAnswer('🪙 *Moneda*: La moneda oficial es el peso mexicano. Asegúrate de llevar efectivo, aunque también encontrarás cajeros automáticos en toda la ciudad.')

.addAnswer('🎊 *Festivales*: Si estas de visita en abril, no te pierdas la Feria Nacional de San Marcos, uno de los eventos más importantes de México.')

.addAnswer(
    [
        '✨ *Pueblos Mágicos*: Aguascalientes cuenta con 11 municipios, y es en Calvillo, en Real de Asientos y en San José de Gracia donde se mezcla la bondad de la naturaleza, la belleza arquitectónica y los regalos de las manos artesanas.',
        '\n Calvillo: Ubicado al sur del estado, Calvillo es famoso por sus hermosos paisajes y su producción de guayabas. Aquí puedes disfrutar de la naturaleza en su esplendor, visitando el Jardín Principal y la Parroquia de San José de Calvillo. Además, no te puedes perder la experiencia de probar las deliciosas guayabas y productos derivados de esta fruta.',
        '\n Real de Asientos: Al norte de la capital se encuentra Real de Asientos, un encantador pueblo colonial con una rica historia minera. Sus coloridas fachadas, calles empedradas y arquitectura colonial te transportarán en el tiempo. Puedes visitar la Plaza Principal, la Parroquia de Nuestra Señora de Belén y las antiguas minas que rodean el pueblo.',
        '\n San José de Gracia: Ubicado en la zona norte del estado y abarcando una extensa área montañosa y semidesértica, San José de Gracia brinda paisajes naturales muy diversos y atractivos. Es un lugar perfecto para explorar la naturaleza, disfrutar de la cultura local y relajarse en un entorno pintoresco.'
    ])

.addAnswer('Espero que esta información te sea útil. Si deseas más detalles o requieres otra información, escribe *MENU* para regresar al menú principal.')

module.exports = AddInfoFlow;