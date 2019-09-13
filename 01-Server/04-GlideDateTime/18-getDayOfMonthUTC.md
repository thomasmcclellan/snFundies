##### 8/12/2019
# `getDayOfMonthUTC()`

## Return value:
| Type | Description |
|---|---|
| `number` | The day of the month in the UTC time zone, from 1 to 31. |

---

## Description:
Gets the day of the month stored by the `GlideDateTime` object, expressed in the UTC time zone.

---

```js
var gdt = new Date('2019-08-12 09:00:00');

gs.info(gdt.getDayOfMonthUTC()); // 12
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetDayOfMonthUTC)