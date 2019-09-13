##### 8/21/2019
# `getMonthLocalTime()`

## Return value:
| Type | Description |
|---|---|
| `number` | The numerical value of the month. |

---

## Description:
Gets the month stored by the `GlideDateTime` object, expressed in the current user's time zone.

---

```js
var gdt = new GlideDateTime('2019-08-21 09:00:00');

gs.info(gdt.getMonthLocalTime());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetMonthLocalTime)