const priceTracking = {
  text: `הכנס בבקשה קישור למלון`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "הוספת התראת ירידת מחיר",
            callback_data: "addPriceTracking",
          },
        ],
      ],
    }),
  },
};

export default priceTracking;
