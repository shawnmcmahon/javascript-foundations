class Part {
  constructor(details) {
    this.name = details.name;
    this.type = details.type;
    this.value = details.value;
    this.broken = false;
    this.isValid = true;
  }

  checkForValidity() {
    if (this.name && this.type && this.value) {
      this.isValid = true;
    } else if (!this.name) {
      this.isValid = false;
      return 'This part needs a name!'
    } else if (!this.type) {
      this.isValid = false;
      return 'This part needs a type!'
    } else if (!this.value) {
      this.isValid = false;
      return 'This part needs a value!'
    }

  }
}

module.exports = Part;
