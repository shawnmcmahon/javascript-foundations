class Golfer {
  constructor(details) {
    this.name = details.name;
    this.handicap = details.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    return `I usually shoot a ${par + this.handicap} on average.`;
  }

  playRound(golfCourse) {
    if(golfCourse.difficulty === 'moderate') {
      this.frustration += 100;
    } else if (golfCourse.difficulty === 'hard') {
      this.frustration += 500;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }

  whatYaShoot(score) {
    if (score < 0) {
      this.frustration -= 30
      if(this.frustration < 0) {
        this.frustration = 0;
      }
      return 'I AM THE GREATEST GOLFER ALIVE!'
    } else if (score === 0) {
      this.frustration -= 10
      if(this.frustration < 0) {
        this.frustration = 0;
      }
      return 'Booyah!'
    } else {
      this.frustration += 20
      if(this.frustration < 0) {
        this.frustration = 0;
      }
      return 'Doh!'
    }

    console.log(this.frustration);
  }


}

module.exports = Golfer;
