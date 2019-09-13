##### 8/01/2019
# `addWeeksLocalTime(weeks)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| weeks | `number` | The number of weeks to add.  Use negative value to subtract. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds a specified number of weeks to the current `GlideDateTime` object.  A negative parameter subtracts weeks.

The method determines the local date and time equivalent to the value stored by the `GlideDateTime` object, then adds or subtracts weeks using the local date and time values.

---

```js
var gdt = new GlideDateTime('2019-08-01 09:00:00');

gdt.addWeeksLocalTime(1);

gs.info(gdt.getDate()); // 2019-08-08 09:00:00
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeAddWeeksLocalTime_Number)