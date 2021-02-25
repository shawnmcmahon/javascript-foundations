class Direwolf {
  constructor(name, home, size){
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark){
  if (this.starksToProtect.length < 2 && stark.location === this.home) {
    this.starksToProtect.push(stark.name);
  }
    stark.safe = true;
    this.huntsWhiteWalkers = false;
}

  leave(stark) {
    stark.safe = false;
    this.starksToProtect.shift(stark);
  }





}


module.exports = Direwolf;
