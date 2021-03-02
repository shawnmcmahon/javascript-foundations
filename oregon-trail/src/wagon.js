class Wagon {
  constructor(details) {
    this.title = details.name;
    this.wheels = [];
    this.axles = [];
    this.oxen = [];
    this.yokes = [];
    this.food = details.food;
    this.ammunition = details.ammunition;
    this.clothes = details.clothes;
  }

  addPart(part) {
    //doesnt work because Part === an instance of a new Part. 
    if (part === 'wheel') {
      this.wheels.push(part)
    } else if (part === 'axles') {
      this.axles.push(part)
    } else if (part === 'oxen') {
      this.oxen.push(part)
    } else if (part === 'yokes') {
      this.yokes.push(part)
    }
  }


}

module.exports = Wagon;
