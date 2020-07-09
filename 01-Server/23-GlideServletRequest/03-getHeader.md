##### 6/15/2020
# `getHeader(name)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The name of the header to be retrieved. |

## Return value:
| Type | Description |
|---|---|
| `string` | The header. |

---

## Description:
Returns the header value.

---

```js
var headerValue = g_request.getHeader('host'); // something.service-now.com
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideServletRequestScopedAPI#r_ScopedGlideServletRequestGetHeader_String)