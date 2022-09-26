export const likes = (a: string[]): string => {
  // TODO
  const numberOfLikes = a.length;

  if (numberOfLikes === 0) {
    return 'no one likes this';
  } else if (numberOfLikes === 1) {
    return a[0] + ' likes this';
  } else if (numberOfLikes === 2) {
    return `${a[0]} and ${a[1]} like this`;
  } else if (numberOfLikes === 3) {
    return `${a[0]}, ${a[1]} and ${a[2]} like this`;
  } else {
    return `${a[0]}, ${a[1]} and ${numberOfLikes - 2} like this`;
  }
}