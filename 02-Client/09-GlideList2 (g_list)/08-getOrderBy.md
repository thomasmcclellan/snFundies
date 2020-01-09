##### 1/09/2020
# `getOrderBy()`
## Return value:
| Type | Description |
|---|---|
| `string` | The field used for order, or a blank. |

---

## Description:
Returns the first field used to order the list.

---

```js
var list = GlideList2.get(listId);

if (!list)
  return;

var orderBy = list.getOrderBy();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-getOrderBy)