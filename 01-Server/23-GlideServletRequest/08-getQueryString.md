##### 6/22/2020
# `getQueryString()`
## Return value:
| Type | Description |
|---|---|
| `string` | The query `string`. |

---

## Description:
Returns the query `string` from the request.

---

```js
var daString = g_request.getQueryString();
g_processor.writeOutput('The query string is: ' + daString);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideServletRequestScopedAPI#r_ScopedGlideServletRequestGetQueryString)