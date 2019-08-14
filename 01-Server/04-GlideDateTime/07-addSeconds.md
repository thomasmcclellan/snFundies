##### 7/31/2019
# `addSeconds(seconds)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| seconds | Number | The number of seconds to add. |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value. |

---

## Description:
Adds the specified number of seconds to the current `GlideDateTime` object.

---

```js
var gdt = new GlideDateTime('2019-07-31 09:00:00');

gdt.addSeconds(1000);

gs.info(gdt.getValue()); // 2019-07-31 09:16:40
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeAddSeconds_Number)