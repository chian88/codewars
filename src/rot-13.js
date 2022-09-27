/// kata 415

function rot13(message) {
  //your code here
  const ascii = {
    'a': 'n',
    'b': 'o',
    'c': 'p',
    'd': 'q',
    'e': 'r',
    'f': 's',
    'g': 't',
    'h': 'u',
    'i': 'v',
    'j': 'w',
    'k': 'x',
    'l': 'y',
    'm': 'z',
    'n': 'a',
    'o': 'b',
    'p': 'c',
    'q': 'd',
    'r': 'e',
    's': 'f',
    't': 'g',
    'u': 'h',
    'v': 'i',
    'w': 'j',
    'x': 'k',
    'y': 'l',
    'z': 'm'
  }

  return message.split('').map((chr) => {
    if (/[a-z]/.test(chr)) {
      return ascii[chr];
    } else if (/[A-Z]/.test(chr)) {
      return ascii[chr.toLowerCase()].toUpperCase();
    }
    return chr;
  }).join('');
}