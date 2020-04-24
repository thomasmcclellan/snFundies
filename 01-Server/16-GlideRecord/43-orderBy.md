##### 4/152020
# `orderBy(name)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The column name used to order the records in this `GlideRecord` object. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does nto return a value. |

---

## Description:
Specifies an `orderBy` column.

Call this method more than once to order multiple columns.  Results are arranged in ascending order, see `orderByDesc()` to arrange records in descending order.

---

```js
var queryString = 'priority=2',
    gr = new GlideRecord('incident'); 

gr.orderBy('short_description'); // Ascending Order
gr.addEncodedQuery(queryString); 
gr.query(); 

while (gr.next()) { 
  gs.info(gr.short_description); 
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordOrderBy_String)