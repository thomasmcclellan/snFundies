##### 7/09/2020
# `getClientIP()`
## Return value:
| Type | Description |
|---|---|
| `string` | The IP address. |

---

## Description:
Returns the client IP address.

---

```js
var session = gs.getSession(),
    addr = session.getClientIP();

gs.info(addr); // 50.59.164.97
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_ScopedGlideSessionGetClientIP)