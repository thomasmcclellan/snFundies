##### 5/22/2020
# `getTableName()`
## Return value:
| Type | Description |
|---|---|
| `string` | The table name. |

---

## Description:
Retrieves the name of the table associated with this `GlideRecord`.

---

```js
var item - new GlideRecord('sc_request');
item.addQuery('sys_id', current.request);
item.query(itemResponse);

function itemResponse(item) {
  alert('The table is ' + item.getTableName());
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideAPI#r_GRCS-getTableName)