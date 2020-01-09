##### 1/08/2020
# `getChecked()`
## Return value:
| Type | Description |
|---|---|
| `string` | Comma-separated list of the `sys_ids` for the items that are checked in the list.  Does not check to determine that the items returned are allowed to be executed. |

---

## Description:
Returns a comma-separated list of the `sys_ids` for the items that are checked in the list.

---

```js
function assignLabelActionViaLookupModal(tableName, listId) {
  var list = GlideList2.get(listId);

  if (!list) 
    return;

  var sysIds = list.getChecked();

  if (!sysIds)
    return;
  
  assignLabelViaLookup(tableName, sysIds);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-getChecked)