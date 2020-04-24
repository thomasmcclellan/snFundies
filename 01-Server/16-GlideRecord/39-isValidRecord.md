##### 4/09/2020
# `isValidRecord()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Flag that indicates whether a record was actually returned by the query/`get` operation.  Valid values are `true` (record returned by query/`get` operation) and `false` (end of record set, no record returned). |

---

## Description:
Determines if a record was actually returned by the query/`get` record operation.

---

```js
var rec = new GlideRecord('incident');
rec.query();

while (rec.next()) {
  gs.info(rec.number + ' exists');
}

gs.info(rec.isValidRecord());
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordIsValidRecord)