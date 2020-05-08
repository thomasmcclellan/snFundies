##### 5/08/2020
# `isValid()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the schedule is valid. |

---

## Description:
Determines if the current schedule is valid.  A schedule is valid if it has at least one schedule span.

---

```js
var g = new GlideRecord('cmn_schedule');
g.addQuery('type', 'blackout');
g.query();

if (g.next()) {
  var sched = new GlideSchedule(g.sys_id),
      d = new GlideDateTime();
  
  d.setDisplayValue('2020-05-08 09:00:00');

  if (sched.isValid()) gs.info('Is valid');
  else gs.info('Is NOT valid');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScheduleScopedAPI#r_ScopedGlideScheduleIsValid)