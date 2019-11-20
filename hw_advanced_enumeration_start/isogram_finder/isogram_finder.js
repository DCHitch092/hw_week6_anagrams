const IsogramFinder = function (word) {
  this.word = word.split("");
  // console.log(this.word);
}

IsogramFinder.prototype.isIsogram = function () {
  let allLetters = [];
  console.log(this.word);

  allLetters = this.word.map((letter) => {
    if (!allLetters.includes(letter)){
      return letter;
    } else if ( allLetters.includes(letter)){
      return false;
    }
    console.log(allLetters);
    return allLetters;
  });


  // let allLetters = this.word.reduce((letters, letter) => {
  //   if(!letters.includes(letter)){
  //     console.log(letter);
  //     letters + letter;
  //   } else {
  //     return false;}
  //
  // },"");
  //
  // console.log(allLetters);
  // return true;

//  for (let letter of this.word){
//    if (letters.includes(letter)) {
//      return false;
//    } else {
//      console.log(letter);
//      letters.push(letter);
//    }
//  }
//   return true;
// };
};

module.exports = IsogramFinder;
