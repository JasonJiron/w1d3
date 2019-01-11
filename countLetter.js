var letterCount = {}

function countLetters(str) {
  for (var i = 0; i < str.length; i++) {
    var key = str[i]
    if (letterCount[key] == undefined) {
      letterCount[key] = 1
    }
    else letterCount[key] += 1
  }
  console.log(letterCount)
}


console.log(countLetters('test'))