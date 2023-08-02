const { addKeyword } = require("@bot-whatsapp/bot");
const PrimaryFlow = require("./PrimaryFlow");

const BusHourFlow = addKeyword(['HORARIO', 'Horario', 'Horario camiones'])
.addAnswer(
    [
        'Los autobuses operan desde temprano en la mañana hasta la noche y los horarios varían según la ruta y la demanda, pero generalmente hay una buena frecuencia de paso (cada 15 min. aproximadamente).',
        '\n Los horarios que regularmente manejan la mayoria de las rutas va desde las 7:00AM hasta las 9:00PM de lunes a domingo, con excepción de las rutas 20, 40 y 41 que pueden extender su horario de operación hasta las 12AM.',
        '\n Las rutas más populares son la 19, 20, 40, 41 y 50; por lo que su frecuencia de paso puede ser mayor (cada 10 min. aproximadamente).'
    ])

const BusPriceFlow = addKeyword(['PRECIO', 'Precio', 'Precio camiones'])
.addAnswer(
    [
        'El camión cuenta con dos modalidades de pago: ',
        '\n 1. Pago en efectivo que se realiza una vez abordas la únidad. Se pagan $11 pesos que tienen que darse de manera exacta ya que regularmente no tienen cambio.',
        '\n 2. Pago electrónico a través de tarjetas recargables YoVoy. El costo del camión pagando con tarjeta recargable es de $10.50',
        '\n Consulta el siguiente mapa para conocer los puntos de venta y recarga de las tarjetas: https://www.google.com/maps/d/u/0/viewer?mid=1FUqizEiP9JIMr6gtTfJTezLz2TbQJaQ&hl=en_US&ll=21.91813500566391%2C-102.29560857160978&z=12',
        '\n Nota: La tarjeta tiene un costo de $30 e incluye un viaje.'
    ])

const BusInfoFlow = addKeyword(['MAS', 'Más'])
.addAnswer(
    [
        '🌐 Para conocer más información sobre el servicio de transporte público que brinda la ciudad, visita los siguientes enlaces:',
        '\n➡️ https://aguascalientes.gob.mx/cmov/',
        '\n➡️ https://moovitapp.com/index/es-419/transporte_p%C3%BAblico-Aguascalientes-3778'
    ])
.addAnswer(
    [
        '🌐 También puedes consultar información en sus redes sociales:',
        '\n➡️ Facebook: https://www.facebook.com/MovAgs/',
        '\n➡️ Twitter: https://twitter.com/cmovags',
        '\n➡️ Instagram: https://www.instagram.com/movilidadags',
    ])
.addAnswer(
    [
        '📲 O si lo deseas, puedes descargar las siguientes aplicaciones, disponibles para Android y iOS:',
        '\nAndroid:',
        '\n➡️ https://play.google.com/store/apps/details?id=com.mx.nrtec.agsstopbus',
        '\n➡️ https://play.google.com/store/apps/details?id=mx.gob.aguascalientes.ubikags',
        '\n➡️ https://play.google.com/store/apps/details?id=com.tranzmate',
        '\n\niOS:',
        '\n➡️ https://apps.apple.com/mx/app/yovoy-stopbus/id1642776446',
        '\n➡️ https://apps.apple.com/mx/app/ubikags/id981642817',
        '\n➡️ https://apps.apple.com/mx/app/moovit-transporte-p%C3%BAblico/id498477945',

    ])

const BusFlow = addKeyword(['BUS', 'Bus', 'Camión'])
    .addAnswer('La ciudad cuenta con diferentes rutas de camión, que son las mostradas en la imagen', {
        media: 'https://raw.githubusercontent.com/LuisMHZ/Aguascalientes-ChatBot/main/Rutas.png',
    })
    .addAnswer(
        [
            '🚌 Para ver los recorridos que realiza cada camión, escribe *RUTA* seguido del número de ruta _(por ejemplo: RUTA40N)_',
            '\nEl precio del camión tiene un costo de $11 pesos que se deben pagar de manera exacta una vez abordas la unidad.',
        ])
    .addAnswer(
        [
            '¿Necesitas más información?',
            '\n🕛 Escribe *HORARIO* para conocer los horarios de operación del servicio de camiones.',
            '\n🪙 Escribe *PRECIO* para conocer más información sobre precios y formas de pago.',
            '\n➕ Para mayor información, escribe *MAS*.',
            '\nEscribe *TRANSPORTE* para regresar con el asistente de movilidad.'
        ],
        null,
        null,
        [BusHourFlow, BusPriceFlow, BusInfoFlow])

const TaxiFlow = addKeyword(['TAXI', 'Taxi'])
    .addAnswer('Puedes encontrar taxis en las calles de la ciudad a todas horas o llamar a compañías de taxis locales. Los podrás indentificar facilmente ya que son de color blanco o rojo ⚪🔴.', {
        media: 'https://newsweekespanol.com/wp-content/uploads/2023/04/img_9579-1140x570.jpg',
    })
    .addAnswer(
        [
            'ℹ️ Con respecto a la tarifa pública autorizada:',
            '\n - El banderazo (precio que se cobra una vez se aborda una unidad) es de $15 pesos.',
            '\n - El costo por kilómetro es de $4 pesos.',
            '\n - Caídas tiempo–distancia cada 60 segundos o 250 metros son de $1 peso.'
        ])
    .addAnswer(
        [
            'Adicionalmente, la Coordinación de Movilidad (CMOV) de Aguascalientes estrenó la aplicación “YoSíVoy Usuario”, a través de la cual las personas podrán solicitar un servicio de taxi.',
            '\nLa aplicación se puede encontrar en el siguiente enlace:',
            '\n Android: https://play.google.com/store/search?q=yosivoy&c=apps',
            '\n iOS: https://apps.apple.com/mx/app/yosivoy/id6448068922'
        ])
    .addAnswer('\nEscribe *TRANSPORTE* para regresar con el asistente de movilidad.')

const CombiFlow = addKeyword(['COMBI', 'Combi'])
    .addAnswer('Las combis (o transporte colectivo foráneo) son vehículos con capacidad de hasta diecinueve personas con rutas definidas y servicio que une a las áreas suburbanas, zonas conurbadas y comunidades rurales con los principales centros de población del Estado. Se distinguen por tener un diseño como el mostrado en la imagen.', {
        media: 'https://www.elsoldelcentro.com.mx/finanzas/hmnhge-combis/alternates/LANDSCAPE_768/Combis'
    })
    .addAnswer('Con respecto a la tarifa que cobran las combis, esta se muestra en la tabla.', {
        media: 'https://newsweekespanol.com/wp-content/uploads/2019/03/tarifa-2.jpg'
    })
    .addAnswer(
        [
            '⌚ Los combis transitan en un horario que va comunmente desde las 6AM hasta las 8PM.',
            '\n📌 Para conocer más información sobre destinos, horarios y precios es conveniente visitar la central de combis:',
            '\n 👉🏼 Ubicación de la central de combis en Google Maps: https://goo.gl/maps/DascC9tG4R3zAwHP7',
        ])
    .addAnswer('\nEscribe *TRANSPORTE* para regresar con el asistente de movilidad.')

const RideFlow = addKeyword(['RIDE', 'Ride'])
    .addAnswer('Un servicio de ridesharing (también conocido como transporte compartido o servicio de transporte privado) es un sistema de transporte en el cual los conductores particulares utilizan sus vehículos personales para transportar a pasajeros que necesitan un viaje.', {
        media: 'https://aguascalientes.gob.mx/CMOV/img/plataformas_apps.jpg'
    })
    .addAnswer(
        [
            'Características del servicio:',
            '\nLos vehículos se solicitan mediante el uso exclusivo de plataformas tecnológicas y/o dispositivos electrónicos.',
            '\nEl servicio se caracteriza por no estar sujeto a itinerario, rutas, tarifas, cromáticas, frecuencias u horario fijo.',
            '\nLa forma de pago únicamente se podrá realizar mediante la propia plataforma tecnológica administrada por la empresa de redes de transporte.',
        ])
    .addAnswer('ℹ️ Dicho esto, en Aguascalientes los principales servicios de ridesharing son los de las plataformas mostradas en la imagen. Para poder utilizarlos, es cuestión de acceder a la tienda de aplicaciones de tu dispositivo móvil y descargar la que mejor se adapte a tus necesidades.')
    .addAnswer('\nEscribe *TRANSPORTE* para regresar con el asistente de movilidad.')

const TransportFlow = addKeyword(['2', 'TRANSPORTE'])
    .addAnswer(
        [
            '¡Bienvenido! soy el asistente de movilidad de la ciudad, ¿en que te puedo ayudar?',
            '\n🚌 Escribe *BUS* si necesitas información del sistema de transporte público basado en autobuses de la ciudad.',
            '\n🚕 Escribe *TAXI* si necesitas información del servicio de taxis disponibles.',
            '\n🛻 Escribe *COMBI* si necesitas información del servicio de transporte colectivo foráneo.',
            '\n🚗 Escribe *RIDE* si necesitas información de los servicios de ridesharing (vehículo compartido) disponibles en la ciudad.',
            '\nEl transporte público de Aguascalientes es una forma conveniente y accesible de desplazarse por la ciudad.',
            '\n\nEscribe el texto resaltado en negritas de la opción sobre la cuál deseas conocer más información.',
            '\nSi requieres otra información, escribe *MENU* para regresar al menú principal.'
        ]
    )
    .addAnswer(
        [
            'En caso de requerir más información, puedes visitar la página web o redes sociales de la Coordinación General de Movilidad de Aguascalientes (CMOV):',
            '\nPágina Web: https://www.aguascalientes.gob.mx/CMOV',
            '\nFacebook: https://www.facebook.com/MovAgs',
            '\nTwitter: https://twitter.com/cmovags',
            '\nInstagram: https://www.instagram.com/movilidadags',
            '\nO si lo deseas, puedes mandar un correo a movilidadgobierno.ags@gmail.com o visitarlos en https://goo.gl/maps/hCYiJwtsXefbRYeM7'
        ],
        null,
        null,
        [BusFlow, TaxiFlow, CombiFlow, RideFlow, PrimaryFlow]
    )

module.exports = TransportFlow;