class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
}

  checkForValidity() {
    if (this.type === 'food') {
      return `Great, we\'ll need lots of ${this.type}!`;
    } else if (this.type === 'clothes') {
      return `Great, we\'ll need lots of ${this.type}!`;
    } else if (this.type === 'ammunition') {
      return `Great, we\'ll need lots of ${this.type}!`;
    } else  {
      return `I don\`t think a ${this.type} will help us.`;
    }
  }

}

module.exports = Gear;
