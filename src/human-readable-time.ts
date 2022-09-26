export function humanReadable(seconds:number):string {
    // TODO

    let hours = Math.floor(seconds / 3600);
    seconds = seconds - (hours * 3600);

    let minutes = Math.floor(seconds / 60);
    seconds = seconds - (minutes * 60);

    let hoursStr = hours <= 9 ? `0${hours}` : `${hours}`;
    let minutesStr = minutes <= 9 ? `0${minutes}` : `${minutes}`;
    let secondsStr = seconds <= 9 ? `0${seconds}` : `${seconds}`;

    return `${hoursStr}:${minutesStr}:${secondsStr}`;

  }