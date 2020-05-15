##### 5/11/2020
# `load(sysID, timeZone?, excludeSpanID?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| sysID | `string` | The system ID of the schedule. |
| timeZone (**Optional**) | `string` | The timezone.  If a timezone is not specified, or is nil, the current session timezone is used for the schedule. |
| excludeSpanID (**Optional**) | `string` | Any span to exclude. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Loads a schedule with the schedule information.

---

```js
var x = new GlideSchedule();
x.load('08fcd0830a0a0b2600079f56b1adb9ae');
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScheduleScopedAPI#r_ScopedGlideScheduleLoad_String_String_String)