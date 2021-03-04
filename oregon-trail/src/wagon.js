class Wagon {
  constructor(details) {
    this.title = details.name;
    this.wheels = details.wheels || [];
    this.axles = details.axles || [];
    this.oxen = details.oxen || [];
    this.yokes = details.yokes || [];
    this.settlers = details.settlers || [];
    this.food = details.food;
    this.ammunition = details.ammunition;
    this.clothes = details.clothes;
  }

  addPart(part) {
    //doesnt work because Part === an instance of a new Part.
    if (part.type === 'wheel') {
      this.wheels.push(part)
    } else if (part.type === 'axle') {
      this.axles.push(part)
    } else if (part.type === 'ox') {
      this.oxen.push(part)
    } else if (part.type === 'yoke') {
      this.yokes.push(part)
    }
  }

  canTravel() {
    for (var i = 0; i < this.wheels.length; i++) {

      if (this.wheels.length < 3 || this.axles.length <= 1 ||
          this.oxen.length <= 1 || this.yokes.length < 1 ||
          this.settlers.length < 1 || this.wheels[i].broken ||
          this.axles[i].broken || this.oxen[i].broken) {
          return false;
        } else if (this.oxen.length % this.yokes.length === 0) {
          return false;
        } else {
          return true;
        }
    }
  }


}

module.exports = Wagon;
