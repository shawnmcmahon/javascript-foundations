class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group){
    if (this.openings >= this.currentlyPlaying.length) {
      for (var i = 0;  i < group.length; i++) {
          this.currentlyPlaying.unshift(group[i].name);
      }
      var groupSize = group.length;
      this.openings -= groupSize
      return 'You\'re checked in. Have fun!'
    } else {
      return 'Sorry, we are currently booked! Please come back later.'
    }
  }

}

module.exports = GolfCourse;
