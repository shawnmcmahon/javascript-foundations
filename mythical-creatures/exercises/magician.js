class Magician{
  constructor(details) {
    this.name = 'The Great ' + details.name;
    this.assistant = details.assistant;
  }
}

module.exports = Magician;
