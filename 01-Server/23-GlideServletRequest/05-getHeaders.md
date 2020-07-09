##### 6/17/2020
# `getHeaders(name)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | Names of the headers to be retrieved. |

## Return value:
| Type | Description |
|---|---|
| `string` | The header values. |

---

## Description:
Returns the header values.

---

```js
var headerValue = g_request.getHeaders('host'); // something.service-now.com
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideServletRequestScopedAPI#r_ScopedGlideServletRequestGetHeaders_String)