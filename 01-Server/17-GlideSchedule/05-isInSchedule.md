##### 5/07/2020
# `isInSchedule(time)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| time | `GlideDateTime` | The datetime value to check. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the specified datetime is within the schedule; otherwise, `false`. |

---

## Description:
Determines if the given datetime is within the current schedule.

---

```js
var g = new GlideRecord('incident');
g.addQuery('type', 'blackout');
g.query();

if (g.next()) {
  var sched = new GlideSchedule(g.sys_id),
      d = new GlideDateTime();
  
  d.setDisplayValue('2020-05-07 09:00:00');

  if (sched.isInSchedule(d)) 
    gs.info('Is in the schedule');
  else 
    gs.info('Is NOT in the schedule');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScheduleScopedAPI#r_ScopedGlideScheduleIsInSchedule_GlideDateTime)