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
      if (this.occupants.length >= 3) {
        return 'Sorry, we are at max capacity. Thank you for understanding.'
      } else if(!this.isPrivate) {
        this.occupants.push(skater);
        return 'Welcome to the free Major Taylor Skatepark!';
      } else if (this.isPrivate && skater.money >= this.cost){
        skater.money -= this.cost;
        this.occupants.push(skater);
        return `Welcome to Curbside, the cost will be $12.00.`;
      } else {
        return 'Sorry, you don\'t have enough money.'
      }
  }
}

module.exports = Skatepark;
