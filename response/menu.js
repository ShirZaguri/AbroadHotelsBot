const menu = {
  text: `ABROAD
    מה תרצו לעשות?`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "התראות לירידת מחיר מלון",
            callback_data: "managePriceNotifications",
          },
        ],
      ],
    }),
  },
};

export default menu;
