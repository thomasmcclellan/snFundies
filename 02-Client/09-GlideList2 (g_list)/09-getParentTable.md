##### 1/09/2020
# `getParentTable()`
## Return value:
| Type | Description |
|---|---|
| `string` | The parent table name. |

---

## Description:
Returns the name of the parent table for a related list (the table associated with the form).

---

```js
for (var id in GlideList2) {
  var list = GlideList2[id];

  if (list.getTableName() === listTableName && list.getParentTable() === tableName) 
    return list.getContainer();
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-getParentTable)