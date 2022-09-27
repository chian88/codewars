function moveZeros(arr) {
  let numOfZeros = 0;
  let result = arr.filter(item => {
    if (typeof item === 'number' && item === 0) {
      numOfZeros++;
    }

    return item !== 0;
  });

  while (numOfZeros > 0) {
    result[result.length] = 0;
    numOfZeros--;
  }
  return result;
}