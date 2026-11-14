import before from "./modules/before";
import inX from "./modules/in";
import now from "./modules/now";

export const zeit = {
    in: inX,
    before,
    now
} as const;

