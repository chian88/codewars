var maxSequence = function (arr) {
  // ...
  let maxEndingHere = 0;
  let maxSoFar = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = maxEndingHere + arr[i];

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }

  return maxSoFar;
}