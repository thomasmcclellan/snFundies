##### 8/20/2019
# `getLocalDate()`

## Return value:
| Type | Description |
|---|---|
| `GlideDate` | The date in the user's time zone. |

---

## Description:
Gets the date stored by the `GlideDateTime` object, expressed in the standard format, yyy-MM-dd, and the current user's time zone.

---

```js
var gdt = new GlideDateTime('2019-08-20 09:00:00');

gs.info(gdt.getLocalDate()); // 2019-08-20
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetLocalDate)