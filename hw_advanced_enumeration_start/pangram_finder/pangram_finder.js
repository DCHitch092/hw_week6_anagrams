const PangramFinder = function (phrase) {

  // this.alphabet = alphabet.filter((letter)={
  lowerCase = phrase.toLowerCase();
  this.alphabet = lowerCase.split("");
  // this.alphabet = alphabet.reduce((allLetters, letter),"" => {
  //   if (!allLetters.includes(letter){
  //     return allLetters.push(letter);}
  //   else if ( allLetters.includes(letter))
  // this.alphabet = Array.from(phrase);

  console.log(this.alphabet);
}

PangramFinder.prototype.isPangram = function () {
  // let foundAlphabet = [];
  //
  //
  let fullAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  console.log(fullAlphabet);
  // foundAlphabet = this.alphabet.map((letter) => {
  //   if ( foundAlphabet.length === 26 ) { return true; }
  //   else if ( foundAlphabet.includes(letter) ) { return; }
  //   else { return letter; }
  // })
  //
  // // for(const letter of fullAlphabet){
  // //   if ( !this.alphabet.includes(letter)){
  // //     console.log(`${letter} not found`);
  // //     return false;
  // //   } else {
  // //     console.log(`${letter} found`);
  // //     // const indexPanagram = this.alphabet.indexOf(letter);
  //     // this.alphabet.slice(indexPanagram, 1)
  //     // const indexAlphabet = fullAlphabet.indexOf(letter);
  //     // fullAlphabet.slice(indexAlphabet, 1)
  //
  //
  // //     {
  // //     const index = fullAlphabet.indexOf(letter);
  // //     fullAlphabet.slice(index, 1)}
  // // }
  // // if ( fullAlphabet.length === 0 ){
  // //   return true;
  // // }
  // console.log("left in pangram:", this.alphabet);
  // console.log("left in full alphabet:", foundAlphabet);
  // if (foundAlphabet.length === 26) {return true;
  // } else if (foundAlphabet.length <= 25 ){
  //   return false;
  // };
  const result = fullAlphabet.every(
    (letter) => {
      return this.alphabet.includes(letter)
    });

  return result;
};

module.exports = PangramFinder;
