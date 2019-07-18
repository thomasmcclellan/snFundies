##### 7/17/2019
# `getEncodedQuery()`

## Return value:
| Type | Description |
|---|---|
| String | The encoded query |

---

## Description:
Retrieves the encoded query.

---

```js
var count = new GlideAggregate('incident');

count.addAggregate('MIN', 'sys_mod_count');
count.addAggregate('MAX', 'sys_mod_count');
count.addAggregate('AVG', 'sys_mod_count');
count.groupBy('category');
count.query();

gs.info(count.getEncodedQuery());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateGetEncodedQuery)