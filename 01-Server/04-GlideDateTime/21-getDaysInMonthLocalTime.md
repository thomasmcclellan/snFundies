##### 8/14/2019
# `getDaysInMonthLocalTime()`

## Return value:
| Type | Description |
|---|---|
| Number | The number of days in the current month in the user's time zone. |

---

## Description:
Gets the number of das in the month stored by the `GlideDateTime` object, expressed in the current user's time zone.

---

```js
var gdt = new GlideDateTime('2019-08-14 09:00:00');

gs.info(gdt.getDaysInMonthLocalTime()); 
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetDaysInMonthLocalTime)