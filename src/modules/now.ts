import { toLocalISOString } from "../stuff.js";

type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const monthsMap: Record<MonthNumber, string> = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December",
} as const;

// AI Generated, I have no idea what this is but it works.
const getOrdinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || "th";
};

export default function now(
  format: "Unix Epoch" | "ISO 8601:1-2019 Extended" | "Human Readable",
  timezone: "UTC" | "Local Time"="Local Time",
) {
  const isLocal = timezone == "Local Time";
  const d =
    timezone === "Local Time" ? new Date() : new Date(new Date().toUTCString());
  switch (format) {
    case "ISO 8601:1-2019 Extended":
      return isLocal ? toLocalISOString(d) : d.toISOString();
    case "Unix Epoch":
      return Date.now();
    case "Human Readable":
      return `${d.getDate()}${getOrdinal(d.getDate())} ${
        isLocal
          ? monthsMap[(d.getMonth() + 1) as MonthNumber]
          : monthsMap[(d.getUTCMonth() + 1) as MonthNumber]
      } ${d.getFullYear()}, ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")} (${d.getMilliseconds()}ms)`;
  }
}
