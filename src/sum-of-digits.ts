export const digitalRoot = (n: number): number => {
  // your code here
  if (n <= 9) {
    return n;
  }
  const reduced = reduceNum(n);

  return digitalRoot(reduced);
};

function reduceNum(n: number): number {
  let result = n % 10;
  n = Math.floor(n / 10);

  while (n > 0) {
    result += n % 10;
    n = Math.floor(n / 10);
  }

  return result;
}