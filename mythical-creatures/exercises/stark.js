class Stark{
  constructor(details) {
    this.name = details.name || 'Shawn';
    this.location = details.location || 'Winterfell';
    this.safe = false;

  }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
    return 'Winter is Coming'
    }
  }

  callDirewolf(direwolf) {
    console.log(direwolf);
  }

}


module.exports = Stark;
