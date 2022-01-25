const managePriceNotifications = {
  text: `נהדר! ירידות מחיר המלונות משפיעות משמעותית על התקציב של הטיול
  בחר אחת מבין הפעולות הבאות:`,
  opts: {
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "הוספת התראת ירידת מחיר",
            callback_data: "priceTracking",
          },
        ],
        [
          {
            text: "צפייה בהתראות קיימות",
            callback_data: "priceTracking",
          },
        ],
      ],
    }),
  },
};

export default managePriceNotifications;
