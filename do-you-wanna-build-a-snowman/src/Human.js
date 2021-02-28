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

    buildASnowman(snowman){
      snowman.coal = this.materials.coal;
      snowman.carrots = this.materials.carrots;
      snowman.buttons = this.materials.buttons;
      snowman.snowballs = this.materials.snowballs;
    }

}

module.exports = Human;
