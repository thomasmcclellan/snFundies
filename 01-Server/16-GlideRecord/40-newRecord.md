##### 4/10/2020
# `newRecord()`
## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Creates a new `GlideRecord` record, sets the default values for the fields, and assigns a unique ID to the record.

---

```js
var gr = new GlideRecord('incident');
gr.newRecord();

gs.info(gr.isNewRecord()); // true
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordNewRecord)