import { parseWording } from "../stuff";
import { Wording } from "../types";

const before = (words: Wording) => {
  const now = new Date();
  const d = now;

  const parsed = parseWording(words);

  let multiplier = 1;
  if (parsed.unit === "decades") multiplier = 10;
  else if (parsed.unit === "centuries") multiplier = 100;
  else if (parsed.unit === "millennia") multiplier = 1000;

  const amount = 0 - parsed.value * multiplier;

  // 3. Use switch with BREAKS
  switch (parsed.unit) {
    case "days":
      d.setDate(d.getDate() + amount);
      break;
    case "h":
    case "hours":
      d.setHours(d.getHours() + amount);
      break;
    case "min":
    case "minutes":
      d.setMinutes(d.getMinutes() + amount);
      break;
    case "s":
    case "seconds":
      d.setSeconds(d.getSeconds() + amount);
      break;
    case "months":
      d.setMonth(d.getMonth() + amount);
      break;
    case "milliseconds":
    case "ms":
      d.setMilliseconds(d.getMilliseconds() + amount);
      break;
    default:
      // Treat unknown units as years
      d.setFullYear(d.getFullYear() + amount);
      break;
  }

  return d;
};

export default before;
