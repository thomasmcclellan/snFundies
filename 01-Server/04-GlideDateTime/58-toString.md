##### 9/23/2019
# `toString()`

## Return value:
| Type | Description |
|---|---|
| `string` | The date and time stored by the `GlideDateTime` object in the system time zone and format. |

---

## Description:
Gets the date and time value stored by the `GlideDateTime` object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.  This method is equivalent to `getValue()`.

---

```js
var gdt = new GlideDateTime('2019-09-23 09:00:00');

gs.info(gdt.toString());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDateTimeToString)