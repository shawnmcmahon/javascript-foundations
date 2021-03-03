class Snack {
  constructor(type) {
    this.deliciousLevel = "extra";
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  }

  getEaten(){
    this.amount -= 10;
    if (this.amount <= 20){
      this.cuttingItClose = true;
    }
  }

  checkForHealthy() {
    if (this.type.includes("fruit") || this.type.includes("Fruit")) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Snack;
