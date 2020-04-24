##### 4/01/2020
# `insert()`
## Return value:
| Type | Description |
|---|---|
| `string` | Unique ID of the inserted record, or `null` if the record is not inserted. |

---

## Description:
Inserts a new record using the field values that have been set for the current record.

---

```js
var gr = new GlideRecord('incident');
gr.initialize();
gr.name = 'New Incident';
gr.description = 'Incident description';
gr.insert();
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordInsert)