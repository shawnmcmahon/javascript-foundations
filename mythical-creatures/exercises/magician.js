class Magician{
  constructor(details) {
    this.name = 'The Great ' + details.name;
    this.assistant = details.assistant;
    this.favoriteAccessory = details.clothing || 'top hat';
    this.confidencePercentage = 10;
  }

    performIncantation(incantation) {
      var upperCaseIncantation = incantation.toUpperCase() + "!";
      return upperCaseIncantation;
    }

    performTrick() {
      if (!this.favoriteAccessory.includes('top hat')) {
        this.confidencePercentage += 10;
        return `PULL DOVE FROM SLEEVE`;

      }
      this.confidencePercentage += 10;
      var upperCaseClothing = this.favoriteAccessory.toUpperCase();
      return `PULL RABBIT FROM ${upperCaseClothing}`;
    }


}

module.exports = Magician;
