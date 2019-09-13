##### 9/09/2019
# `getYearLocalTime()`

## Return value:
| Type | Description |
|---|---|
| `number` | Four-digit year value in the user's time zone. |

---

## Description:
Gets the year stored by the `GlideDateTime` object, expressed in the current user's time zone.

---

```js
var gdt = new GlideDateTime('2019-09-09 09:00:00');

gs.info(gdt.getYearLocalTime());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetYearLocalTime)