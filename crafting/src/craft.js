class Craft {
  constructor(details) {
    this.name = details.type;
    this.materials = details.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!'
  }

  calculateProjectTotal() {
    //Grab materials in our materials array
      var costMaterial1 = this.materials[0].price * this.materials[0].amount;
      console.log(costMaterial1);
      var costMaterial2 = this.materials[1].price * this.materials[1].amount;
    //use our calculateMaterialCost method to calculate of both

    //add both

    //return that number
    return costMaterial1 + costMaterial2;
  }

}

module.exports = Craft;
