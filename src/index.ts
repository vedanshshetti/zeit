import before from "./modules/before.js";
import inX from "./modules/in.js";
import now from "./modules/now.js";

export const zeit = {
    in: inX,
    before,
    now
} as const;

