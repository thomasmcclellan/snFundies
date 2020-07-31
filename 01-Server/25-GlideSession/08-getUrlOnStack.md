##### 7/20/2020
# `getUrlOnStack()`
## Return value:
| Type | Description |
|---|---|
| `string` | The URL.  Returns `null` if the stack is empty. |

---

## Description:
Returns the URL on the stack.  Returns `null` if the stack is empty.

---

```js
var session = gs.getSession(),
    URL = session.getUrlOnStack();

gs.info(URL); // sys_app.do?sys_id=ce05b9f32b840200c5244f74b4da1501&sysparm_goto_url=sys_app.do%3Fsys_id%3Dce05b9f32b840200c5244f74b4da1501
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_ScopedGlideSessionGetUrlOnStack)