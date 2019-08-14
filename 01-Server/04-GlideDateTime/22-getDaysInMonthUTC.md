##### 8/14/2019
# `getDayInMonthUTC()`

## Return value:
| Type | Description |
|---|---|
| Number | The number of days in the month stored by the `GlideDateTime` object, expressed in the UTC time zone. |

---

## Description:
Gets the number of days in the month stored by the `GlideDateTime` object expressed in the UTC time zone.

---

```js
var gdt = new GlideDateTime('2019-08-14 09:00:00');

gs.info(gdt.getDaysInMonthUTC());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetDaysInMonthUTC)