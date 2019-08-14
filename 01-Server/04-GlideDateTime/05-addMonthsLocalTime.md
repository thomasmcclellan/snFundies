##### 7/29/2019
# `addMonthsLocalTime(months)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| months | Number | The number of months to add.  Use a negative value to subtract. |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value. |

---

## Description:
Adds a specified number of months to the current `GlideDateTime` object.  A negative parameter subtracts months.

The method determines the local date and time equivalent to the value stored by the `GlideDateTime` object, then adds or subtracts months using the local date and time values.

---

```js
var gdt = new GlideDateTime('2019-07-29 09:00:00');

gdt.addDaysUTC(-1);

gs.info(gdt.getDate()); // 2019-07-28
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeAddMonthsLocalTime_Number)