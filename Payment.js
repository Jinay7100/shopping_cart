export default class Payment {
  constructor(amount, paymentMethod) {
    this.amount = amount;
    this.paymentMethod = paymentMethod;
  }

  process() {
    // Simulate payment processing
    return true; // Assume payment is always successful for simplicity
  }
}
