export default function now(
  format:
    | "Unix Epoch"
    | "ISO 8601:1-2019 Basic"
    | "ISO 8601:1-2019 Extended"
    | "Human Readable",
) {
  switch (format) {
    case "ISO 8601:1-2019 Basic":
      return new Date().toISOString();
    case "ISO 8601:1-2019 Extended":
      return new Date().toISOString();
  }
}
