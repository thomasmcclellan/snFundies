##### 9/20/2019
# `setYearLocalTime(year)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| year | `number` | The year to change to. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the year stored by the `GlideDateTime` object to the specified value using the current user's time zone.

---

```js
var gdt = new GlideDateTime();

gdt.setYearLocalTime(2019);

gs.info(gdt.getYearLocalTime()); // 2019
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDateTimeSetYearLocalTime_Number)