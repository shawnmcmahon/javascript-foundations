class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group){
    if (this.openings > this.currentlyPlaying.length) {
      this.currentlyPlaying.push(group.name);
      var groupSize = group.length;
      this.openings -= groupSize
    }
  }

}

module.exports = GolfCourse;
