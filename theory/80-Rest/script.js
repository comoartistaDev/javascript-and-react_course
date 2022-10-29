'use strict';

const log = function(a, b, ...rest) { //... = rest operator
  console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');


function calcOrDouble(number, basis = 2) {//basis = 2 = Default settings
  console.log(number * basis);
} 

calcOrDouble(3);