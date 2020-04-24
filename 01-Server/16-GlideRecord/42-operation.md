##### 4/14/2020
# `operation()`
## Return value:
| Type | Description |
|---|---|
| `string` | The current operation. |

---

## Description:
Retrieves the current operation being performed, such as `insert`, `update`, or `delete`.

---

```js
// Commonly used in a BR, returns insert if the current operation is insert
gs.info('current operation is ' + current.operation());
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordOperation)