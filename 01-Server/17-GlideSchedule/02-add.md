##### 5/04/2020
# `add(startDate, offSet)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| startDate | `GlideDateTime` | The starting date of the new schedule segment. |
| offSet | `GlideDuration` | The time offset of the new schedule segment. |

## Return value:
| Type | Description |
|---|---|
| `GlideDateTime` | The schedule updated with the new schedule segment. |

---

## Description:
Adds a new schedule segment to the current schedule.

---

```js
var startDate = new GlideDateTime('2020-05-04'),
    days = 2,
    dur = new GlideDuration(60 * 60 * 24 * 1000 * days),
    schedule = new GlideSchedule(),
    end = schedule.add(startDate, dur);

gs.info(end);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScheduleScopedAPI#r_ScopedGlideScheduleAdd_GlideDateTime_GlideDuration)