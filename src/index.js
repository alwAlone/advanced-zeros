module.exports = function getZerosCount(number, base){
  let zeroCount = number;
  let timeBase = base;

  for (let i = 2; i <= base; i++) {
    if (timeBase % i === 0) {
      let counter = 0;

      while (timeBase % i === 0) {
        timeBase = Math.floor(timeBase / i);
        counter++;
      };

      let count = 0;
      let tempNum = number;

      while (tempNum / i > 0) {
        count += Math.floor(tempNum / i);
        tempNum = Math.floor(tempNum / i);
      };
      
      let timeVar = Math.floor(count / counter);

      if (zeroCount > timeVar) {
        zeroCount = timeVar;
      }
    }
  }
  return zeroCount;
}