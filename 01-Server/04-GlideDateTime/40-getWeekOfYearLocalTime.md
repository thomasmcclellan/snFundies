##### 9/05/2019
# `getWeekOfYearLocalTime()`

## Return value:
| Type | Description |
|---|---|
| `number` | The number of the current week in local time.  The highest week number in a year is either 52 or 53 (leap year). |

---

## Description:
Gets the number of the week stored by the `GlideDateTime` object, expressed in the current user's time zone.  All weeks begin on **Sunday**.  The first week of the year is the week that contains **at least one day of the new year**.  For example, the week beginning Sunday, 12/17/2019 is considered the first week of 2016 as that week contains January 1st and 2nd.

---

```js
var gdt = new GlideDateTime('2019-09-05 09:00:00');

gs.info(gdt.getWeekOfYearLocalTime());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetWeekOfYearLocalTime)