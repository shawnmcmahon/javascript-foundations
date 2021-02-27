class Stark{
  constructor(details) {
    this.name = details.name;
    this.location = details.area || 'Winterfell';
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
    
  }

}


module.exports = Stark;
