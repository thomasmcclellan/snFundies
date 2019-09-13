##### 7/18/2019
# `getRowCount()`

## Return value:
| Type | Description |
|---|---|
| `number` | The number of rows in the `GlideAggregate` object. |

---

## Description:
Retrieves the number of rows in the `GlideAggregate` object.

---

```js
var count = new GlideAggregate('incident');

count.addAggregate('MIN', 'sys_mod_count');
count.addAggregate('MAX', 'sys_mod_count');
count.addAggregate('AVG', 'sys_mod_count');
count.groupBy('category');
count.query();

gs.info(count.getRowCount());

while (count.next()) {
  var min = count.addAggregate('MIN', 'sys_mod_count'),
      max = count.addAggregate('MAX', 'sys_mod_count'),
      avg = count.addAggregate('AVG', 'sys_mod_count'),
      category = count.category.getDisplayValue();
  
  gs.info(category + ' Update counts: MIN = ' + min + ' MAX = ' + max + ' AVG = ' + avg);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateGetRowCount)