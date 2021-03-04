class Skatepark {
  constructor(details) {
    this.name = details.name;
    this.yearFounded = details.year;
    this.style = details.type;
    this.features = details.features;
    this.isPrivate = details.isPrivate || false;
    this.cost = details.price || 0;
    this.occupants = [];
  }

  admit(skater) {
    if(!this.isPrivate && skater.money >= this.cost) {
      skater.money = skater.money - this.cost;
      this.occupants.push(skater);
      return 'Welcome to the free Major Taylor Skatepark!';
    } else {
      return 'Welcome to Curbside, the cost will be $12.00.';
    }
  }
}

module.exports = Skatepark;
