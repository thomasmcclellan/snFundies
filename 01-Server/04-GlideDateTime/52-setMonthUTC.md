##### 9/18/2019
# `setMonthUTC(month)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| month | `number` | The month to change to. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the month stored by the `GlideDateTime` object to the specified value using the UTC time zone.

---

```js
var gdt = new GlideDateTime();

gdt.setMonthUTC(1);

gs.info(gdt.getMonthUTC()); // 1
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDateTimeSetMonthUTC_Number)