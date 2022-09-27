export function dirReduc(arr: string[]): string[] {
  let stack: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
    } else if (clash(stack[stack.length - 1], arr[i])) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  return stack;
}

function clash(prev: string, next: string): boolean {
  if (prev === 'NORTH' && next === 'SOUTH') {
    return true;
  } else if (prev === 'SOUTH' && next === 'NORTH') {
    return true;
  } else if (prev === 'EAST' && next === 'WEST') {
    return true;
  } else if (prev === 'WEST' && next === 'EAST') {
    return true;
  }
  return false;
}