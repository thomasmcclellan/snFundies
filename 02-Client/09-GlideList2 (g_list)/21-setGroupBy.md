##### 1/17/2020
# `setGroupBy(groupBy)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| groupBy | `string` | The `groupBy` criteria for the list. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the `groupBy` criteria for the list, for a single for multiple fields.

For a single field, use field or `groupByField`.  The `groupBy` prefix is optional.  For multiple fields, use `field1^field2^field3` or `groupByField1^groupByField2^groupByField3`.

---

```js
function runContextAction(listId) {
  var g_list = GlideList2.get(listId);
  g_list.setGroupBy('');
  g_list.refresh(1);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-setGroupBy_S)