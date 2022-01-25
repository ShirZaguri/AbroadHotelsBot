import TelegramBot from "node-telegram-bot-api";
import responsesMap from "./response/responses.js";
import actionsMap from "./actions/actions-map.js";

const token = "5185025509:AAFVm2ovCWoAAAHpsZb1PHV5DKvcY-rqZus";
const bot = new TelegramBot(token, { polling: true });

bot.on("polling_error", console.log);

bot.on("message", (msg) => {
  console.log(responsesMap["menu"]);
  bot.sendMessage(
    msg.from.id,
    responsesMap["menu"].text,
    responsesMap["menu"].opts
  );
});

bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  console.log(callbackQuery);
  const data = callbackQuery.data;
  const opts = {
    chat_id: callbackQuery.message.chat.id,
    message_id: callbackQuery.message.message_id,
  };
  if (responsesMap[data]) {
    bot.sendMessage(
      opts.chat_id,
      responsesMap[data].text,
      responsesMap[data].opts
    );
  } else if (actionsMap[data]) {
    actionsMap[data]((replay) => {
      bot.sendMessage(opts.chat_id, replay);
    });
  } else {
    bot.sendMessage(opts.chat_id, "אופס, יש בעיה");
  }

  bot.answerCallbackQuery(callbackQuery.id);
});
