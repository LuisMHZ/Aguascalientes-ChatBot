require('dotenv').config()

class ChatGPTClass {
  queue = []; 
  optionsGPT = { model: "gpt-3.5-turbo-0301" };
  openai = undefined;

  constructor() {
    this.init().then();
  }

  /**
   * Uso de API Key de ChatGPT
   */
  init = async () => {
    const { ChatGPTAPI } = await import("chatgpt");
    this.openai = new ChatGPTAPI(
        {
            apiKey: process.env.OPENAI_API_KEY
        }
    );
  };

  /**
   * Manejador de los mensajes
   * Su función es enviar un mensaje a WhatsApp
   * @param {*} ctx 
   */

  handleMsgChatGPT = async (body) => {
    const interaccionChatGPT = await this.openai.sendMessage(body, {
      conversationId: !this.queue.length
        ? undefined
        : this.queue[this.queue.length - 1].conversationId,
      parentMessageId: !this.queue.length
        ? undefined
        : this.queue[this.queue.length - 1].id,
    });

    this.queue.push(interaccionChatGPT);
    return interaccionChatGPT
  };
}

module.exports = ChatGPTClass;