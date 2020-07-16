##### 7/15/2020
# `getSessionToken()`
## Return value:
| Type | Description |
|---|---|
| `string` | The session token. |

---

## Description:
Returns the session token.

---

```js
var session = gs.getSession(),
    token = session.getSessionToken();

gs.info(token); // 4284b5372b840200c5244f74b4da15f2c3476cf7fcb6572afa4ef9d5e6d307a5fd9e1da7
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_ScopedGlideSessionGetSessionToken)