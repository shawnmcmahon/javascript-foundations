class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.hungry = false;
  }

  completeTransformation() {
    if (this.form === "wolf") {
      this.form = 'human';
      return 'Where are I?';
    } else {
      this.form = 'wolf';
      return 'Aaa-Woooo!';
    }
  }

}

module.exports = Werewolf;
