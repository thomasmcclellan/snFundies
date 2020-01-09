##### 1/09/2020
# `getGroupBy()`
## Return value:
| Type | Description |
|---|---|
| `string` | The field or comma-separated list of fields that are used to group the list. |

---

## Description:
Returns the field or comma-separated list of fields that are used to group the list.

---

```js
function runFilterV2Lists(name, filter) {
  var list = GlideList2.get(name);

  if (list) {
    var groupBy = list.getGroupBy();

    if (groupBy)
      filter += '^' + groupBy;
    
    list.setFilterAndRefresh(filter);
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-getGroupBy)