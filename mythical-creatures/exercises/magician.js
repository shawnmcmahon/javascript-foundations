class Magician{
  constructor(details) {
    this.name = 'The Great ' + details.name;
    this.assistant = details.assistant;
    this.favoriteAccessory = details.clothing || 'top hat';
  }

    performIncantation(incantation) {
      var upperCaseIncantation = incantation.toUpperCase() + "!";
      return upperCaseIncantation;
    }

    performTrick() {
      var upperCaseClothing = this.favoriteAccessory.toUpperCase();
      return `PULL RABBIT FROM ${upperCaseClothing}`;
    }


}

module.exports = Magician;
