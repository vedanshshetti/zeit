# zeit

A free, typed Date & Time library for JavaScript / TypeScript.

## Installation

```bash
npm install @vedanshshetti/zeit
```

## Usage

### Basic Import

```typescript
import { zeit } from "@vedanshshetti/zeit";

// Or for CommonJS
const { zeit } = require("@vedanshshetti/zeit");
```

### Methods

The `zeit` object provides four main methods:

| Method | Description |
|--------|-------------|
| `zeit.now()` | Get the current date/time |
| `zeit.in()` | Get a future date/time |
| `zeit.before()` | Get a past date/time |
| `zeit.greet()` | Get a time-based greeting |

---

## `zeit.now()`

Gets the current date and time in various formats.

### Parameters

- **format** (required): One of:
  - `"Unix"` - Returns milliseconds since Unix epoch
  - `"ISO 8601:1-2019 Extended"` - Returns ISO 8601 formatted string
  - `"Human Readable"` - Returns a human-readable date string
- **timezone** (optional): `"UTC"` or `"Local Time"` (default: `"Local Time"`)

### Examples

```typescript
// Get Unix epoch timestamp
const epoch = zeit.now("Unix");
// => 1712345678901

// Get ISO 8601 string in local time
const isoLocal = zeit.now("ISO 8601:1-2019 Extended");
// => "2024-04-05T14:30:45+05:30"

// Get ISO 8601 string in UTC
const isoUTC = zeit.now("ISO 8601:1-2019 Extended", "UTC");
// => "2024-04-05T09:00:45.123Z"

// Get human-readable format
const readable = zeit.now("Human Readable");
// => "5th April 2024, 14:30 (123ms)"
```

---

## `zeit.in()`

Calculate a future date/time by adding a time duration to the current time.

### Parameters

- **words** (required): A string in the format `"<number> <unit>"`

### Supported Units

| Unit | Alias | Description |
|------|-------|-------------|
| `milliseconds` | `ms` | Milliseconds |
| `seconds` | `s` | Seconds |
| `minutes` | `min` | Minutes |
| `hours` | `h` | Hours |
| `days` | - | Days |
| `months` | - | Months |
| `years` | - | Years |
| `decades` | - | Decades (10 years) |
| `centuries` | - | Centuries (100 years) |
| `millennia` | - | Millennia (1000 years) |

### Examples

```typescript
// 5 minutes from now
const inFiveMinutes = zeit.in("5 minutes");

// 2 hours from now
const inTwoHours = zeit.in("2 hours");
// or
const inTwoHours = zeit.in("2 h");

// 3 days from now
const inThreeDays = zeit.in("3 days");

// 1 decade from now (10 years)
const inTenYears = zeit.in("1 decades");

// 500 milliseconds from now
const inHalfSecond = zeit.in("500 milliseconds");
// or
const inHalfSecond = zeit.in("500 ms");
```

### Return Value

Returns a `Date` object representing the future date/time.

```typescript
const futureDate = zeit.in("10 days");
console.log(futureDate.toISOString());
// => "2024-04-15T14:30:45.123Z"
```

---

## `zeit.before()`

Calculate a past date/time by subtracting a time duration from the current time.

### Parameters

- **words** (required): A string in the format `"<number> <unit>"`

### Supported Units

Same as `zeit.in()` - see the [table above](#supported-units).

### Examples

```typescript
// 5 minutes ago
const fiveMinutesAgo = zeit.before("5 minutes");

// 2 hours ago
const twoHoursAgo = zeit.before("2 hours");
// or
const twoHoursAgo = zeit.before("2 h");

// 3 days ago
const threeDaysAgo = zeit.before("3 days");

// 1 century ago (100 years)
const hundredYearsAgo = zeit.before("1 centuries");

// 250 milliseconds ago
const quarterSecondAgo = zeit.before("250 ms");
```

### Return Value

Returns a `Date` object representing the past date/time.

```typescript
const pastDate = zeit.before("10 days");
console.log(pastDate.toISOString());
// => "2024-03-26T14:30:45.123Z"
```

---

## `zeit.greet()`

Returns a time-based greeting for a given name. The greeting changes based on the current time of day.

### Parameters

- **name** (required): The name to greet
- **language** (optional): `"English"` (default) or `"German"`

### Time-based Greetings

| Time Range | English | German |
|------------|---------|--------|
| 6:00 - 11:59 | Good Morning | Guten Morgen |
| 12:00 - 17:59 | Good Afternoon | Guten Tag |
| 18:00 - 20:59 | Good Evening | Guten Abend |
| 21:00 - 5:59 | Good Night | Gute Nacht |

### Examples

```typescript
// English greeting (default)
const greeting1 = zeit.greet("Alice");
// => "Good Morning Alice" (if between 6am-12pm)

// English greeting explicit
const greeting2 = zeit.greet("Bob", "English");
// => "Good Afternoon Bob" (if between 12pm-6pm)

// German greeting
const greeting3 = zeit.greet("Anna", "German");
// => "Guten Morgen Anna" (if between 6am-12pm)
```

### Return Value

Returns a string with the appropriate greeting based on the current time.

---

## Type Safety

The library is fully typed with TypeScript:

```typescript
// All methods are type-safe
const epoch: number = zeit.now("Unix");
const iso: string = zeit.now("ISO 8601:1-2019 Extended");
const date: Date = zeit.in("5 days");
const pastDate: Date = zeit.before("2 hours");
const greeting: string = zeit.greet("Alice");

// Invalid formats are caught at compile time
// @ts-expect-error - Invalid format
zeit.now("Invalid Format");
```

---

## Use Cases

### Scheduling

```typescript
const reminderTime = zeit.in("30 minutes");
setTimeout(() => {
  console.log("Reminder!");
}, reminderTime.getTime() - Date.now());
```

### Time Calculations

```typescript
const now = new Date();
const oneWeekAgo = zeit.before("7 days");
const timeDifference = now.getTime() - oneWeekAgo.getTime();
```

### Human-Readable Timestamps

```typescript
function logWithTimestamp(message: string) {
  const timestamp = zeit.now("Human Readable");
  console.log(`[${timestamp}] ${message}`);
}

logWithTimestamp("Application started");
// => [5th April 2024, 14:30 (123ms)] Application started
```

### Expiration Dates

```typescript
const sessionExpiry = zeit.in("24 hours");
const tokenExpiry = zeit.in("1 hours");
```

---

## License

EUPL-1.2

---

## Repository

- [GitHub](https://github.com/vedanshshetti/zeit)
- [Issues](https://github.com/vedanshshetti/zeit/issues)
