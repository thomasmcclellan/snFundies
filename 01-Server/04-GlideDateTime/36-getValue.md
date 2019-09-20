##### 9/04/2019
# `getValue()`

## Return value:
| Type | Description |
|---|---|
| `string` | The date and time value in the internal format and system time zone. |

---

## Description:
Gets the date and time value stored by the `GlideDateTime` object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.

---

```js
var gdt = new GlideDateTime('2019-09-04 09:00:00');

gs.info(gdt.getValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetValue)