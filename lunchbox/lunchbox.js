class LunchBox {
  constructor(details) {
    this.owner = details.owner;
    this.material = details.madeOf;
    this.shape = details.shape;
    this.color = details.color;
    this.snacks = [];
  }

  acquireSnack(snack) {
    this.snacks.push(snack);
    //console.log(this.snacks);
    console.log(this.snacksfruitSnack);
    //this.snacks[0].isInLunchBox = true;
    snack.isInLunchBox = true;
  }

  findHealthySnacks() {
    var healthySnacks = [];

    for(var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        var healthySnackDetected = this.snacks[i].type;
        healthySnacks.push(healthySnackDetected);
      }
    }
    return healthySnacks;
  }
}

module.exports = LunchBox;
