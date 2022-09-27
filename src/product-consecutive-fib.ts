export const productFib = (prod: number): [number, number, boolean] => {
  // your code
  let temp = 0;
  let fibo = 1;
  let a = 0
  let b = 1;
  while (temp < prod) {
    a = b;
    b = fib(fibo + 1);
    temp = a * b;
    if (temp === prod) {
      return [a, b, true]
    }
    fibo++;
  }

  return [a, b, false]
}

function fib(n: number): number {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let a = 0;
  let b = 1;
  let step = 2

  while (step < n) {
    let temp = b;
    b = b + a;
    a = temp;
    step++;
  }

  return b;

}

const result = fib(5);