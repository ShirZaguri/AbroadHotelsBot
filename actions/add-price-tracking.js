export default function addPriceTracking(callback) {
  setInterval(() => {
    const priceChange = 2;
    callback(priceChange);
  }, 5000);
}
