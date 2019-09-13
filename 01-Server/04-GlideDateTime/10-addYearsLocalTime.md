##### 8/02/2019
# `addYearsLocalTime(years)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| years | `number` | The number of years to add.  Use a negative value to subtract. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds a specified number of years to the current `GlideDateTime` object.  A negative parameter subtracts years.

The methods determines the local date and time equivalent to the value stored by the `GlideDateTime` object, then adds or subtracts years using the local date and time values.

---

```js
var gdt = new GlideDateTime('2019-08-02 09:00:00');

gdt.addYearsLocalTime(1);

gs.info(gdt.getDate()); // 2020-08-02 09:00:00
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeAddYearsLocalTime_Number)