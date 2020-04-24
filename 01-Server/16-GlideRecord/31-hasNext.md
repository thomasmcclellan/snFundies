##### 3/30/2020
# `hasNext()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if there are more records in the query result set. |

---

## Description:
Determines if there are any more records in the `GlideRecord` object.

---

```js
var rec = new GlideRecord('incident');
rec.query();

if (rec.hasNext()) 
  gs.info('Table is not empty');
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordHasNext)