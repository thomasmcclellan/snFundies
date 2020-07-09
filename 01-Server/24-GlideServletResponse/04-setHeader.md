##### 6/26/2020
# `setHeader(key, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| key | `string` | Specifies the header. |
| value | `string` | The value to be assigned to the header.  If the header exists, it is overwritten. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets a response header to the specified value.

---

```js
g_response.setHeader('host', 'something.service-now.com')
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideServletResponseScopedAPI#r_ScopedGlideServletResponseSetHeader_String_String)