##### 8/12/2019
# `getDate()`

## Return value:
| Type | Description |
|---|---|
| `GlideDate` | The date is the system time zone. |

---

## Description:
Gets the date stored by the `GlideDateTime` object, expressed in the standard format, yyyy-MM-dd, and the system time zone, UTC by default.

---

```js
var gdt = new GlideDateTime('2019-08-12 09:00:00');

gs.info(gdt.getDate());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetDate)