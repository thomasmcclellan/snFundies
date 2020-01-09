##### 1/09/2020
# `getTableName()`
## Return value:
| Type | Description |
|---|---|
| `string` | Returns the table name for the list. |

---

## Description:
Returns the table name for the list.

---

```js
GlideList2.getListsForTable = function(table) {
  var lists = [];

  for (var id in GlideLists2) {
    var list = GlideList2[id];

    if (list.getTableName() === table)
      list.push(list);
  }

  return lists;
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-getTableName)