export const pigIt = (a : string) : string =>  {
    // code away
    const isWord = /[a-zA-Z]+/
    const words = a.split(' ').map( word => {
        if (isWord.test(word)) {
            return pigLatin(word)
        } else {
            return word;
        }
    })

    return words.join(' ');
  }

  function pigLatin(word: string): string {
    return word.slice(1) + word.charAt(0) + 'ay';
  }