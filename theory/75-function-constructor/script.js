'use strict';

function User (name, id) { //when we use this syntax the function becomes a constructor
  this.name = name;
  this.id = id;
  this.humen = true;
  this.hello = function() { //create method
    console.log(`Hello ${this.name}`);
  }
}

User.prototype.exit = function(name) { //use prototype when we don't have access to constructor
  console.log(`The user ${this.name} has logged out`);
}

const ivan = new User('Ivan', 28); //new User create new object with properties which we wrote on the top
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();

ivan.exit();
 
console.log(ivan, alex);
