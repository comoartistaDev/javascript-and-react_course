'use strict';

const persone = {
  name: 'Alex',
  tel: '+4949494949',
  parents: {
    mom: 'Olga',
    dad: 'Mike'
  }
}

const clone = JSON.parse(JSON.stringify(persone)); //deep cloning
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);