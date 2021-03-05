var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, hasTicket) {
    if (this.skiers.length < this.limit && hasTicket) {
      var newSkier = new Skier(name, hasTicket);
      this.skiers.push(newSkier);
    } else if (!hasTicket) {
      return `Sorry, ${name}. You need a lift ticket!`
    } else {
      return `Sorry, ${name}. Please wait for the next lift!`
    }
  }

  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down';
    } else if (this.limit - this.skiers.length >= 2) {
      var spotsLeft = this.limit - this.skiers.length;
      return `We still need ${spotsLeft} more skiers!`;
    } else if (this.limit - this.skiers.length === 1) {
      return `We still need 1 more skier!`;
    }
  }

}

module.exports = Lift;
