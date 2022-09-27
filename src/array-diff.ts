export function arrayDiff(a: number[], b: number[]): number[] {

  a = a.filter(num => {
    return b.indexOf(num) === -1;
  })
  return a;
}
