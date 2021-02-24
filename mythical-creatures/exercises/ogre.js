class Orge {
  constructor(details) {
    this.name = details.name;
    this.home = details.abode || 'Swamp';
    this.swings = 0;

  }

  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter %3 === 0 && human.encounterCounter > 0) {
      this.swingAt(human);
    }

  }

  swingAt(human) {
    this.swings++;
    if (this.swings === 2) {
      human.knockedOut = true;
    }
  }

  apologize(human) {
    if (human.knockedOut === true) {
      human.knockedOut = false;
    }
  }
}


module.exports = Orge;
