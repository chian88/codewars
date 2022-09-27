function generateHashtag(str) {
  str = str.trim();
  if (str.length === 0) {
    return false;
  }

  strArr = str.split(/\s/);

  strArr = strArr.map(stringy => {
    return stringy.slice(0, 1).toUpperCase() + stringy.slice(1);
  });

  let result = '#' + strArr.join('');

  if (result.length > 140) {
    return false;
  }
  return result;
}