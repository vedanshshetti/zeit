import type { EnglishGreeting, GermanGreeting } from "./locales.js";


export default function greet<T extends string, L extends "English" | "German" = "English">(name: T, language?: L):
    `${L extends "English" ? EnglishGreeting : GermanGreeting} ${T}` {
    const current = new Date().getHours();
    let word;
    switch (language ?? "English") {
        case "English":
            if (6 <= current && current < 12) word = "Good Morning";
            if (12 <= current && current < 18) word = "Good Afternoon";
            if (18 <= current && current < 21) word = "Good Evening";
            if (21 <= current && current < 24) word = "Good Night";
            break;
        case "German":
            if (6 <= current && current < 12) word = "Guten Morgen";
            if (12 <= current && current < 18) word = "Guten Tag";
            if (18 <= current && current < 21) word = "Guten Abend";
            if (21 <= current && current < 24) word = "Gute Nacht";
            break;
    }

    return `${word as L extends "English" ? EnglishGreeting : GermanGreeting} ${name}`;
};