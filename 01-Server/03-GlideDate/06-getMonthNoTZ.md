##### 7/24/2019
# `getMonthNoTZ()`

## Return value:
| Type | Description |
|---|---|
| `number` | The numerical value of the month from 1 to 12. |

---

## Description:
Gets the month stored by the `GlideDate` object, expressed in the UTC time zone.

---

```js
// Today's date is 2019-07-24
var gd = new GlideDate();

gs.info(gd.getMonthNoTZ()) // 7
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_SGD-getMonthNoTZ)