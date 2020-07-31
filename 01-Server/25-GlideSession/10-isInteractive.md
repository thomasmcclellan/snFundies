##### 7/22/2020
# `isInteractive()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the session is interactive. |

---

## Description:
Returns `true` if the session is interactive.

An interactive session is one that involves an end-user interacting with a user that then retrieves information from a server.  An example of this type of session is when a user logs in using the log-in screen or uses a form to query a data store.  A non-interactive session is one that only involves programmatic interaction with a server such as a `SOAP` request to retrieve data.

---

```js
var interActive = gs.getSession().isInteractive();

gs.info(interActive);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_ScopedGlideSessionIsInteractive)