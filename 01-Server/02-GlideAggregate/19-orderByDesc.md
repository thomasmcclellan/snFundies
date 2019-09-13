##### 7/18/2019
# `orderByDesc(name)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | Name of the field |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value |

---

## Description:
Sorts the aggregates in descending order based on the specific field.  The field will also be added to the group-by list.

---

```js
var agg = new GlideAggregate('incident');

agg.addAggregate('count', 'category'); 
agg.orderByDesc('category'); 
agg.query(); 

while (agg.next()) { 
  var category = agg.category,
      count = agg.getAggregate('count', 'category'),
      agg2 = new GlideAggregate('incident');

  agg2.addAggregate('count', 'category');
  agg2.orderBy('category');
  
  gs.info(category + ": Current number of incidents:" + count);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateOrderByDesc_String)