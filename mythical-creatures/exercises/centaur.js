class Centaur {
  constructor(details){
    this.name = details.name;
    this.breed = details.type;
    this.cranky = false;
    this.standing = true;
    this.crankyMeter = 0;
    this.layingDown = false;
}


  shootBow(){
    this.getCranky();
    if(!this.cranky && !this.layingDown) {
    return "Twang!!!";
  } else {
    return "NO!";
  }

}

  run() {
    this.getCranky();
    if (this.cranky || this.layingDown) {
      return "NO!"
    } else {
      return "Clop clop clop clop!!!";
    }
  }



  getCranky() {
    this.crankyMeter++
    if(this.crankyMeter >= 3) {
      this.cranky = true;
      return "NO!"
    }
  }

  sleep(){
    this.cranky = false;
    this.crankyMeter = 0;
    if (this.standing) {
      return "NO!"
    } else {
      return "ZZZZ"
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    this.cranky = false;
    this.crankyMeter = 0;
    if (this.layingDown) {
      return "Not while I'm laying down!"
    }
  }

}

console.log(this.crankyMeter);
console.log(this.cranky);


module.exports = Centaur;
