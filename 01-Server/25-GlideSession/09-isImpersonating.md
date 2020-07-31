##### 7/21/2020
# `isImpersonating()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the user is impersonating another user; otherwise, returns `false`. |

---

## Description:
Returns `true` if the user is impersonating another user.

---

```js
var isImpersonator = gs.getSession().isImpersonating();

gs.info(isImpersonator);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_SGSSN-isImpersonating)