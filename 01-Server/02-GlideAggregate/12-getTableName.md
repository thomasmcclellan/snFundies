##### 7/18/2019
# `getTableName()`

## Return value:
| Type | Description |
|---|---|
| String | The table name. |

---

## Description:
Retrieves the table name associated with this `GlideAggregate` object.

---

```js
var count = new GlideAggregate('incident');

count.addAggregate('MIN', 'sys_mod_count');
count.addAggregate('MAX', 'sys_mod_count');
count.addAggregate('AVG', 'sys_mod_count');
count.groupBy('category');
count.query();

gs.info(count.getTableName());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateGetTableName)