var letterCount = {}

function countLetters(str) {
  str = str.split(' ').join('');
  for (var i = 0; i < str.length; i++) {
    var key = str[i]
    if (letterCount[key] == undefined) {
      letterCount[key] = [i];
    }
    else letterCount[key].push(i)
  }
  console.log(letterCount)
}


console.log(countLetters("lighthouse in the house"))