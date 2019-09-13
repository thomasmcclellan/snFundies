##### 8/05/2019
# `addYearsUTC(years)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| years | `number` | The number of years to add. Use a negative number to subtract. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds a specified number of years to the `GlideDateTime` object.  A negative parameter subtracts years.

The date and time value stored by the `GlideDateTime` object is interpreted as being in the UTC time zone.

---

```js
var gdt = new GlideDateTime('2019-08-05 09:00:00');

gdt.addYearsUTC();

gs.info(gdt.getDate()); // 2020-08-05
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeAddYearsUTC_Number)