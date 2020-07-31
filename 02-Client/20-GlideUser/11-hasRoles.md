##### 7/23/2020
# `hasRoles(includeDefaults?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| includeDefaults (**Optional**) | `boolean` | Flag that indicates whether to include default roles, such as `snc_internal` and `snc_external`, in the request. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the current user has the specified role or the admin role; otherwise, `false`. |

---

## Description:
Returns `true` if the current user has any role.

---

```js
var yesRole = g_user.hasRoles(true);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideUserAPI#r_GlideUser-hasRoles)