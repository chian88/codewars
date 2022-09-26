export function spinWords(words: string): string {
  //TODO Have fun :)
  let wordArr = words.split(' ');

  wordArr = wordArr.map(word => {
    if (word.length >= 5) {
      return reverseWord(word);
    }
    return word;
  });

  return wordArr.join(' ');
}

function reverseWord(word: string) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    result = word.charAt(i) + result;
  }
  return result;
}

spinWords('Hey fellow warriors');