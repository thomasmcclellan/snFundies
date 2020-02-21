##### 1/09/2020
# `getView()`
## Return value:
| Type | Description |
|---|---|
| `string` | The name of the view. |

---

## Description:
Returns the view used to display the list.

---

```js
function assignLabelActionViaLookupModal(tableName, listId) {
  var list = GlideList2.get(listId);

  if (!list)
    return;

  assignLabelViaLookup(tableName, sysIds, list.getView());
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-getView)