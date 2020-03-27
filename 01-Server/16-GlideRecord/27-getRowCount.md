##### 3/24/2020
# `getRowCount()`
## Return value:
| Type | Description |
|---|---|
| `number` | Number of rows. |

---

## Description:
Retrieves the number of rows in the query result.

---

```js
var gr = new GlideRecord('incident');
gr.query();

gs.info('Records in incident table: ' + gr.getRowCount());
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordGetRowCount)