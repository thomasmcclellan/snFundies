##### 1/10/2020
# `setFilter(filter)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| filter | `string` | Encoded query `string`. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the encoded query `string` for the list, ignoring the `orderBy` and `groupBy` parts of the query `string`.

---

```js
var list = GlideList2.get($(side + 'ContentDivRelease').select('.list_div')[0].getAttribute('id'));

if (list) {
  list.setFilter('active=true');
  list.refresh(1);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-setFilter_S)