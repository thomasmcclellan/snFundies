##### 1/07/2020
# `get(DOMElement?, listID?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| DOMElement (**Optional**) * | `object` | The `DOM` element ID for the list for which you want the `GlideList2` object. |
| listID (**Optional**) * | `string` | The list ID for which you want the `GlideList2` object. |

  > *You will pick _one_ of the two parameters; you NEED to have either of them.

## Return value:
| Type | Description |
|---|---|
| `object` | The `GlideList2` object or `null` is not found. |

---

## Description:
Returns the `GlideList2` object for the list that contains the specified item.

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

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-get_O)