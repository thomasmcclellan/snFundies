##### 5/28/2020
# `next()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | `false` if there are no more records in the query set. |

---

## Description:
Moves to the next record in the `GlideRecord`.

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

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideAPI#r_GRCS-next)