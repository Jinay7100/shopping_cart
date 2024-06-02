import Offer from "./Offer.js";

export default class PercentageDiscount extends Offer {
  constructor(percentage) {
    super();
    this.percentage = percentage;
  }

  apply(cart) {
    if (!cart.items || cart.items.length === 0) return 0;

    const total = cart.items.reduce(
      (acc, item) => acc + item.getTotalPrice(),
      0
    );
    const discount = total * (this.percentage / 100);
    return total - discount;
  }
}
