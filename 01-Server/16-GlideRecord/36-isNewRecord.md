##### 4/06/2020
# `isNewRecord()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the record is new and has not been inserted into the database. |

---

## Description:
Checks if the current record is a new record that has not yet been inserted into the database.

---

```js
var gr = new GlideRecord('x_app_table');
gr.newRecord(); // create a new record and populate it with default values

gs.info(gr.isNewRecord());
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordIsNewRecord)