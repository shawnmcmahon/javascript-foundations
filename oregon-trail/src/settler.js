class Settler {
  constructor(details) {
    this.name = details.name;
    this.age = details.age;
    this.nationality = details.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  }

  experienceDistress(distress) {
    if (this.ailments.length === 0) {
      this.ailments.push(distress);
      this.status = 'fair';
    } else if (this.ailments.length === 1) {
      this.ailments.push(distress);
      this.status = 'poor';
    } else if (this.ailments.length === 2) {
      this.ailments.push(distress);
      this.status = 'dead';
    }
  }

  heal() {
    if (this.status != 'dead'){
      this.ailments = [];
      this.status = 'healthy';
    } else {
      return `Sorry, we can\'t heal a corpse. Will needs a proper burial!`
    }
  }
}


module.exports = Settler;
