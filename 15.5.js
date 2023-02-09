function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      //break point confirms i is correct,
      counter += 1;
      // counter not increasing because it's counter +1 instead of counter +=1;
    }
  } return counter;
}
console.log(countOccurrences("ini mini miny moe", "n")); 