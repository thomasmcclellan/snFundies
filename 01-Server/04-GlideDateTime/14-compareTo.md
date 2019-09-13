##### 8/08/2019
# `compareTo(obj)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| obj | `object` | Date and time object in `GlideDateTime` format. |

## Return value:
| Type | Description |
|---|---|
| `number` | 0 = Dates are equal |
|| 1 = Object's date is after the date specified in the parameter |
|| -1 = Object's date is before the date specified in the parameter |

---

## Description:
Compares two date and time objects to determine whether they are equivalent or one occurs before/after the other.

---

```js
var initDate = new GlideDateTime('2019-08-08 09:00:00');
var compDate1 = new GlideDateTime('2019-08-08 09:00:00');
var compDate2 = new GlideDateTime('2019-08-07 09:00:00');
var compDate3 = new GlideDateTime('2019-08-12 12:00:00');

gs.info(initDate.compareTo(compDate1)); // 0 (equal dates)
gs.info(initDate.compareTo(compDate2)); // 1 (initDate is after compDate2)
gs.info(initDate.compareTo(compDate3)); // -1 (initDate is before compDate3)
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeCompareTo_Object_o)