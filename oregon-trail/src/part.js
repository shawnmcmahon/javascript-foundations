class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.brokenCounter = 0;
  }

  break() {
    this.brokenCounter++;
    this.broken = true;
  }

  repair() {
    if (this.brokenCounter < 2) {
      this.broken = false;
    } else {
      return `This ${this.type} has seen better days, we\'ll need a brand new one!`
    }
  }
}

module.exports = Part;
