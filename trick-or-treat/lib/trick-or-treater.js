class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.bag.candies.push(candy);
    this.hasCandy = true;
    this.bag.count++
    this.countCandies++;
  }

  eat() {
    this.countCandies--;
    this.bag.candies.splice(0, 1)
  }
}

module.exports = TrickOrTreater;
