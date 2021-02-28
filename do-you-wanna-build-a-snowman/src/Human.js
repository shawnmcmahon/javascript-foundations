var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
}
    gatherMaterials(materialsType, amount) {
      if (materialsType === 'snowballs') {
        this.materials.snowballs += amount
      } else if (materialsType === 'coal') {
        this.materials.coal += amount
      } else if (materialsType === 'buttons') {
        this.materials.buttons += amount
      } else if (materialsType === 'carrots') {
        this.materials.carrots += amount
      }


  }

    buildASnowman(){
      var newSnowman = new Snowman(this.materials);
      //return an instaniated snowman when called
      return newSnowman
    }

    placeMagicHat() {

      //the instance of the snowman just built magicHat needs to be assigned to true
      //this.magicHat = true;
      //return 'Woah, this snowman is coming to life!'
      return 'Woah, this snowman is coming to life!';
    }

}

module.exports = Human;
