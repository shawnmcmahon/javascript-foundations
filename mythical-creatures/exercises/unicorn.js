class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
  }


  isWhite() {
    if (this.color === "white") {
      return true;
    } else {
      return false;
    }
}
  says(words) {
    var sparklyingStuff = "**;* " + words + " *;**"
    return sparklyingStuff;

  }


}

module.exports = Unicorn;

var unicorn1 = new Unicorn("Charlie", "white");

unicorn1.color = "white";
console.log(unicorn1);

unicorn1.says("Wonderful");
