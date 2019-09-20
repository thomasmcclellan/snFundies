##### 9/12/2019
# `setDayOfMonthLocalTime(day)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| day | `number` | The day of the month to change **to**, from 1 to 31.  If this value is greater than the maximum number of days in the month, the value is set to the last day of the month. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the day of the month to a specified value in the current user's time zone.

---

```js
var gdt = new GlideDateTime();

gdt.setDayOfMonthLocalTime(9);

gs.info(gdt.getDayOfMonthLocalTime()); // 9
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeSetDayOfMonthLocalTime_Number_day)