var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    var newStatue = new Statue(victim.name);
    if (this.statues.length < 3) {
      this.statues.push(newStatue);
    } else {
      var freedPerson = new Person(this.statues[0].name)
      this.statues.shift();
      freedPerson.mood = 'relieved';
      this.statues.push(newStatue);
      return freedPerson;
      }



    }


}



module.exports = Medusa;
