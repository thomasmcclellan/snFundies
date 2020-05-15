##### 5/13/2020
# `whenNext(time, timeZone)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| time | `GlideDateTime` | Time to be evaluated. |
| timeZone | `string` | Timezone. |

## Return value:
| Type | Description |
|---|---|
| `number` | Number of milliseconds until the start time of the next schedule item.  Returns `-1` if never. |

---

## Description:
Determines how much time (in milliseconds) until start time of the next schedule item.

This `function` is intended to be called when the `GlideSchedule` object (`cmn_schedule` table) is not currently in the schedule window.  The `whenNext()` call returns duration (in ms) until the `GlideSchedule` object is within the schedule.  This `function` does not return a meaningful value if called when the `GlideSchedule` object is within the schedule.

---

```js
var startDate = new GlideDateTime('2020-05-13 09:00:00'),
    glideSchedule = new GlideSchedule('08fcd0830a0a0b2600079f56b1adb9ae', 'UTC');

gs.info(glideSchedule.whenNext(startDate));
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScheduleScopedAPI#r_ScopedGlideScheduleWhenNext_GlideDateTime_String)