##### 1/20/2020
# `setOrderBy(orderBy)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| orderBy | `string` | Single or multiple order by fields. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the `orderBy` criteria for the list.

For a single order by field use `orderBy` field or `orderByDescField`.  For multiple fields, use `orderByField1^orderByField2^orderByField3`.  `orderBy` specifies ascending order and `orderByDesc` specifies descending.  These prefix `strings` are optional.  If not specified, `orderBy` is assumed.

---

```js
updateOrderBy: function(orderBy) {
  var list = GlideList2.get(this.listID);

  if (list) list.setOrderBy(orderBy);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-setOrderBy_S)