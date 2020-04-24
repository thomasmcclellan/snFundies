##### 4/13/2020
# `next()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Flag that indicates if there is a 'next' record in the `GlideRecord`.  Valid values are `true` (move to the next record was successful) or `false` (no more records in the result set). |

---

## Description:
Moves tot he next record in the `GlideRecord` object.

  > **NOTE**: This method fails if there is a field in the table called 'next'.  If that is the case, use the method `_next()`.

---

```js
var rec = new GlideRecord('incident');
rec.query();

while (rec.next()) {
  gs.info(rec.number + ' exists');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordNext)