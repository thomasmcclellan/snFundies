##### 1/21/2020
# `setRowsPerPage(rows)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| rows | `number` | The number of rows to display. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the number of rows per page to display.

---

```js
link: function(scope) {
  var list = GlideList2.get(scope.listId);
  list.setRowsPerPage(scope.maxRows);
  list.setFilterAndRefresh(scope.tableQuery);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-setRowsPerPage_N)