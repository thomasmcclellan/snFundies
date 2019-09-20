##### 9/17/2019
# `setMonthLocalTime(month)`

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
Sets the month stored by the `GlideDateTime` object to the specified value using the current user's time zone.

---

```js
var gdt = new GlideDateTime();

gdt.setMonthLocalTime(1);

gs.info(gdt.getMonthLocalTime()); // 1
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeSetMonthLocalTime_Number)