##### 7/30/2019
# `addMonthsUTC(months)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| months | `number` | The number of months to add.  Use a negative value to subtract. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds a specified number of months to the curent `GlideDateTime` object.  A negative parameter subtracts months.

The method determines the UTC date and time equivalent to the value stored by the `GlideDateTime` object, then adds or subtracts months using the UTC date and time values.

---

```js
var gdt = new GlideDateTime('2019-07-30 09:00:00');

gdt.addMonthsUTC(2);

gs.info(gdt.getDate()); // 2019-09-30 09:00:00
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeAddMonthsUTC_Number)