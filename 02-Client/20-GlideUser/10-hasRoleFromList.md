##### 7/22/2020
# `hasRoleFromList(role, includeDefaults?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| role | `string` | Comma-separated list of roles to check. |
| includeDefaults (**Optional**) | `boolean` | Flag that indicates whether to include default roles, such as `snc_internal` and `snc_external`, in the request. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the current user has the specified role or the admin role; otherwise, `false`. |

---

## Description:
Returns `true` if the current user has the specified role(s) or the admin role.

---

```js
var isOK = g_user.hasRoleFromList("itil, maint, snc_internal", true);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideUserAPI#r_GlideUser-hasRoleFromList_String)