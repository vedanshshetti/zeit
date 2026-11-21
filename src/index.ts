import before from "./modules/before.js";
import inX from "./modules/in.js";
import now from "./modules/now.js";
import greet from "./modules/greet/index.js";

export const zeit = {
    in: inX,
    before,
    now,
    greet,
} as const;

