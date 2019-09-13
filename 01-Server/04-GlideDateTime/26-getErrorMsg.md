##### 8/16/2019
# `getErrorMsg()`

## Return value:
| Type | Description |
|---|---|
| `string` | The error message. |

---

## Description:
Gets the current error message.

---

```js
var gdt = new GlideDateTime();

gdt.setDisplayValue('2019-aa-16 09:00:00');

gs.info(gdt.getErrorMsg()); // Could not parse DateTime: 2019-aa-16 09:00:00
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetErrorMsg)