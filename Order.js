export default class Order {
  constructor(cart) {
    this.user = cart.user;
    this.items = cart.items;
    this.total = cart.getTotal();
    this.status = "Pending";
  }

  confirm() {
    this.status = "Confirmed";
  }
}
