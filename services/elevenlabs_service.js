const fs = require('node:fs')

/**
 *
 * @param {*} voiceId
 * @returns
*/

const textToVoice = async (text,id) => {
  var voiceId;
  if (id == "FEMALE") voiceId = '21m00Tcm4TlvDq8ikWAM';
  else voiceId = 'pNInz6obpgDQGcFmaJgB';
  const EVENT_TOKEN = process.env.ELEVEN_TOKEN ?? "";
  const URL = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

  const header = new Headers();
  header.append("accept", "audio/mpeg");
  header.append("xi-api-key", EVENT_TOKEN);
  header.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    text,
    model_id: "eleven_multilingual_v1",
    voice_settings: {
      stability: 0.45,
      similarity_boost: 0.6,
      style:0.0,
      use_speaker_boost:true
    },
  });

  const requestOptions = {
    method: "POST",
    headers: header,
    body: raw,
    redirect: "follow",
  };

  let fecha = new Date();
  const response = await fetch(URL, requestOptions);
  const buffer = await response.arrayBuffer();
  const pathFile = `${process.cwd()}/tts_response/AUD-${fecha.getFullYear()}${fecha.getMonth()+1}${fecha.getDate()}-${fecha.getHours()}${fecha.getMinutes()}${fecha.getMilliseconds()}-${id}.mp3`;
  fs.writeFileSync(pathFile, Buffer.from(buffer));
  
  return pathFile;
};

module.exports = { textToVoice };