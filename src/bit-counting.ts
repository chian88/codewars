export function countBits(n: number): number {
    // Program Me
    let result = 0;

    const letter = n.toString(2);

    for (let i = 0; i < letter.length; i++) {
        if (letter.charAt(i) === '1') {
            result++;
        }
    }
    return result
  }

  countBits(12);