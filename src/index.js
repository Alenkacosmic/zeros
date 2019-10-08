module.exports = function zeros(expression) {

  let entered = expression.split('*');
  let two = 0;
  let five = 0;
  
  for (let step = 0; step < entered.length; step++) {
    let theNumber;
    let range;
    
    if (entered[step].endsWith('!!')) {
      theNumber = entered[step].slice(0,-2);
      range = 2;

    } else {
      theNumber = entered[step].slice(0,-1);
      range = 1;
    }

    while (theNumber >= 1 ) {
      let helper = theNumber;

      while (helper % 5 == 0) {
        helper = helper / 5;
        five++;
      }

      helper = theNumber;
      while (helper % 2 == 0) {
        helper = helper / 2;
        two++;
      }

      theNumber = theNumber - range;
    }
  }
  return Math.min(two,five);
}         // your solution