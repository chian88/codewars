export function findOutlier(integers: number[]): number {
    // your code here
    let odd = 0;
    let even = 0;

    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    let result = -1;
    let toFind = '';
    if (odd > 1) {
        toFind = 'even';
    } else {
        toFind = 'odd';
    }

    for (let i = 0; i < integers.length; i++) {
        const remainder = integers[i] % 2;
        if (toFind === 'even' && (remainder === 0 || remainder === -0)) {
            result = integers[i];
        } else if (toFind === 'odd' && (remainder === 1 || remainder === -1) ) {
            result = integers[i];
        }
    }

    return result;
  }
  
