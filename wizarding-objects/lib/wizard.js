class Wizard {
  constructor (details) {
    this.name = details.name;
    this.pets = [];
    this.petsCount = 0;
    this.wand = details.wand;
  }

  adoptPet(pet) {
    this.petsCount++;
    this.pets.push(pet);
  }

  petList() {
        var pet0 = `A ${this.pets[0].type} named ${this.pets[0].name};`;
        var pet1 = ` An ${this.pets[1].type} named ${this.pets[1].name}.`;
    return pet0 + pet1;
  }

  getWand(wand) {
    this.wand = wand;
  }

  castSpell(spell) {
    return `Casting ${spell}!`;
  }




}

module.exports = Wizard;
