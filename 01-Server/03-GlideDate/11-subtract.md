##### 7/24/2019
# `subtract(start, end)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| start | `GlideDate` | The start value. |
| end | `GlideDate` | The end value. |

## Return value:
| Type | Description |
|---|---|
| `GlideDuration` | The duration between the two values. |

---

## Description:
Gets the duration difference between two `GlideDate` values.

---

```js
var sgd1 = new GlideDate(),
    sgd2 = new GlideDate(),
    duration;

sgd1.setDisplayValue('2019-07-23');
sgd2.setDisplayValue('2019-07-24');
duration = GlideDate.subtract(sgd1, sgd2);

gs.info(duration.getDisplayValue()); // 1 Day
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateSubtract_GlideDate_GlideDate)