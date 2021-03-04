class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }

  useMaterial(number) {
    if (number <= this.amount) {
      this.amount -= number;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    } else {
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    }
  }

  calculateMaterialCost() {
    return this.price * this.amount;
  }
}

module.exports = Material;
