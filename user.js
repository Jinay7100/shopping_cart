import Cart from "./Cart.js";
import Checkout from "./Checkout.js";
import Payment from "./Payment.js";
import PercentageDiscount from "./PercentageDiscount.js";
import Product from "./product.js";

class User {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.cart = new Cart(this);
  }
  getCart() {
    return this.cart;
  }
}
let person = new User("Jinay", 1, "a");
let product = new Product("key", 2, 100, 10);
person.getCart().addItem(product, 1);
const offer = new PercentageDiscount(10);
person.getCart().applyOffer(offer);

const total = person.getCart().getTotal();

const checkout = new Checkout(person.getCart());
const payment = new Payment(total, "Credit Card");

try {
  const order = checkout.processPayment(payment);
  order.confirm();
  console.log("order confirmed");
} catch (e) {
  console.log(e);
}
