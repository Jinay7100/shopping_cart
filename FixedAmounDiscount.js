import Offer from "./Offer.js";

export default class FixedAmountDiscount extends Offer {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  apply(cart) {
    console.log(cart);
    if (!cart.items || cart.items.length === 0) return 0;
    const total = cart.items.reduce(
      (acc, item) => acc + item.getTotalPrice(),
      0
    );
    return total - this.amount;
  }
}
