##### 7/16/2019
# `getAggregateEncodedQuery()`

## Return value:
| Type | Description |
|---|---|
| `string` | The encoded query to get the aggregate |

---

## Description:
Gets the query necessary to return the current aggregate.

---

```js
var count = new GlideAggregate('incident');

count.addAggregate('MIN', 'sys_mod_count');
count.groupBy('category');
count.query();

while (count.next())
  gs.info(count.getAggregateEncodedQuery());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateGetAggregateEncodedQuery)