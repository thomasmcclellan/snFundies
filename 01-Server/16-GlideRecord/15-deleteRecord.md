##### 3/06/2020
# `deleteRecord()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Flag that indicates whether the record was successfully deleted. * |

  > *Valid values:
  >   * `true`: record was deleted
  >   * `false`: no record was found to delete

---

## Description:
Deletes the current record.

---

```js
var gr = new GlideRecord('incident');
// To delete one record
if (gr.get('99ebb4156fa831005be8883e6b3ee4b9'))
  gr.deleteRecord();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordDeleteRecord)