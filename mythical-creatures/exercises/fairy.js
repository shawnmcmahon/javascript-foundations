class Fairy {
  constructor (name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ["Iris"]
    };
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief () {
    this.dust += 1;
  }

  believe () {
    this.dust += 10;
  }

  makeDresses (flower) {
    this.clothes.dresses.push(...flower);
  }

  becomeProvoked () {
    this.disposition = 'Vengeful';
  }

  replaceInfant (infant) {
    if(this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
      if (this.humanWards.length >= 3) {
        this.disposition = 'Good natured';
      }
    }
  }
}

module.exports = Fairy;
