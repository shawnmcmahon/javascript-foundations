class Wagon {
  constructor(details) {
    this.title = details.name;
    this.wheels = details.wheels || [];
    this.axles = details.axles || [];
    this.oxen = details.oxen || [];
    this.yokes = details.yokes || [];
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


}

module.exports = Wagon;
