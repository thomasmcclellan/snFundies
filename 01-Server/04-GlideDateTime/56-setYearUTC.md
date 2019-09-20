##### 9/20/2019
# `setYearUTC(year)`

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
Sets the year stored by the `GlideDateTime` object to the specified value using the UTC time zone.

---

```js
var gdt = new GlideDateTime();

gdt.setYearUTC(2019);

gs.info(gdt.getYearUTC()); // 2019
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDateTimeSetYearUTC_Number)