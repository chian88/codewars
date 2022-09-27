function formatDuration(seconds) {
  // Complete this function
  if (seconds === 0) {
    return "now";
  }

  let year = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;

  const secondsInYear = 31536000;
  const secondsInDay = 86400;
  const secondsInHour = 3600;
  const secondsInMinute = 60;

  year = Math.floor(seconds / secondsInYear);

  seconds -= (secondsInYear * year);

  days = Math.floor(seconds / secondsInDay);

  seconds -= (secondsInDay * days);

  hours = Math.floor(seconds / secondsInHour);

  seconds -= (secondsInHour * hours);

  minutes = Math.floor(seconds / secondsInMinute);

  seconds -= (secondsInMinute * minutes);

  let result = '';

  if (year) {
    if (year > 1) {
      result += year + ' years, ';
    } else {
      result += year + ' year, ';
    }
  }

  if (days) {
    if (days > 1) {
      result += days + ' days, ';
    } else {
      result += days + ' day, ';
    }
  }

  if (hours) {
    if (hours > 1) {
      result += hours + ' hours, ';
    } else {
      result += hours + ' hour, ';
    }
  }

  if (minutes) {
    if (minutes > 1) {
      result += minutes + ' minutes, ';
    } else {
      result += minutes + ' minute, ';
    }
  }

  if (seconds) {
    if (seconds > 1) {
      result += seconds + ' seconds, ';
    } else {
      result += seconds + ' second, ';
    }
  }

  result = result.trim();
  result = result.split(' ');
  if (result.length > 2) {
    const lastUnit = result[result.length - 1];
    const lastNum = result[result.length - 2];
    result.pop();
    result.pop();
    result[result.length - 1] = result[result.length - 1].slice(0, result[result.length - 1].length - 1)
    result.push('and');
    result.push(lastNum);
    result.push(lastUnit);

  }

  result = result.join(' ');
  result = result.slice(0, result.length - 1);
  return result;

}



console.log(formatDuration(32450402));