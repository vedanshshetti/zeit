import { UnitOfTime, Wording } from "./types";

/**
 * @private
 */
export function parseWording(x: Wording) {
  const pieces = x.split(" ");
  if(x.startsWith("in")) return {
    value: parseInt(pieces[1]) as number,
    unit: pieces[2] as UnitOfTime
  };
  return {
    value: parseInt(pieces[0]) as number,
    unit: pieces[1] as UnitOfTime
  }
}

export function toLocalISOString(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());
  const seconds = pad(d.getSeconds());
  
  // Handle timezone offset
  const offset = -d.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const offsetHours = pad(Math.floor(Math.abs(offset) / 60));
  const offsetMins = pad(Math.abs(offset) % 60);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${sign}${offsetHours}:${offsetMins}`;
}