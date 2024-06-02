import Cart from "./Cart.js";
import Order from "./Order.js";

export default class Checkout {
  constructor(cart) {
    this.cart = cart;
  }

  processPayment(payment) {
    if (payment.process()) {
      const order = new Order(this.cart);
      this.cart.user.cart = new Cart(this.cart.user);
      return order;
    } else {
      throw new Error("Payment failed");
    }
  }
}
