##### 4/29/2020
# `_next()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if there are more records in the query set. |

---

## Description:
Moves to the next record in the `GlideRecord`.  Provides the same functionality as `next()`, it is intended to be used in cases where the `GlideRecord` has a column named next.

---

```js
var rec = new GlideRecord('sys_template');
rec.query();

while (rec._next()) {
  gs.print(rec.number + ' exists');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#SGR-_next)