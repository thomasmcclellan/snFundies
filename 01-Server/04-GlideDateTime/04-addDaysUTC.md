##### 7/29/2019
# `addDaysUTC(days)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| days | Number | The number of days to add.  Use a negative number to subtract. |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value. |

---

## Description:
Adds a specified number of days to the current `GlideDateTime` object.  A negative parameter subtracts days.

The method determnes the UTC date and time equivalent to the value stored by the `GlideDateTime` object, then adds or subtracts days using the UTC date and time values.

---

```js
var gdt = new GlideDateTime('2019-07-29 09:00:00');

gdt.addDaysUTC(-1);

gs.info(gdt.getDate()); // 2019-07-28
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeAddDaysUTC_Number)