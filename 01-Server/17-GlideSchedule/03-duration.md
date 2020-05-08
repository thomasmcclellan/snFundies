##### 5/05/2020
# `duration(startDate, endDate)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| startDate | `GlideDateTime` | The starting date |
| endDate | `GlideDateTime` | The ending date |

## Return value:
| Type | Description |
|---|---|
| `GlideDuration` | The difference between the starting and ending datetime. |

---

## Description:
Determines the elapsed time in the schedule between two date time values using the timezone of the schedule or, if that is not specified, the timezone of the session.

---

```js
var startDate = new GlideDateTime('2020-05-02 06:00:00'),
    endDate = new GlideDateTime('2020-05-05 09:00:00'),
    schedule = new GlideSchedule(),
    duration;

schedule.load('090eecae0a0a0b260077e1dfa71da828'); // loads '8-5 weekdays excluding holidays' schedule
duration.schedule.duration(startDate, endDate);

gs.info(duration.getDurationValue()); // gets the elapsed time in schedule
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScheduleScopedAPI#r_ScopedGlideScheduleDuration_GlideDateTime_GlideDateTime)