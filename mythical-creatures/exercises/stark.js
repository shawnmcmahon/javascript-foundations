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
    const newDirewolf = direwolf;
    const newStark = new Stark(stark.name, stark.area);
    newDirewolf.protect(newStark)
    console.log(newDirewolf.home);

  }

}


module.exports = Stark;
