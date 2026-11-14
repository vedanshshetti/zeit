import type { UnitOfTime, Wording } from "./types.js";

/**
 * @private
 */
export function parseWording(x: Wording) {
  const pieces = x.split(" ") as [string, string];
  if (pieces.length !== 2) {
    throw new Error(`Invalid wording format: "${x}". Expected format: "<number> <unit>"`);
  }
  const value = parseInt(pieces[0], 10);
  if (isNaN(value)) {
    throw new Error(`Invalid number in wording: "${x}"`);
  }
  return {
    value,
    unit: pieces[1] as UnitOfTime
  };
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