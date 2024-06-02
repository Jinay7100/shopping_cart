import CartItem from "./CartItem.js";

export default class Cart {
  constructor(user) {
    this.user = user;
    this.items = [];
    this.offers = [];
  }

  addItem(product, quantity) {
    const cartItem = new CartItem(product, quantity);
    this.items.push(cartItem);
  }
  removeItem(product) {
    this.items = this.items.filter((a) => a.product != product);
  }
  applyOffer(offer) {
    this.offers.push(offer);
    offer.apply(this);
  }
  getTotal() {
    // console.log(this.items.map((a) => a.getTotalPrice()));
    let total = this.items.reduce((acc, item) => acc + item.getTotalPrice(), 0);
    for (const offer of this.offers) {
      total = offer.apply(this);
    }
    return total;
  }
}
