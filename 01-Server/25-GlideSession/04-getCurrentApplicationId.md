##### 7/13/2020
# `getCurrentApplicationId()`
## Return value:
| Type | Description |
|---|---|
| `string` | The currently selected application. |

---

## Description:
Returns the application currently selected in the application picker.

This method requires admin privileges.

---

```js
var session = gs.getSession(),
    appID = session.getCurrentApplicationId();

gs.info(appID); // ce05b9f32b840200c5244f74b4da1501
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_ScopedGlideSessionGetCurrentApplicationId)