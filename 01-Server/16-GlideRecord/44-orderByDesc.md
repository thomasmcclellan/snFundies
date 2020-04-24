##### 4/16/2020
# `orderByDesc(name)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The column name to be used to order the records in a `GlideRecord` object. |

## Return value:
| Type | Description |
|---|---|
| Void | Methods does not return a value. |

---

## Description:
Specifies a descending `orderBy` column.

---

```js
var queryString = 'priority=2',
    gr = new GlideRecord('incident'); 

gr.orderByDesc('short_description'); //Descending Order
gr.addEncodedQuery(queryString); 
gr.query(); 

while (gr.next()) { 
  gs.info(gr.short_description); 
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordOrderByDesc_String)