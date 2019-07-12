##### 7/10/2019
# `addNotNullQuery(fieldName)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | String | The name of the field |

## Return value:
| Type | Description |
|---|---|
| GlideQueryCondition | The scoped query condition |

---

## Description:
Adds a not null query to the aggregate.

---

```js
var count = new GlideAggregate('incident');

count.addNotNullQuery('short_description');
count.query(); // Issue the query to the db to get all records

while(count.next()) {
  // add code here to process the aggregate
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateAddNotNullQuery_String)