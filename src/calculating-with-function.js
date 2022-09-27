function zero(operation) {
  if (!operation) {
    return 0;
  }

  return doOperation(operation, 0);
}
function one(operation) {
  if (!operation) {
    return 1;
  }

  return doOperation(operation, 1);
}
function two(operation) {
  if (!operation) {
    return 2;
  }

  return doOperation(operation, 2);
}
function three(operation) {
  if (!operation) {
    return 3;
  }

  return doOperation(operation, 3);
}
function four(operation) {
  if (!operation) {
    return 4;
  }

  return doOperation(operation, 4);
}
function five(operation) {
  if (!operation) {
    return 5;
  }

  return doOperation(operation, 5);
}
function six(operation) {
  if (!operation) {
    return 6;
  }

  return doOperation(operation, 6);
}
function seven(operation) {
  if (!operation) {
    return 7;
  }

  return doOperation(operation, 7);
}
function eight(operation) {
  if (!operation) {
    return 8;
  }

  return doOperation(operation, 8);
}
function nine(operation) {
  if (!operation) {
    return 9;
  }

  return doOperation(operation, 9);
}

function doOperation(operation, num) {
  if (operation.operation === '+') {
    return num + operation.number;
  } else if (operation.operation === '-') {
    return num - operation.number;
  } else if (operation.operation === '*') {
    return num * operation.number;
  } else if (operation.operation === '/') {
    return Math.floor(num / operation.number);
  }
}

function plus(number) {
  return {
    operation: '+',
    number: number,
  }
}
function minus(number) {
  return {
    operation: '-',
    number: number,
  }
}
function times(number) {
  return {
    operation: '*',
    number: number,
  }
}
function dividedBy(number) {
  return {
    operation: '/',
    number: number,
  }
}

