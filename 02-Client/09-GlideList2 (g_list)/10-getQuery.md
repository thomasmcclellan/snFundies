##### 1/09/2020
# `getQuery(orderBy?, groupBy?, fixed?, all?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| orderBy (**Optional**) | `boolean` | If `true`, includes the `orderBy` in the encoded query `string`. |
| groupBy (**Optional**) | `boolean` | If `true`, includes the `groupBy` in the encoded query `string`. |
| fixed (**Optional**) | `boolean` | If `true`, includes the `fixed` query in the encoded query `string`. |
| all (**Optional**) | `boolean` | If `true`, includes `orderBy`, `groupBy`, and `fixed` query. |

## Return value:
| Type | Description |
|---|---|
| `string` | Encoded query `string` for the list. |

---

## Description:
Returns the encoded query `string` for the list.

---

```js
var list = GlideList2.get(this.listID),
    ajax = new GlideAjax('AJAXJellyRunner', 'AJAXJellyRunner.do');

ajax.addParam('sysparm_query_encoded', list.getQuery({ groupby: true, orderby: true }));
ajax.addParam('sysparm_table', list.getTableName());
ajax.addParam('sysparm_view', list.getView());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-getQuery_B_B_B_B)