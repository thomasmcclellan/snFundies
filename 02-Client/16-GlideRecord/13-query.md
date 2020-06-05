##### 6/01/2020
# `query(responseFunction)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| responseFunction | `function` | The response `function` for the `AJAX` callback. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Runs the query against the table based on the `addQuery()` filter.  This queries the `GlideRecord` table as well as any references of the table.

---

```js
var rec = new GlideRecord('incident');
rec.query(recResponse);

function recResponse(rec) {
  while (rec.next()) {
    alert(rec.number + ' exists');
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideAPI#r_GRCS-query_Function)