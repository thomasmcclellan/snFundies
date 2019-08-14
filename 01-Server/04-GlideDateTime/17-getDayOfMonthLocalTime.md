##### 8/12/2019
# `getDayOfMonthLocalTime()`

## Return value:
| Type | Description |
|---|---|
| Number | The day of the month in the user's time zone, from 1 to 31. |

---

## Description:
Gets the day of the month stored by the `GlideDateTime` object, expressed in the current user's time zone.

---

```js
var gdt = new GlideDateTime('2019-08-12 09:00:00');

gs.info(gdt.getDayOfMonthLocalTime()); // 12
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetDayOfMonthLocalTime)