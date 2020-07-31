##### 7/23/2020
# `isLoggedIn()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the user is logged in. |

---

## Description:
Returns `true` if the user is logged in.

---

```js
var session = gs.getSession(),
    loggedIn = session.isLoggedIn();

gs.info(loggedIn); // true
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_ScopedGlideSessionIsLoggedIn)