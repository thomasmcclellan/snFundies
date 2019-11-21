##### 11/21/2019
# `getTableName()`

## Return value:
| Type | Description |
|---|---|
| `string` | Name of the table. |

---

## Description:
Returns the name of the table to which this record belongs.

On the server side, the table for the current record can be retrieved with `current.sys_class_name` or `current.getTableName()`.

---

```js
function onLoad() {
  if (g_form.isNewRecord()) 
    var tableName = g_form.getTableName();
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormGetTableName)