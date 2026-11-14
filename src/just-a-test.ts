import { zeit } from "./index";

console.log(
  'zeit.before("5 hours", "local").toString(): ',
  zeit.before("5 hours", "local").toString(),
);
console.log('zeit.before("5 hours", "utc").toString(): ', zeit.before("5 hours", "utc").toString());
console.log('zeit.in("5 hours", "local").toString(): ', zeit.in("5 hours", "local").toString());
console.log('zeit.in("5 hours", "utc").toString(): ', zeit.in("5 hours", "utc").toString());

console.log(
  'zeit.now("ISO 8601:1-2019 Extended',
  'Local Time") : ',
  zeit.now("ISO 8601:1-2019 Extended", "Local Time"),
);
console.log(
  'zeit.now("ISO 8601:1-2019 Extended") Omitted Timezone: ',
  zeit.now("ISO 8601:1-2019 Extended"),
);
console.log(
  'zeit.now("ISO 8601:1-2019 Extended',
  'UTC") : ',
  zeit.now("ISO 8601:1-2019 Extended", "UTC"),
);
console.log(
  'zeit.now("Unix Epoch") : ',
  zeit.now("Unix Epoch"),
);
console.log(
  'zeit.now("Human Readable") : ',
  zeit.now("Human Readable"),
);