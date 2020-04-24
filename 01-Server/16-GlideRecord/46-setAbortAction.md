##### 4/20/2020
# `setAbortAction(bool)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| bool | `boolean` | `true` to abort the next action; `false` if the action is to be allowed. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets a flag to indicate if the next database action (`insert`, `update`, `delete`) is to be aborted.  This is often used in BRs.

Use in an `onBefore` BR to prevent the db action from being done. The BR continues to run after `setAbortAction()` is called.  Calling `setAbortAction()` does not stop subsequent BRs from executing.  Calling this method only prevents the db action from occuring.

---

```js
if (current.size > 16) {
  current.setAbortAction(true);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordQuery_Object_Object)