##### 7/16/2020
# `getTimeZoneName()`
## Return value:
| Type | Description |
|---|---|
| `string` | The name of the session's time zone. |

---

## Description:
Returns the name of the session's time zone.

---

```js
var session = gs.getSession(),
    zoneName = session.getTimeZoneName();

gs.info(zoneName); // Eastern
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_ScopedGlideSessionGetTimeZoneName)