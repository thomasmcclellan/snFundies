##### 9/09/2019
# `getYearUTC()`

## Return value:
| Type | Description |
|---|---|
| `number` | Four-digit year value in the UTC time zone. |

---

## Description:
Gets the year stored by the `GlideDateTime` object, expressed in the UTC time zone.

---

```js
var gdt = new GlideDateTime('2019-09-09 09:00:00');

gs.info(gdt.getYearUTC());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetYearUTC)