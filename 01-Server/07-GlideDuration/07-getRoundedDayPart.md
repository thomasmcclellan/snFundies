##### 11/12/2019
# `getRoundedDayPart()`

## Return value:
| Type | Description |
|---|---|
| `number` | The day part, rounded. |

---

## Description:
Gets the rounded number of days.  If the time part is more than 12 hours, the return value is rounded up.  Otherwise, it is rounded down.

---

```js
var dur = new GlideDuration('3 11:00:00');

gs.info(dur.getRoundedDayPart());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDurationGetRoundedDayPart)