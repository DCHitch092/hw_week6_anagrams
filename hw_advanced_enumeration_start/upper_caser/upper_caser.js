const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
//   let result = [];
//   for (const word of this.words){
//     const upperWord = word.toUpperCase();
//     result.push(upperWord);
//   }
// return result;

  return result = this.words.map((word) => {
      return word.toUpperCase();
  });
};

module.exports = UpperCaser;
