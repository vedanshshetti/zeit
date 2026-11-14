export type UnitOfTime =
  | "milliseconds"
  | "ms"
  | "seconds"
  | "s"
  | "minutes"
  | "min"
  | "hours"
  | "h"
  | "days"
  | "months"
  | "years"
  | "decades"
  | "centuries"
  | "millennia";
export type Wording = `${number} ${UnitOfTime}`;
