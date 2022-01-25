// const bls = "░█▀█░█▀▄░█▀▄░█▀█░█▀█░█▀▄";
// ("░█▀█░█▀▄░█▀▄░█░█░█▀█░█░█");
// ("░▀░▀░▀▀░░▀░▀░▀▀▀░▀░▀░▀▀░");
import menu from "./menu.js";
import priceTracking from "./price-tracking.js";
import managePriceNotifications from "./manage-price-notifications.js";

const responsesMap = {
  menu,
  managePriceNotifications,
  priceTracking,
};

export default responsesMap;
