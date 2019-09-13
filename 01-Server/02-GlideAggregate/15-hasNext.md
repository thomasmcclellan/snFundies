##### 7/18/2019
# `hasNext()`

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if there are more results in the query set; otherwise, `false`. |

---

## Description:
Determines if there are any more records in the `GlideAggregate` object.

---

```js
var agg = new GlideAggregate('incident');

agg.addAggregate('AVG', 'sys_mod_count');
agg.groupBy('category');
agg.query();

while (agg.hasNext()) {
  var avg = agg.getAggregate('AVG', 'sys_mod_count'),
      category = agg.category.getDisplayValue();

  agg.next();

  gs.info(category + ': AVG = ' + avg);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateHasNext)