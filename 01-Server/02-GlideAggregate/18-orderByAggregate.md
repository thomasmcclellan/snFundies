##### 7/18/2019
# `orderByAggregate(agg, fieldName)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| agg | String | Type of aggregation |
| fieldName | String | Name of the field to aggregate |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value |

---

## Description:
Orders the aggregates based on the specified aggregate and field.

---

```js
ga.addAggregate('COUNT', 'category');
ga.orderByAggregate('count', 'category');
ga.query();
 
while(ga.next()) {
  gs.info('Category ' + ga.category + ' ' + ga.getAggregate('COUNT', 'category'));
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateOrderByAggregate_String_String)