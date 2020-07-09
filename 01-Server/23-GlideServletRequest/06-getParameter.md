##### 6/18/2020
# `getParameter(name)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The name of the parameter to be retrieved.  This can be the parameter endpoint from the processor form. |

## Return value:
| Type | Description |
|---|---|
| `string` | The parameter value.  Returns `null` if the parameter is not found. |

---

## Description:
Returns the value of the parameter contained in the request URL.

---

```js
var name = g_request.getParameter('x_snc_custom_x_snc_name');
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideServletRequestScopedAPI#r_ScopedGlideServletRequestGetParameter_String)