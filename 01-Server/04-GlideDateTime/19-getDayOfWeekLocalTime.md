##### 8/13/2019
# `getDayOfWeekLocalTime()`

## Return value:
| Type | Description |
|---|---|
| Number | The day of week value, in the user's time zone, from 1 to 7 **starting on Monday**.  Monday = 1; Sunday = 7, etc. |

---

## Description:
Gets the day of the week stored by the `GlideDateTime` object, expressed in the user's time zone.

---

```js
var gdt = new GlideDateTime('2019-08-03 09:00:00');

gs.info(gdt.getDayOfWeekLocalTime()); // 2
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetDayOfWeekLocalTime)