##### 12/20/2019
# `getReferenceTable()`

## Return value:
| Type | Description |
|---|---|
| `string` | The table name of the reference. |

---

## Description:
Gets the table name for a reference element.

---

```js
var grInc = new GlideRecord('incident');

grInc.query('number', 'INC0010041'); // record assignment group assigned to 'CAB Approval'

if (gr.Inc.next()) {
  // Get the table name
  var tableName = grInc.assignment_group.getReferenceTable();

  gs.info(tableName);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementGetReferenceTable)