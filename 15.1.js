function getSumOfEven(arr) {
  // console.log('array 10', arr[10]); //checking arr10 value
  // const arr10 = arr[10]; // checking arr10;
  // return arr[2] + arr[4] + arr[6] + arr[8] + arr[10]; //breakpoint shows return value is undefined
  //fixed code:
  let evenSum = 0;
  for (let i = 1; i < arr.length; i = i + 2) {
    evenSum = evenSum + arr[i];
  }
  return evenSum;
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 