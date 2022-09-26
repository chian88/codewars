function anagrams(word, words) {
    const targetWord = word.split('').sort().join('');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        const subjectWord = words[i].split('').sort().join('');

        if (targetWord === subjectWord) {
            result.push(words[i]);
        }
    }

    return result;
}