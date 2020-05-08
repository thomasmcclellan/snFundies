##### 5/06/2020
# `getName()`
## Return value:
| Type | Description |
|---|---|
| `string` | The name of the current schedule. |

---

## Description:
Retrieves the schedule name.

---

```js
var sys_id = '04e664654a36232701a2247dcd8fc4cf', // sys_id for 'Application' schedule record
    schedule = new GlideSchedule(sys_id);

gs.info(schedule.getName());
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScheduleScopedAPI#r_ScopedGlideScheduleGetName)