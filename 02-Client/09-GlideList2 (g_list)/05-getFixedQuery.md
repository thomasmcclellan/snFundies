##### 1/09/2020
# `getFixedQuery()`
## Return value:
| Type | Description |
|---|---|
| `string` | The fixed query `string` for the list. |

---

## Description:
Returns the `sysparm_fixed` query.

A fixed query is the part of the query that cannot be removed from the breadcrumb (i.e. it is fixed for the user).  It is specified by including a `sysparm_fixed_query` parameter for the application module.

---

```js
var list = GlideList2.get(container.readAttribute('list_id')),
    filter = this._getFilter(element),
    fixedQuery = list.getFixedQuery();

if (fixedQuery)
  filter = fixedQuery + '^' + filter;
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-getFixedQuery)