##### 7/29/2019
# `addDaysLocalTime(days)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| days | `number` | The number of days to add.  Use a negative value to subtract. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds a specified number of days to the current `GlideDateTime` object.  A negative parameter subtracts days.  

The method determines the local date nad time equivalent to the value stored by the `GlideDateTime` object, then adds or subtracts days using the local date and time values.

---

```js
var gdt = new GlideDateTime('2019-07-29 09:00:00');

gdt.addDaysLocalTime(-2);

gs.info(gdt.getLocalDate() + ' Happy Birthday Mom!'); // 2019-07-27 Happy Birthday Mom!
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeAddDaysLocalTime_Number)