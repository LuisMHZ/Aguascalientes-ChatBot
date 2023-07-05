const fs = require('node:fs')

/**
 *
 * @param {*} voiceId
 * @returns
*/

const textToVoice = async (text,id) => {
  var voiceId;
  if (id == "mujer") voiceId = '21m00Tcm4TlvDq8ikWAM';
  else voiceId = 'pNInz6obpgDQGcFmaJgB';
  const EVENT_TOKEN = process.env.EVENT_TOKEN ?? "";
  const URL = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

  const header = new Headers();
  header.append("accept", "audio/mpeg");
  header.append("xi-api-key", EVENT_TOKEN);
  header.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    text,
    model_id: "eleven_multilingual_v1",
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.8
    },
  });

  const requestOptions = {
    method: "POST",
    headers: header,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(URL, requestOptions);
  const buffer = await response.arrayBuffer();
  const pathFile = `${process.cwd()}/tmp/${Date.now()}-audio.mp3`;
  fs.writeFileSync(pathFile, Buffer.from(buffer));
  
  return pathFile;
};

module.exports = { textToVoice };