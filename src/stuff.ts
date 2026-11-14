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