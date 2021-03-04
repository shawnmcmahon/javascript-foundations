class Snowman {
  constructor(details) {
    // console.log(details)
    this.carrots = details.carrots;
    this.coal = details.coal;
    this.buttons = details.buttons;
    this.snowballs = details.snowballs;
    this.magicHat = false;
  }

  canWearMagicHat() {
    if (this.buttons >= 5 && this.coal >= 2) {
      this.magicHat = true;
    }

    if (this.carrots < 1 || this.snowballs < 2) {
      this.magicHat = false;
    }
  }
}
module.exports = Snowman;
