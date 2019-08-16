##### 8/15/2019
# `getDisplayValueInternal()`

## Return value:
| Type | Description |
|---|---|
| String | The date and time values for the `GlideDateTime` objects in the current user's time zone and the internal date and time format of yyyy-MM-dd HH:mm:ss. |

---

## Description:
Gets the display value in the internal format (yyyy-MM-dd).

---

```js
var gdt = new GlideDateTime("2019-08-15 09:00:00"); 

gs.info(gdt.getDisplayValueInternal());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetDisplayValueInternal)